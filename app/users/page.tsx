// "use client";
import Link from "next/link";
import WBT_Button from "../components/AppBtn/WBT_Button";

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
  let users: User[] = await result.json();

  const removeElement = (id: number) => {
    // users = users.filter((user) => user.id !== id);
    console.log("DELETE", id);
  };

  return (
    <main>
      <section>
        <Link href={"/"}>Home</Link>
      </section>
      <section className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>CITY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                {/* <td>
                  <WBT_Button
                    class_name="btn btn-secondary"
                    onClick={() => removeElement(user.id)}
                  >
                    DELETE
                  </WBT_Button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default UsersPage;
