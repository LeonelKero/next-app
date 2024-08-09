import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

const GET = (request: NextRequest, { params: { id } }: Props) => {
  if (parseInt(id, 10) > 10)
    return NextResponse.json(
      { error: "Book with ID " + id + " not found" },
      { status: 404 }
    );
  return NextResponse.json(
    { id: 1, title: "Rust programming language " + id },
    { status: 200 }
  );
};

export { GET };
