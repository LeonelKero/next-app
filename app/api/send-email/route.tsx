import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
  const { data, error } = await resend.emails.send({
    from: "",
    to: "mishidevxyz@gmail.com",
    subject: "VCS Account verification",
    react: WelcomeTemplate({ name: "leonel ka" }),
  });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json({ data }, { status: 200 });
};
