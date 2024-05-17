import { Dispatch, SetStateAction } from "react";
import { PermissionsType } from "../redux/permissions";

export type PermissionsState = {
  loading: boolean;
  candidates: PermissionsType[] | null;
  candidateLength: number | undefined;
  page: number,
  size: number,
  filterStatus: string,
  errorMessage: string | null;
};

export type PermissionsActionType = {
  data?: PermissionsType,
  message: string,
  status: number,
  content?: PermissionsType[] | null
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

export type DeletePermissionsType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  permission: PermissionsType | null | undefined;
};

export type EditPermissionsType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  permission: PermissionsType | null | undefined;
  currentPermission: string;
};

export type PermissionsTransactionsProps = {
  setViewOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  setCurrentPermission: Dispatch<SetStateAction<string>>;
};

export type NewPermissionsType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export type ViewPermissionsType = {
  open: ViewOpenStateType;
  setOpen: Dispatch<SetStateAction<ViewOpenStateType>>;
  permission: PermissionsType | null | undefined;
};