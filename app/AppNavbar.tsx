"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const AppNavbar = () => {
  const { status, data: session } = useSession();

  // if (status === "unauthenticated") return null;

  return (
    <div className="navbar bg-gray-300">
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
          {status === "unauthenticated" ? (
            <li>
              <Link href={"/api/auth/signin"}>Login</Link>
            </li>
          ) : (
            <div>{session?.user?.name}</div>
          )}
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
