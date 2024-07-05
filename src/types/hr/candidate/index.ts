import { Dispatch, SetStateAction } from 'react';

export type CandidateState = {
  loading: boolean;
  candidates: CandidateType[] | null;
  candidateLength: number | undefined;
  page: number;
  size: number;
  filterStatus: string;
  errorMessage: string | null;
};

export type CandidateActionType = {
  data?: CandidateType;
  message: string;
  status: number;
  content?: CandidateType[] | null;
  totalElements?: number;
};
export type PaginationType = {
  page: number;
  size: number;
};

export type CandidateType = {
  _id?: string;
  name: string;
  status: string;
  contact: Contact;
  interviewInformation: InterviewInformation;
  interview: string;
  dob: string;
  universityMajor: string;
  projectExperience: string;
  skillsSummary: string;
  certificate: string;
  role: string;
  cvUrl: string;
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
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
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

export type ViewOpenStateType = {
  send_email: boolean;
  view: boolean;
  edit: boolean;
  delete: boolean;
};

export type DeleteCandidateType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  candidate: CandidateType | null | undefined;
};

export type EditCandidateType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  candidate: CandidateType | null | undefined;
  currentCandidate: string;
};

export type CandidateTransactionsProps = {
  setViewOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  setCurrentCandidate: Dispatch<SetStateAction<string>>;
};

export type NewCandidateType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export type ViewCandidateType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  candidate: CandidateType | null | undefined;
};
