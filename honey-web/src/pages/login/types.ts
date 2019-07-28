export interface ILoginVariables {
  email: string;
  password: string;
}

export interface ILoginResult {
  token: string;
  userId: number;
  error: string;
}