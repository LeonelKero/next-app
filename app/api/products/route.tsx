import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

// POST
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  // Validate request body
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  // Persist element to database
  const savedProduct = await prisma.product.create({ data: validation.data });
  return NextResponse.json(savedProduct, { status: 201 });
};

// GET
export const GET = async (request: NextRequest) => {
  // Fetch products
  const productList = await prisma.product.findMany();
  return NextResponse.json(productList, { status: 200 });
};
