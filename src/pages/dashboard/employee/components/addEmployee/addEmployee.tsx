import React from "react";
import { Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  PrimaryButton,
  SelectOption,
  TxtInput,
} from "../../../../../components";

interface Props {
  opened: boolean;
  close: () => void;
}

export const AddEmployee: React.FC<Props> = ({ opened, close }) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      department: "",
      role: "",
      status: "",
    },

    validate: {
      name: (value) => (value.length > 2 ? null : "Input a valid name"),
    },
  });

  const departmentLists = [
    {
      label: "Admin",
      value: "admin",
    },
    {
      label: "Sales",
      value: "sales",
    },
    {
      label: "Support",
      value: "support",
    },
    {
      label: "Engineering",
      value: "Engineering",
    },
  ];

  const statusList = [
    {
      label: "Full Time",
      value: "full_time",
    },
    {
      label: "Part Time",
      value: "part_time",
    },
    {
      label: "Contract",
      value: "contract",
    },
  ];

  return (
    <Modal opened={opened} onClose={close} centered title="Add Employee">
      <form
        onSubmit={form.onSubmit((values) => {
          form.validate();

          const isValid = form.isValid();

          if (isValid) console.log(values);
        })}>
        <div className="mb-3">
          <TxtInput
            label="Full Name"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
        </div>
        <div className="mb-3">
          <SelectOption
            label="Department"
            name="department"
            placeholder="Select a department"
            required
            data={departmentLists}
            clearable={true}
            onChange={(value) => form.setFieldValue("department", value)}
          />
        </div>
        <div className="mb-3">
          <TxtInput
            label="Role"
            type="text"
            id="role"
            name="role"
            placeholder="Manager"
            required
            key={form.key("role")}
            {...form.getInputProps("role")}
          />
        </div>
        <div className="mb-4">
          <SelectOption
            label="Status"
            name="status"
            placeholder="Select status"
            required
            data={statusList}
            clearable={true}
            onChange={(value) => form.setFieldValue("status", value)}
          />
        </div>
        <PrimaryButton
          fullWidth
          color="#9263f8"
          radius="xl"
          name="Add Employee"
          type="submit"
          variant="outline"
        />
      </form>
    </Modal>
  );
};
