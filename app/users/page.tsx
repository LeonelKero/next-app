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
        <Link href={"/users/new"} className="btn btn-outline">
          Add User
        </Link>
        <h1 className="mt-3 mb-3">Users</h1>
        <UsersTable sortBy={sortBy} users={users} />
      </section>
    </main>
  );
};

export default UsersPage;
