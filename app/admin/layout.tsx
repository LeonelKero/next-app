import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-400 p-5">Side Element for All Sub-pages</aside>
      <div className="ml-5">{children}</div>
    </div>
  );
};

export default AdminLayout;
