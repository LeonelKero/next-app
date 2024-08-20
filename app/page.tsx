import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <section>Hello {session && <span>{session.user?.name}</span>}</section>
      <section>
        <Link href={"/users"}>Users</Link>
      </section>
      <h1>Welcome to NextJs</h1>
    </main>
  );
}
