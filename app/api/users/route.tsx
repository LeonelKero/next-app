import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";

export const GET = async (request: NextRequest) => {
  const userList = await prisma.user.findMany();
  return NextResponse.json(userList, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const userRequest = await request.json();
  const validationStatus = userSchema.safeParse(userRequest); // validate user data against schema

  // If it does not match, it is a bad request
  if (!validationStatus.success)
    return NextResponse.json(
      { error: validationStatus.error.errors },
      { status: 400 }
    );

  // As email is unique, first check if it is not already used
  const optionalUser = await prisma.user.findFirst({
    where: { email: validationStatus.data.email },
  });
  if (optionalUser)
    // if such user exist - BAD REQUEST
    return NextResponse.json({ error: "Email already used" }, { status: 400 });
  // Then if 'email' is not yet use, save
  const result = await prisma.user.create({ data: userRequest });
  return NextResponse.json(result, { status: 201 });
};
