import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Paper, SimpleGrid, Text } from "@mantine/core";
import {
  IconUsersPlus,
  IconUserCheck,
  IconUserMinus,
  IconUserX,
  IconPlus,
} from "@tabler/icons-react";
import { ButtonWithIcon } from "../../../components";
import { EmployeeTable } from "./components/table/employeeTable";

export const Employee = () => {
  const [setPageName] = useOutletContext<any>();

  const statData = [
    {
      title: "Total Employee",
      icon: IconUsersPlus,
      value: "13,456",
    },
    {
      title: "Present",
      icon: IconUserCheck,
      value: "745",
    },
    {
      title: "Absent",
      icon: IconUserMinus,
      value: "745",
    },
    {
      title: "Leave",
      icon: IconUserX,
      value: "188",
    },
  ];

  useEffect(() => {
    setPageName("Employee");
  }, []);

  return (
    <div>
      <div className="mb-8 flex justify-end">
        <ButtonWithIcon
          type="button"
          variant="outline"
          radius="md"
          name="Add Employee"
          color="#9263F8"
          leftSection={<IconPlus />}
        />
      </div>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
        {statData.map((stat) => (
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

      <div className="bg-white p-4 rounded-lg mt-[3rem]">
        <EmployeeTable />
      </div>
    </div>
  );
};
