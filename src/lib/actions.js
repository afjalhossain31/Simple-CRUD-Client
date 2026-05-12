import { CheckShape } from "@gravity-ui/icons";
import { toast } from "@heroui/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteUser = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }
  toast.danger("Storage is full", {
    actionProps: { children: "Remove", onPress: noop, variant: "danger" },
    description:
      "Remove files to release space. Adding more text to demonstrate longer content display",
    indicator: <CheckShape />,
  });
  return data;
};

export const updateUser = async (userId, formData) => {
  const updatedUser = Object.fromEntries(formData.entries());
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  const data = await res.json();
  if (data.modifiedCount > 0) {
    revalidatePath("/users/" + userId); // Revalidate the /users page to reflect the update
    redirect("/users/"); // Redirect to the user details page after successful update
  }
  return data;
};

export const addUser = async (formData) => {
  "use server";
  const newUser = Object.fromEntries(formData.entries());
  const res = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();
  if (data.insertedId) {
    revalidatePath("/users"); // Revalidate the /users page to reflect the new user
  }
  return data;
};
