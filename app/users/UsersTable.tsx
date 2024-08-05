type Props = {
  searchParams: { sort: string };
};

const UsersTable = async ({ searchParams: { sort } }: Props) => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  let users: User[] = await result.json();

  return (
    <div>
      <section>Order by {sort}</section>
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
