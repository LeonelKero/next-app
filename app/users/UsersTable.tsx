"use client";
import { sort } from "fast-sort";
import { useState } from "react";
import WBT_Button from "../components/AppBtn/WBT_Button";

type Props = {
  searchParams: { sortBy: string };
  users: User[];
};

const UsersTable = ({ searchParams: { sortBy }, users }: Props) => {
  const [usersData, setUsersData] = useState(users);

  // Todo: Sort table elements
  const sortByHandler = (filedName: string) => {
    setUsersData((olds) => sort(olds).asc((user) => user.name));
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
                <WBT_Button
                  class_name="btn btn-ghost"
                  onClick={() => sortByHandler("name")}
                >
                  NAME
                </WBT_Button>
              </th>
              <th>USERNAME</th>
              <th>EMAIL</th>
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
