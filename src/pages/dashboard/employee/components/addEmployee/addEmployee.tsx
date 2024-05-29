import React, { useEffect } from "react";
import { Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  PrimaryButton,
  SelectOption,
  TxtInput,
} from "../../../../../components";
import {
  useAddEmployeeMutation,
  useGetAllEmployeeQuery,
} from "../../../../../store/employee";
import { useGetAllUserQuery } from "../../../../../store/auth";
import { alert } from "../../../../../utils";
import { departmentLists, statusList } from "./constants";

interface Props {
  opened: boolean;
  close: () => void;
}

export const AddEmployee: React.FC<Props> = ({ opened, close }) => {
  const [addEmployee, { data, isError, isLoading, isSuccess }] =
    useAddEmployeeMutation();

  const { data: allUser } = useGetAllUserQuery();
  const { refetch } = useGetAllEmployeeQuery();

  useEffect(() => {
    if (isSuccess) {
      alert.success("Employee Added Successfully");
      refetch();
      close();
    }

    if (isError) alert.error("An error Occured" || data?.message);
  }, [isSuccess, isError, data]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      userId: "",
      department: "",
      role: "",
      status: "",
      salary: "",
    },
  });

  const transformedData =
    allUser?.data.map((item) => ({
      label: `${item.first_name} ${item.last_name}`,
      value: item.id.toString(),
    })) || [];

  return (
    <Modal opened={opened} onClose={close} centered title="Add Employee">
      <form
        onSubmit={form.onSubmit((values) => {
          form.validate();

          const isValid = form.isValid();

          if (isValid) {
            const payload = {
              ...values,
              salary: Number(values.salary),
              status: values.status.toString(),
            };

            addEmployee(payload);
          }
        })}>
        <div className="mb-3">
          <SelectOption
            label="Empoyee"
            name="userId"
            placeholder="Select a empoyee"
            required
            data={transformedData}
            clearable={true}
            onChange={(value) => form.setFieldValue("userId", value)}
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
          loading={isLoading}
        />
      </form>
    </Modal>
  );
};
