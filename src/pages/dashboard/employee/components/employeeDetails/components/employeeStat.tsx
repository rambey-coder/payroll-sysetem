import React, { useEffect, useState } from "react";
import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import { NameProfile } from "../../../../../../components/nameProfile";
import { useLocation, useParams } from "react-router-dom";
import { EmployeeData } from "../../../../../../store/employee/interface";
import {
  IconChartLine,
  IconDatabase,
  IconHierarchy2,
} from "@tabler/icons-react";
import { useGetEmployeeQuery } from "../../../../../../store/employee";

export const EmployeeStat = () => {
  const location = useLocation();
  const { id } = useParams();

  const { data } = useGetEmployeeQuery(id);

  const employeeDetails = data?.data;

  console.log(data?.data);

  // const [employeeDetails, setEmployeeDetails] = useState<EmployeeData>({
  //   name: "",
  //   department: "",
  //   id: 0,
  //   role: "",
  //   status: "",
  // });

  // useEffect(() => {
  //   if (location.state) setEmployeeDetails(location.state);
  // }, [location]);

  const style = {
    // backgroundColor: background,
    color: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
      <Paper bg={"#fefae0"} radius="md" p="md">
        <Group>
          <NameProfile
            name={`${employeeDetails?.user?.first_name} ${employeeDetails?.user?.last_name}`}
          />

          <div>
            <Text fw={700} size="xl">
              {`${employeeDetails?.user?.first_name} ${employeeDetails?.user?.last_name}`}
            </Text>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {employeeDetails?.role}
            </Text>
          </div>
        </Group>
      </Paper>
      <Paper bg={"#00b4d8"} radius="md" p="md">
        <Group>
          <div
            style={{
              backgroundColor: "#caf0f8",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <IconDatabase className={"icon "} stroke={1.5} color="#03045e" />
          </div>

          <div>
            <Text fw={700} size="xl">
              Employee ID
            </Text>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {employeeDetails?.id}
            </Text>
          </div>
        </Group>
      </Paper>
      <Paper bg={"#84a98c"} radius="md" p="md">
        <Group>
          <div
            style={{
              backgroundColor: "#cad2c5",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <IconChartLine className={"icon "} stroke={1.5} color="#354f52" />
          </div>

          <div>
            <Text fw={700} size="xl">
              Status
            </Text>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {employeeDetails?.status}
            </Text>
          </div>
        </Group>
      </Paper>
      <Paper bg={"#415a77"} radius="md" p="xs">
        <Group>
          <div
            style={{
              backgroundColor: "#778da9",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <IconHierarchy2 className={"icon "} stroke={1.5} color="#1b263b" />
          </div>

          <div>
            <Text fw={700} size="xl">
              Department
            </Text>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {employeeDetails?.department}
            </Text>
          </div>
        </Group>
      </Paper>
    </SimpleGrid>
  );
};
