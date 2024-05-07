export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface LoginResponse {}

export interface SignUpResponse {}
