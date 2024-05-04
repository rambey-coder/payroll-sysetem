import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Group, Code } from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconDashboard,
  IconLogout,
} from "@tabler/icons-react";

interface Props {
  // children: React.ReactNode;
}

export const Sidebar: React.FC<Props> = () => {
  const [active, setActive] = useState("Dashboard");

  const navigation = [
    { link: "", label: "Dashboard", icon: IconDashboard },
    { link: "", label: "Job Desk", icon: IconReceipt2 },
    { link: "", label: "Emloyee", icon: IconFingerprint },
    { link: "", label: "Leave", icon: IconKey },
    { link: "", label: "Attendance", icon: IconDatabaseImport },
    { link: "", label: "Payroll", icon: Icon2fa },
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
    <div>
      <nav className={"navbar"}>
        <div className={"navbarMain"}>
          <Group className={"header"} justify="space-between">
            <Link to={""} className="text-gray-400">
              HCM Solution
            </Link>
          </Group>
          {navLinks}
        </div>

        <div className={"footer"}>
          <div>
            <IconLogout className={"linkIcon"} stroke={1.5} />
            <span>Logout</span>
          </div>
        </div>
      </nav>
    </div>
  );
};
