import React, { useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
  Badge,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { NameProfile } from "../../../../../components/nameProfile";

interface RowData {
  name: string;
  department: string;
  employee_id: string;
  role: string;
  status: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={"th"}>
      <UnstyledButton onClick={onSort} className={"control"}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={"icon"}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    role: "Manager",
    name: "Athena Weissnat",
    status: "full_time",
    department: "Admin",
    employee_id: "AB1230",
  },

  {
    role: "QA",
    name: "John Doe",
    status: "part_time",
    department: "Product",
    employee_id: "AB1231",
  },
  {
    role: "Backend Engineer",
    name: "Jane Smith",
    status: "intern",
    department: "Engineering",
    employee_id: "AB1232",
  },
  {
    role: "Sales",
    name: "Bob Johnson",
    status: "contract",
    department: "Produt",
    employee_id: "AB1233",
  },
  {
    role: "Frontend Engineer",
    name: "Alice Williams",
    status: "full_time",
    department: "Engineering",
    employee_id: "AB1234",
  },
  {
    role: "Customer Success",
    name: "Charlie Brown",
    status: "part_time",
    department: "Support",
    employee_id: "AB125",
  },
];

export const EmployeeTable = () => {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const navigate = useNavigate();

  const rows = sortedData.map((row, i) => (
    <Table.Tr
      onClick={() => navigate(`/dashboard/employee/${row.employee_id}`)}
      key={i}
      className="cursor-pointer"
      >
      <Table.Td className="flex items-center gap-3">
        <NameProfile name={row.name} />
        <span>{row.name}</span>
      </Table.Td>
      <Table.Td>{row.employee_id}</Table.Td>
      <Table.Td>
        {row.status === "full_time" ? (
          <Badge color="green" variant="light">
            FULL-TIME
          </Badge>
        ) : row.status === "part_time" ? (
          <Badge color="orange" variant="light">
            PART_TIME
          </Badge>
        ) : row.status === "contract" ? (
          <Badge color="blue" variant="light">
            CONTRACT
          </Badge>
        ) : (
          <Badge color="gray" variant="light">
            INTERN
          </Badge>
        )}
      </Table.Td>
      <Table.Td>{row.department}</Table.Td>
      <Table.Td>{row.role}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Group className="justify-between mb-3">
        <Text className="text-xl font-medium text-[#495057]">All Employee</Text>

        <TextInput
          placeholder="Search by any field"
          mb="md"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          value={search}
          onChange={handleSearchChange}
        />
      </Group>
      <hr />

      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        className="mt-3"
        layout="fixed">
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === "name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("name")}>
              Name
            </Th>
            <Th
              sorted={sortBy === "employee_id"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("employee_id")}>
              Employee ID
            </Th>
            <Th
              sorted={sortBy === "status"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("status")}>
              Status
            </Th>
            <Th
              sorted={sortBy === "department"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("department")}>
              Department
            </Th>
            <Th
              sorted={sortBy === "role"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("role")}>
              Role
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
};
