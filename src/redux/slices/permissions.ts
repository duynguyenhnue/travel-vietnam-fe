import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../store';
import toast from 'react-hot-toast';
import { envConfig } from 'src/config';
import { PermissionsActionType, PaginationType } from 'src/types/permissions';
import { CommonResponseType } from 'src/types/common';
import { Response } from 'src/types/redux/response';
import { PermissionsState, PermissionsType } from 'src/types/redux/permissions';

type GetPermissionsSuccessdAction = PayloadAction<PermissionsType[] | null>;
type GetPermissionsFailureAction = PayloadAction<string>;
type newPermissionsSuccessAction = PayloadAction<PermissionsActionType>;
type newPermissionsFailureAction = PayloadAction<string>;
type editPermissionsSuccessAction = PayloadAction<PermissionsActionType>;
type editPermissionsFailureAction = PayloadAction<string>;
type deletePermissionsSuccessAction = PayloadAction<string>;
type deletePermissionsFailureAction = PayloadAction<string>;
type setPageAndSizePagination = PayloadAction<PaginationType>;

const initialState: PermissionsState = {
  loading: false,
  permissions: [],
  errorMessage: '',
  permissionLength: 0,
  page: 0,
  size: 5,
};

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    getPermissionsRequest: (state: PermissionsState) => {
      state.loading = true;
    },
    getPermissionsSuccess: (state: PermissionsState, action: GetPermissionsSuccessdAction) => {
      state.loading = false;
      state.permissions = action.payload;
      state.permissionLength = action.payload?.length;

    },
    getPermissionsFailure: (state: PermissionsState, action: GetPermissionsFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },    newPermissionsRequest: (state: PermissionsState) => {
      state.loading = true;
    },
    newPermissionsSuccess: (state: PermissionsState, action: newPermissionsSuccessAction) => {
      state.loading = false;
      if (action.payload?.data) {
        state.permissions?.unshift(action.payload.data);
        state.permissionLength && state.permissionLength++;
      }
    },
    newPermissionsFailure: (state: PermissionsState, action: newPermissionsFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    editPermissionsRequest: (state: PermissionsState) => {
      state.loading = true;
    },
    editPermissionsSuccess: (state: PermissionsState, action: editPermissionsSuccessAction) => {
      state.loading = false;

      if (action.payload?.data?._id !== undefined) {
        const indexToUpdate = state.permissions?.findIndex(
          (permission) => permission._id === action.payload?.data?._id
        );

        if (indexToUpdate !== undefined && indexToUpdate !== -1 && state.permissions) {
          state.permissions[indexToUpdate] = action.payload.data;
        }
      }
    },
    editPermissionsFailure: (state: PermissionsState, action: editPermissionsFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    deletePermissionsRequest: (state: PermissionsState) => {
      state.loading = true;
    },
    deletePermissionsSuccess: (state: PermissionsState, action: deletePermissionsSuccessAction) => {
      state.loading = false;
      if (state.permissions) {
        state.permissions = state.permissions.filter((permission) => permission._id !== action.payload);
        state.permissionLength && state.permissionLength--;
      }
    },
    deletePermissionsFailure: (state: PermissionsState, action: deletePermissionsFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    setPageAndSize: (state, action: setPageAndSizePagination) => {
      state.page = action.payload.page;
      state.size = action.payload.size;
    },
  },
});

export const setPagination = (page: number, size: number) => {
  return async () => {
    dispatch(permissionSlice.actions.setPageAndSize({ page, size }));
  };
};

export const getPermissions = (page?:number, size?:number) => {
  return async () => {
    try {
      const result: Response<CommonResponseType> = await axios.get(`${envConfig.serverURL}/permission?page=${page}&size=${size}`);
      dispatch(permissionSlice.actions.getPermissionsSuccess(result.data?.data.content ? result.data.data.content : null));
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : 'Something went wrong';
      toast.error(errorMessage);
      dispatch(permissionSlice.actions.getPermissionsFailure(errorMessage));
    }
  };
};


export const newPermission = (permission: PermissionsType) => {
  return async () => {
    try {
      dispatch(permissionSlice.actions.newPermissionsRequest());
      const result = await axios.post(`${envConfig.serverURL}/permission`, permission);
      toast.success('Create permission successful');
      dispatch(permissionSlice.actions.newPermissionsSuccess(result.data));
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(permissionSlice.actions.newPermissionsFailure(errorMessage));
    }
  };
};

export const editPermission = (permission: PermissionsType, id: string) => {
  return async () => {
    try {
      dispatch(permissionSlice.actions.editPermissionsRequest());
      const result = await axios.put(`${envConfig.serverURL}/permission/${id}`, permission);
      toast.success('Edit permission successful');
      dispatch(permissionSlice.actions.editPermissionsSuccess(result.data));
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(permissionSlice.actions.editPermissionsFailure(errorMessage));
    }
  };
};

export const deletePermission = (id: string) => {
  return async () => {
    try {
      dispatch(permissionSlice.actions.deletePermissionsRequest());
      await axios.delete(`${envConfig.serverURL}/permission/${id}`);
      toast.success('Delete permission successful');
      dispatch(permissionSlice.actions.deletePermissionsSuccess(id));
      await dispatch(
        getPermissions(permissionSlice.getInitialState().page, permissionSlice.getInitialState().size)
      );
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(permissionSlice.actions.deletePermissionsFailure(errorMessage));
    }
  };
};


export default permissionSlice.reducer;
