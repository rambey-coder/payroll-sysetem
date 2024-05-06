import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Group } from "@mantine/core";
import {
  IconSettings,
  IconLogout,
  IconWallet,
  IconUserCheck,
  IconBriefcase,
  IconUsers,
  IconLayoutGrid,
  IconCalendarEvent,
} from "@tabler/icons-react";

interface Props {
  children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
  const [active, setActive] = useState("Dashboard");

  const navigation = [
    { link: "", label: "Dashboard", icon: IconLayoutGrid },
    { link: "", label: "Job Desk", icon: IconBriefcase },
    { link: "", label: "Emloyee", icon: IconUsers },
    { link: "", label: "Leave", icon: IconCalendarEvent },
    { link: "", label: "Attendance", icon: IconUserCheck },
    { link: "", label: "Payroll", icon: IconWallet },
    { link: "", label: "Settings", icon: IconSettings },
  ];

  const navLinks = navigation.map((item) => (
    <Link
      className={"link"}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setActive(item.label);
      }}>
      <item.icon className={"linkIcon"} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <div className="flex relative w-[100%] h-[100vh]">
      <nav className={"navbar bg-[#fff] overflow-y-hidden"}>
        <div className={"navbarMain"}>
          <Group className={"header"} justify="space-between">
            <Link to={""} className="text-gray-400">
              HCM Solution
            </Link>
          </Group>
          {navLinks}
        </div>

        <div className={"footer"}>
          <div className="link">
            <IconLogout className={"linkIcon"} stroke={1.5} />
            <span>Logout</span>
          </div>
        </div>
      </nav>

      <section className="w-[100%] bg-[#f8f9fa] overflow-y-scroll p-[1rem]">
        {children}
      </section>
    </div>
  );
};

export default Sidebar;
