"use client";
import { sort } from "fast-sort";
import Link from "next/link";
import { useState } from "react";
import WBT_Button from "../components/AppBtn/WBT_Button";

type Props = {
  searchParams: { sortBy: string };
  users: User[];
};

const UsersTable = ({ searchParams: { sortBy }, users }: Props) => {
  const [usersData, setUsersData] = useState(users);

  // Todo: Sort table elements
  const sortByHandler = (filedName: "name" | "username" | "email") => {
    setUsersData((olds) => sort(olds).asc((user) => user[filedName]));
  };

  const deleteHandler = (eltId: number) => {
    setUsersData((olds) => olds.filter((user) => user.id !== eltId));
  };

  return (
    <div>
      <section>Order by {sortBy}</section>
      <section className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>
                <Link
                  href={"/users?sortBy=name"}
                  onClick={() => sortByHandler("name")}
                >
                  NAME
                </Link>
              </th>
              <th>
                <Link
                  href={"/users?sortBy=username"}
                  onClick={() => sortByHandler("username")}
                >
                  USERNAME
                </Link>
              </th>
              <th>
                <Link
                  href={"/users?sortBy=email"}
                  onClick={() => sortByHandler("email")}
                >
                  EMAIL
                </Link>
              </th>
              <th>CITY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>
                  <WBT_Button
                    class_name="btn btn-secondary"
                    onClick={() => deleteHandler(user.id)}
                  >
                    Delete
                  </WBT_Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UsersTable;
