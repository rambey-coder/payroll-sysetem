import React from "react";
import { Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  PrimaryButton,
  SelectOption,
  TxtInput,
} from "../../../../../components";
import { useAddEmployeeMutation } from "../../../../../store/employee";

interface Props {
  opened: boolean;
  close: () => void;
}

export const AddEmployee: React.FC<Props> = ({ opened, close }) => {
  const [addEmployee, { data, isError, isLoading, isSuccess }] =
    useAddEmployeeMutation();

  console.log("err", isError, "load", isLoading, "succ", isSuccess, data);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      department: "",
      role: "",
      status: "",
      salary: "",
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
    {
      label: "Intern",
      value: "intern",
    },
  ];

  return (
    <Modal opened={opened} onClose={close} centered title="Add Employee">
      <form
        onSubmit={form.onSubmit((values) => {
          form.validate();

          const isValid = form.isValid();

          if (isValid) addEmployee(values);
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
        <div className="mb-3">
          <TxtInput
            label="Salary"
            type="text"
            id="salary"
            name="salary"
            placeholder="Salary"
            required
            key={form.key("salary")}
            {...form.getInputProps("salary")}
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
