"use client";
import { useState } from "react";
import WBT_Button from "../components/AppBtn/WBT_Button";

type Props = {
  searchParams: { sort: string };
  users: User[];
};

const UsersTable = ({ searchParams: { sort }, users }: Props) => {
  const [usersData, setUsersData] = useState(users);

  const sortBy = (field: string) => {};

  return (
    <div>
      <section>Order by {sort}</section>
      <section className="overflow-x-auto">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>
                <WBT_Button
                  class_name="btn btn-ghost"
                  onClick={() => console.log("Button clicked")}
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
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UsersTable;
