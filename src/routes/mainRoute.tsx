import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import {
  Attendance,
  Dashboard,
  Employee,
  Payroll,
  SignIn,
  SignUp,
} from "../pages";
import { Auth } from "./auth";

export const MainRoute = () => {
  return (
    <ScrollToTop>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* protected route */}
          <Route path="/dashboard/*" element={<Auth />}>
            <Route path="overview" element={<Dashboard />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="employee" element={<Employee />} />
          </Route>
        </Routes>
      </MantineProvider>
    </ScrollToTop>
  );
};
