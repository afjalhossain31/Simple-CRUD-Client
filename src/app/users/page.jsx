import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "../components/UsersTable";
import { addUser, deleteUser } from "../lib/actions";
import AddUserModal from "../components/AddUserModal";

const UsersPage = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h2>Total users: {users.length}</h2>
        <AddUserModal addUserAction={addUser} />
      </div>
      <UsersTable users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default UsersPage;
