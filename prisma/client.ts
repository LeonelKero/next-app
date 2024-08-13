import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient()

declare const glocalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = glocalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') glocalThis.prismaGlobal = prisma