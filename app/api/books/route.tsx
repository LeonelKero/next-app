import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

const GET = (request: NextRequest) =>
  NextResponse.json([
    { id: 1, title: "Programming in React" },
    { id: 2, title: "Hands on NextJs" },
  ]);

const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validationStatus = schema.safeParse(body);

  if (!validationStatus.success)
    return NextResponse.json(
      { error: validationStatus.error.errors },
      { status: 405 }
    );
  return NextResponse.json({ id: 1, ...body }, { status: 201 });
};

export { GET, POST };
