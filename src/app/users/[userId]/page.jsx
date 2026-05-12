import { getUserById } from "@/app/lib/data";
import React from "react";

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log(user);
  return (
    <div>
      <h2>User Details: {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetailsPage;
