// "use client";
import Link from "next/link";
import UsersTable from "./UsersTable";
type Props = {
  searchParams: { sort: string };
};
const UsersPage = ({ searchParams }: Props) => {
  return (
    <main>
      <section>
        <Link href={"/"}>Home</Link>
        <UsersTable searchParams={searchParams} />
      </section>
    </main>
  );
};

export default UsersPage;
