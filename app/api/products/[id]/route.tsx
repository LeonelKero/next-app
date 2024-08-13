import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

interface Props {
  params: { id: string };
}

// GET Product by ID
export const GET = async (request: NextRequest, { params: { id } }: Props) => {
  // Convert string to number
  const productId = parseInt(id, 10);
  // Check if product exists
  const optionalProduct = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!optionalProduct)
    return NextResponse.json(
      { error: "Product resource with ID " + productId + " not found" },
      { status: 404 }
    );
  // If product exists, return it
  return NextResponse.json(optionalProduct, { status: 200 });
};

// DELETE Produc tby ID
export const DELETE = async (
  request: NextRequest,
  { params: { id } }: Props
) => {
  const productId = parseInt(id, 10);
  const optionalProduct = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!optionalProduct)
    return NextResponse.json(
      { error: "Unable to find product resouce eith ID " + productId },
      { status: 404 }
    );
  await prisma.product.delete({ where: { id: productId } });
  return NextResponse.json(
    { message: "Product with ID " + productId + " successfully removed" },
    { status: 200 }
  );
};

// UPDATE Product by ID
export const UPDATE = async (
  request: NextRequest,
  { params: { id } }: Props
) => {
  // convert id from string to number
  const productId = parseInt(id, 10);
  // check if such product is in database
  const optionalProduct = await prisma.product.findUnique({
    where: { id: productId },
  });
  // if not return 404 - not found
  if (!optionalProduct)
    return NextResponse.json(
      { error: "Product resource with ID " + productId + " not found" },
      { status: 404 }
    );
  // if such product exists in database, get request body
  const requestBody = await request.json();
  // validate request body
  const validatedProduct = productSchema.safeParse(requestBody);
  // if request body is invalid return 400 - bad request
  if (!validatedProduct.success)
    return NextResponse.json(
      { error: "Unable to perform this action" },
      { status: 400 }
    );
  // if request body is valid, forge new product
  const newProduct = {
    name: validatedProduct.data.name,
    price: validatedProduct.data.price,
  };
  // proceed update
  const updatedProduct = await prisma.product.update({
    data: newProduct,
    where: { id: productId },
  });
  // return 200 - ok
  return NextResponse.json(updatedProduct, { status: 200 });
};
