import Link from "next/link";
import UsersTable from "./UsersTable";

type Props = {
  searchParams: { sortBy: string };
};

const UsersPage = async ({ searchParams: { sortBy } }: Props) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  let users: User[] = await result.json();

  return (
    <main>
      <section>
        <Link href={"/"}>Home</Link>
        <UsersTable sortBy={sortBy} users={users} />
      </section>
    </main>
  );
};

export default UsersPage;
