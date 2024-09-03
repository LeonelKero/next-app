import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" }
            },
            async authorize(credentials, req) {
                // If one of the required credential miss, do nothing, just return
                if (!credentials?.password || !credentials.email) return null
                // If all credentials element are there, find the corresponding user into database
                const user = await prisma.user.findUnique({ where: { email: credentials.email } })
                // If nothing is found, do nothing, just return
                if (!user) return null
                // Otherwise, check the password and make sure it matches with the saved hash
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)
                return passwordMatch ? user : null
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session: {
        strategy: "jwt"
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
