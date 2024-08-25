import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { object, string } from "zod";

const requesSchema = object({
  email: string().email(),
  password: string().min(8),
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // Make sure that the request body match the expected request schema
  const bodyValidation = requesSchema.safeParse(body);
  if (!bodyValidation.success)
    return NextResponse.json(
      { error: bodyValidation.error.errors },
      { status: 400 }
    );
  // As schema matches
  // Check if there no other user with the sane credentials
  const potentialUser = await prisma.user.findUnique({
    where: { email: bodyValidation.data.email },
  });
  // If user does exist
  if (potentialUser)
    return NextResponse.json({ error: "User already esxist" }, { status: 400 });
  // Otherwise register this new user
  // First Hash the passeword
  const hashedPassword = await bcrypt.hash(bodyValidation.data.password, 10);
  // Then persist user data
  const newUser = await prisma.user.create({
    data: { email: bodyValidation.data.email, hashedPassword },
  });

  return NextResponse.json({ email: newUser.email }, { status: 201 });
};
