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
  username: string;
  password: string;
};

export type LoginResponseType = {
  accessToken: string;
  authenticated: string;
};
