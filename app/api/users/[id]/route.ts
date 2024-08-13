import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"
import userSchema from "../schema"

interface Props {
    params: { id: string }
}

// GET user by Id
export const GET = async (request: NextRequest, { params: { id } }: Props) => {
    const userId = parseInt(id, 10)
    const result = await prisma.user.findFirst({ where: { id: userId } })
    if (!result) return NextResponse.json({}, { status: 404 })
    return NextResponse.json(result, { status: 200 })
}

// DELETE user by ID
export const DELETE = async (request: NextRequest, { params: { id } }: Props) => {
    const userId = parseInt(id, 10)
    const result = await prisma.user.findUnique({ where: { id: userId } })
    if (!result) // Check if user object is not returned
        return NextResponse.json({ error: "User resource with Id " + userId + " does not exist" }, { status: 400 })
    // Otherwise remove object fron database
    await prisma.user.delete({ where: { email: result.email } })

    return NextResponse.json({ message: "User resource successfully deleted" }, { status: 200 })
}

// UPDATE user
export const PUT = async (request: NextRequest, { params: { id } }: Props) => {
    const userId = parseInt(id, 10)
    const optionalUser = await prisma.user.findFirst({ where: { id: userId } })
    if (!optionalUser)
        return NextResponse.json({}, { status: 400 })

    const userBody = await request.json()
    // check if submitted request is valid according to our schema
    const validated = userSchema.safeParse(userBody)
    if (!validated.success)
        return NextResponse.json({ error: validated.error.errors }, { status: 400 })
    // If everything is fine, proceed to update & save/persist
    const updatedObject = {
        id: optionalUser.id,
        name: validated.data.name,
        email: validated.data.email,
        followers: validated.data?.followers,
        isActive: validated.data?.isActive
    }
    const updateResponse = await prisma.user.update({ data: updatedObject, where: { id: userId } })

    return NextResponse.json(updateResponse, { status: 200 })
}
