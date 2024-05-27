import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({
    addEmployee: builder.mutation({
      query: (body) => ({
        url: "/employee",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Employee"],
    }),
    getEmployee: builder.query<any, void>({
      query: () => ({
        url: `/employee`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddEmployeeMutation, useGetEmployeeQuery } = employeeApi;
