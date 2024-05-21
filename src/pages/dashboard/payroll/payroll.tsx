import {
  IconAlertCircle,
  IconFileText,
  IconChecklist,
  IconLoader,
} from "@tabler/icons-react";
import { Paper, SimpleGrid, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { PayrollTable } from "./components";
import { useOutletContext } from "react-router-dom";

export const Payroll = () => {
  const data = [
    {
      title: "Drafts",
      icon: IconFileText,
      value: "$13,456",
    },
    { title: "Completed", icon: IconChecklist, value: "$4,145", diff: -13 },
    {
      title: "Pending",
      icon: IconLoader,
      value: "$7,745",
    },
    {
      title: "Overdue",
      icon: IconAlertCircle,
      value: "$2,188",
    },
  ];

  const [setPageName] = useOutletContext<any>();

  useEffect(() => {
    setPageName("Payroll");
  }, []);

  return (
    <div>
      <div className="">
        <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
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
      </div>

      <div className="bg-white p-4 rounded-lg mt-[5rem]">
        <PayrollTable />
      </div>
    </div>
  );
};
