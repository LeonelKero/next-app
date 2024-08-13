import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  return NextResponse.json({ id: 1, ...body }, { status: 200 });
};
