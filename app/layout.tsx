import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppNavbar from "./AppNavbar";
import "./globals.css";
import AuthSessionProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <AuthSessionProvider>
          <AppNavbar />
          <main className="m-4">{children}</main>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
