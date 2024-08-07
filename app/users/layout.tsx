import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const UserLayoutPage = ({ children }: Props) => {
  return <div className="m-5">{children}</div>;
};

export default UserLayoutPage;
