import { notFound } from "next/navigation";

interface Props {
  params: { userId: number };
}

const UserDetails = ({ params: { userId } }: Props) => {
  if (userId > 10) notFound();

  return <div>UserDetails {userId}</div>;
};

export default UserDetails;
