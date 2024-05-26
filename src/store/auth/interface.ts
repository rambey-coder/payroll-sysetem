export interface LoginPayload {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  password: string;
  confirmPassword: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignUpPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

interface UserDetails {
  token: string;
  user: IUser;
}

export interface LoginResponse {
  userDetails: UserDetails;
}

export interface SignUpResponse {}
/*

{
    "userDetails": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTY3Mzk1MjYsImV4cCI6MTcxNjc0MzEyNn0.KRMYY1jqWARZJUld5i3QudDFYGRwuf3EA64FF8iO7gU",
        "user": {
            "id": 1,
            "first_name": "Bello",
            "last_name": "Rambey",
            "email": "rambeybello@gmail.com",
            "phone": null,
            "password": "$2a$10$BRTHmJTOJ31HrJQVupHspezgZ3VevUBdHd.DU.k08xt6UN15kMqu2",
            "confirmPassword": "123456",
            "createdAt": "2024-05-05T23:49:37.000Z",
            "updatedAt": "2024-05-05T23:49:37.000Z"
        }
    }
}

*/
