import { Dispatch, SetStateAction } from "react";
import { MemberType } from "../redux/member";
import { RolesType } from "../redux/roles";

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
  findNameById: any;
};

export type EditMemberType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  member: MemberType | null | undefined;
  currentMember: string;
  roles: RolesType[];
};

export type MemberTransactionsProps = {
  setViewOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  setCurrentMember: Dispatch<SetStateAction<string>>;
  findNameById: any;
};

export type NewMemberType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  roles: RolesType[]
};
export type ViewMemberType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  member: MemberType | null | undefined;
  findNameById: any;
};