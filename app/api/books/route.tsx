import { NextRequest, NextResponse } from "next/server";

const GET = (request: NextRequest) =>
  NextResponse.json([
    { id: 1, title: "Programming in React" },
    { id: 2, title: "Hands on NextJs" },
  ]);

const POST = async (request: NextRequest) => {
  const body = (await request.json()) as Book;
  if (!body.title || !body.releasedAt)
    return NextResponse.json(
      { error: "Invalid data submitted" },
      { status: 405 }
    );
  return NextResponse.json({ id: 1, ...body }, { status: 201 });
};

export { GET, POST };
