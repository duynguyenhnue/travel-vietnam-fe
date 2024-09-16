export type AuthenticationState = {
  loading: boolean;
  isAuthenticated: boolean;
  errorMessage: string | null;
  forgotEmailSent: boolean;
};

export type RegisterRequestType = {
  email: string;
  password: string;
  fullName: string;
  nationality?: string;
  phonenumber?: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  access_token: string;
  refresh_token?: string;
  authenticated?: string;
};
