"use client";
import { AlertDialog, Button, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UsersTable = ({ users, deleteUserAction }) => {
  const handleDelete = async (userId) => {
    await deleteUserAction(userId);
    console.log(`Deleting user with ID: ${userId}`);
  };
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-150">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2 ">
                    <Link href={`/users/${user._id}`}>
                      <Button variant="outline">Details</Button>
                    </Link>
                    <Link href={`/users/${user._id}/edit`}>
                      <Button variant="secondary">Edit</Button>
                    </Link>
                    <AlertDialog>
                      <Button variant="danger">Delete User</Button>
                      <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                          <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                              <AlertDialog.Icon status="danger" />
                              <AlertDialog.Heading>
                                Delete user permanently?
                              </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                              <p>
                                This will permanently delete{" "}
                                <strong>{user.name}</strong> and all of its
                                data. This action cannot be undone.
                              </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                              <Button slot="close" variant="tertiary">
                                Cancel
                              </Button>
                              <Button
                                onClick={() => handleDelete(user?._id)}
                                slot="close"
                                variant="danger"
                              >
                                Delete User
                              </Button>
                            </AlertDialog.Footer>
                          </AlertDialog.Dialog>
                        </AlertDialog.Container>
                      </AlertDialog.Backdrop>
                    </AlertDialog>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UsersTable;
