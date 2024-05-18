import React from "react";
import { BreadCrumb } from "../../../../../components/breadCrumb/breadCrumb";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const { id } = useParams<string>();
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
  return (
    <div>
      <BreadCrumb items={items} />
    </div>
  );
};
