import React, { useEffect } from "react";
import { BreadCrumb } from "../../../../../components/breadCrumb/breadCrumb";
import { useOutletContext, useParams } from "react-router-dom";
import { EmployeeStat } from "./components/employeeStat";
import {
  IconClock,
  IconLogin,
  IconCoffee,
  IconLogout,
  IconTrash,
  IconEdit,
} from "@tabler/icons-react";
import { SimpleGrid, Paper, Text } from "@mantine/core";
import { AttendanceTable } from "./components";
import { ButtonWithIcon, PrimaryButton } from "../../../../../components";

export const EmployeeDetails = () => {
  const { id } = useParams<string>();
  const [setPageName] = useOutletContext<any>();

  useEffect(() => {
    setPageName("Employee Details");
  }, []);

  const items = [
    {
      title: "Employee",
      href: "/dashboard/employee",
    },
    {
      title: id ? id : "",
      href: "#",
    },
  ];

  const data = [
    {
      title: "Average Working Hour",
      icon: IconClock,
      value: "13,456",
    },
    { title: "Average In Time", icon: IconLogin, value: "4,145", diff: -13 },
    {
      title: "Average Out Time",
      icon: IconLogout,
      value: "745",
    },
    {
      title: "Average Break Time",
      icon: IconCoffee,
      value: "188",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <BreadCrumb items={items} />

        <div className="flex gap-5 items-center">
          <ButtonWithIcon
            leftSection={
              <IconTrash className="icon" stroke={1.5} color="#d90429" />
            }
            variant="light"
            name="Terminate Contract"
            color="#d90429"
            type="button"
            radius="md"
          />

          <ButtonWithIcon
            leftSection={
              <IconEdit className="icon" stroke={1.5} color="#c8b6ff" />
            }
            variant="filled"
            name="Edit"
            color="#6247aa"
            type="button"
            radius="md"
          />
        </div>
      </div>

      <div className="my-12">
        <EmployeeStat />
      </div>

      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} className="my-8">
        {data.map((stat) => (
          <Paper withBorder p="md" radius="md" key={stat.title}>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#F6F4FF] p-2 rounded-full">
                <stat.icon className={"icon "} stroke={1.5} color="#9263f8" />
              </div>
              <Text className={"value text-[#212529]"}>{stat.value}</Text>
              <Text size="xs" c="dimmed" className={"title text-[#f8f9fa]"}>
                {stat.title}
              </Text>
            </div>
          </Paper>
        ))}
      </SimpleGrid>

      <div className="bg-white p-4 mt-8">
        <AttendanceTable />
      </div>
    </div>
  );
};
