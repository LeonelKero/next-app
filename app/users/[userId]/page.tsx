
interface Props {
  params: { userId: number };
}

const UserDetails = ({ params: { userId } }: Props) => {
  return <div>UserDetails {userId}</div>;
};

export default UserDetails;
