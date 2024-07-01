import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "@mantine/core/styles.css";
import {
  Attendance,
  Dashboard,
  Employee,
  Leave,
  Payroll,
  SignIn,
  SignUp,
} from "../pages";
import { Auth } from "./auth";
import { EmployeeDetails } from "../pages/dashboard/employee/components";

export const MainRoute = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* protected route */}
        <Route path="/dashboard/*" element={<Auth />}>
          <Route path="overview" element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="employee" element={<Employee />} />
          <Route path="employee/:id" element={<EmployeeDetails />} />
          <Route path="leave" element={<Leave />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};
