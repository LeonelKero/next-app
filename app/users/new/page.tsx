"use client";
import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();

  return (
    <div>
      <button className="btn" onClick={() => router.push("/users")}>
        Back home
      </button>
    </div>
  );
};

export default NewUserPage;
