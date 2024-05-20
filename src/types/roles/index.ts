import { Dispatch, SetStateAction } from "react";
import { RolesType } from "../redux/roles";
import { PermissionsType } from "../redux/permissions";

export type RolesState = {
  loading: boolean;
  candidates: RolesType[] | null;
  candidateLength: number | undefined;
  page: number,
  size: number,
  filterStatus: string,
  errorMessage: string | null;
};

export type RolesActionType = {
  data?: RolesType,
  message: string,
  status: number,
  content?: RolesType[] | null
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

export type DeleteRolesType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  role: RolesType | null | undefined;
};

export type EditRolesType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  role: RolesType | null | undefined;
  currentRole: string;
  permissions: PermissionsType[];
};

export type RolesTransactionsProps = {
  setViewOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  setCurrentRole: Dispatch<SetStateAction<string>>;
  findNameById: any;
};

export type NewRolesType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  permissions: PermissionsType[]
};
export type ViewRolesType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  role: RolesType | null | undefined;
  findNameById: any;
};