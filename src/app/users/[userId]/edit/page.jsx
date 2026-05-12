import { updateUser } from "@/app/lib/actions";
import { getUserById } from "@/app/lib/data";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UserEditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log(user);

  const updateUserWrapper = async (formData) => {
    "use server";
    return updateUser(userId, formData);
  };

  return (
    <div className="container mx-auto m-12">
      <h2 className="text-center">
        Updating details of{" "}
        <span className="font-bold text-purple-700">{user?.name}</span>
      </h2>
      <div className="w-1/2 max-w-7xl mx-auto">
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField
            className="w-full"
            name="name"
            defaultValue={user?.name}
            type="text"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="email"
            defaultValue={user?.email}
            type="email"
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="role"
            defaultValue={user?.role}
            type="text"
          >
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>
          <div className="flex gap-2">
            <Link href={"/users/"}>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
            </Link>
            <Button type="submit" slot="close">
              Update user
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditPage;
