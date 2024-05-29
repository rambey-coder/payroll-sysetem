import { IUser } from "../auth/interface";

export interface IEmployeePayLoad {
  userId: string;
  department: string;
  role: string;
  status: string;
  salary: number;
}

// export interface IEmployeeRes {
// }

export interface EmployeeData {
  id: number;
  name: string;
  department: string;
  role: string;
  status: string;
  salary?: number;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  user?: IUser;
}

export interface IEmployeeRes {
  data?: EmployeeData;
  message?: string;
}

export interface IAllEmployeeRes {
  data: EmployeeData[];
}
