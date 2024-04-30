export type CandidateState = {
  loading: boolean;
  candidates: CandidateType[] | null;
  errorMessage: string | null;
};
export type CandidateType = {
  _id?: string;
  name: string;
  status: string;
  contact: Contact;
  interviewInformation: InterviewInformation;
  dob: string;
  universityMajor: string;
  projectExperience: string;
  skillsSummary: string;
  certificate: string;
  role: string;
  onboardDate: string;
};
export type InterviewInformation = {
  dateTime: string;
  linkGmeet: string;
};
export type Contact = {
  email: string;
  phone: string;
};

// send email
export type SendEmailCandidateType = {
  open: any;
  setOpen: any;
  candidate: CandidateType | null | undefined;
};

export type SendEmailTabType = {
  label: string;
  value: string;
  emailTemplate: string;
  senderName: string;
};

export type EmailTemplateType = {
  candidate: CandidateType | null | undefined;
  signature: string;
};
