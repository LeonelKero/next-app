import Link from "next/link";

const AppNavbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Datastore
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/admin"}>Admin</Link>
          </li>
          <li>
            <details>
              <summary>Others</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li className="w-auto">
                  <Link href={"/lost"}>Lost path</Link>
                </li>
                <li>
                  <Link href={"/error"}>Error path</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppNavbar;
