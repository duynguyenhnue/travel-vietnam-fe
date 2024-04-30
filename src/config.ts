export const envConfig = {
  baseUrl: import.meta.env.VITE_SERVER_API_URL,
  googleAppId: import.meta.env.VITE_GOOGLE_APP_ID,
  serverURL: import.meta.env.VITE_SERVER_URL,
};

export const localStorageConfig = {
  accessToken: 'jwt-access-token',
};
