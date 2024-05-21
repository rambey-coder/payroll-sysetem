import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/components/sidebar/Sidebar";

export const Auth = () => {
  const [pageName, setPageName] = React.useState("");
  return (
    <Sidebar pageName={pageName}>
      <Outlet context={[setPageName]} />
    </Sidebar>
  );
};
