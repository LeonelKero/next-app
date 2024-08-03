import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

interface Address {
  street: string;
  city: string;
}

const UsersPage = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await result.json();

  return (
    <main>
      <section>
        <Link href={"/"}>Home</Link>
      </section>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </main>
  );
};

export default UsersPage;
