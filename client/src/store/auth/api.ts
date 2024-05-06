import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseDir } from "../../baseDir";
import {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
} from "./interface";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BaseDir.API_BASE_URL}` }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginPayload, LoginResponse>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    signUp: builder.mutation<SignUpPayload, SignUpResponse>({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
