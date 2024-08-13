import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

export const GET = (request: NextRequest, { params: { id } }: Props) => {
  if (parseInt(id, 10) > 10)
    return NextResponse.json(
      { error: "Product resource not found" },
      { status: 404 }
    );
  return NextResponse.json(
    {
      id: 1,
      name: "Java",
      price: 500,
    },
    { status: 200 }
  );
};

export const DELETE = (request: NextRequest, { params: { id } }: Props) => {
  return NextResponse.json(
    { message: "Product with ID " + id + " successfully removed" },
    { status: 200 }
  );
};
