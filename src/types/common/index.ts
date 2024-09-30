export type CommonResponseType<T> = {
  data: ResponseType<T>;
};

export type ResponseType<T> = {
  total: number;
  status: number;
  message: string;
  data: T;
};
