import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/components/sidebar/Sidebar";

export const Auth = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};
