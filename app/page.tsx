import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <Link href={"/users"}>Users</Link>
      </section>
      <h1>Welcome to NextJs</h1>
    </main>
  );
}
