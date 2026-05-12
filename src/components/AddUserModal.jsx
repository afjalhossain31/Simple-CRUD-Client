"use client";

import { PlusShape } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
const AddUserModal = ({ addUserAction }) => {
  return (
    <div>
      <Modal>
        <Button variant="secondary">Add User</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <PlusShape className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Add User</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Fill out the form below.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form className="flex flex-col gap-4" action={addUserAction}>
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="email" type="email">
                      <Label>Email</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                    <TextField className="w-full" name="role" type="text">
                      <Label>Role</Label>
                      <Input placeholder="Enter your role" />
                    </TextField>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        Add user
                      </Button>
                      
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default AddUserModal;
