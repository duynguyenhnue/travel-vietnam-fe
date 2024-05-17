import { Dispatch, SetStateAction } from "react";
import { MemberType } from "../redux/member";

export type MemberState = {
  loading: boolean;
  candidates: MemberType[] | null;
  candidateLength: number | undefined;
  page: number,
  size: number,
  filterStatus: string,
  errorMessage: string | null;
};

export type MemberActionType = {
  data?: MemberType,
  message: string,
  status: number,
  content?: MemberType[] | null
  totalElements?: number
};
export type PaginationType = {
  page: number,
  size: number
}

export type ViewOpenStateType = {
  send_email: boolean;
  view: boolean;
  edit: boolean;
  delete: boolean;
};

export type DeleteMemberType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  member: MemberType | null | undefined;
};

export type EditMemberType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  member: MemberType | null | undefined;
  currentMember: string;
  roles: string[];
};

export type MemberTransactionsProps = {
  setViewOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  setCurrentMember: Dispatch<SetStateAction<string>>;
};

export type NewMemberType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  roles: string[]
};
export type ViewMemberType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  member: MemberType | null | undefined;
};