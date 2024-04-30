export type InitalSendEmailType = {
  loading: boolean;
  errorMessage: string | null;
};

export type SendEmailType = {
  email: string;
  senderName: string;
  subject: string;
  content: string;
};
