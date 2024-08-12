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

const PUT = async (request: NextRequest, { params: { id } }: Props) => {
  const book = (await request.json()) as Book;
  if (parseInt(id, 10) > 10 || !book.title || !book.releasedAt)
    return NextResponse.json(
      { message: "Unable to perform update" },
      { status: 403 }
    );

  return NextResponse.json(
    {
      id: book.id,
      title: book.title.concat(" UPDATED "),
      releasedAt: book.releasedAt,
    },
    { status: 200 }
  );
};

export { GET, PUT };
