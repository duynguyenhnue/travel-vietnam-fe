import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../store';
import toast from 'react-hot-toast';
import { envConfig } from 'src/config';
import { CommonResponseType } from 'src/types/common';
import { Response } from 'src/types/redux/response';
import { RolesState, RolesType } from 'src/types/redux/roles';
import { RolesActionType } from 'src/types/roles';
import { PaginationType } from 'src/types/permissions';

type GetRolesSuccessdAction = PayloadAction<RolesType[] | null>;
type GetRolesFailureAction = PayloadAction<string>;
type newRolesSuccessAction = PayloadAction<RolesActionType>;
type newRolesFailureAction = PayloadAction<string>;
type editRolesSuccessAction = PayloadAction<RolesActionType>;
type editRolesFailureAction = PayloadAction<string>;
type deleteRolesSuccessAction = PayloadAction<string>;
type deleteRolesFailureAction = PayloadAction<string>;
type setPageAndSizePagination = PayloadAction<PaginationType>;

const initialState: RolesState = {
  loading: false,
  roles: [],
  errorMessage: '',
  roleLength: 0,
  page: 0,
  size: 5,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    getRolesRequest: (state: RolesState) => {
      state.loading = true;
    },
    getRolesSuccess: (state: RolesState, action: GetRolesSuccessdAction) => {
      state.loading = false;
      state.roles = action.payload;
      state.roleLength = action.payload?.length;

    },
    getRolesFailure: (state: RolesState, action: GetRolesFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },    newRolesRequest: (state: RolesState) => {
      state.loading = true;
    },
    newRolesSuccess: (state: RolesState, action: newRolesSuccessAction) => {
      state.loading = false;
      if (action.payload?.data) {
        state.roles?.unshift(action.payload.data);
        state.roleLength && state.roleLength++;
      }
    },
    newRolesFailure: (state: RolesState, action: newRolesFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    editRolesRequest: (state: RolesState) => {
      state.loading = true;
    },
    editRolesSuccess: (state: RolesState, action: editRolesSuccessAction) => {
      state.loading = false;

      if (action.payload?.data?._id !== undefined) {
        const indexToUpdate = state.roles?.findIndex(
          (role) => role._id === action.payload?.data?._id
        );

        if (indexToUpdate !== undefined && indexToUpdate !== -1 && state.roles) {
          state.roles[indexToUpdate] = action.payload.data;
        }
      }
    },
    editRolesFailure: (state: RolesState, action: editRolesFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    deleteRolesRequest: (state: RolesState) => {
      state.loading = true;
    },
    deleteRolesSuccess: (state: RolesState, action: deleteRolesSuccessAction) => {
      state.loading = false;
      if (state.roles) {
        state.roles = state.roles.filter((role) => role._id !== action.payload);
        state.roleLength && state.roleLength--;
      }
    },
    deleteRolesFailure: (state: RolesState, action: deleteRolesFailureAction) => {
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
    dispatch(roleSlice.actions.setPageAndSize({ page, size }));
  };
};

export const getRoles = (page?:number, size?:number) => {
  return async () => {
    try {
      const result: Response<CommonResponseType> = await axios.get(`${envConfig.serverURL}/role?page=${page}&size=${size}`);
      dispatch(roleSlice.actions.getRolesSuccess(result.data?.data.content ? result.data.data.content : null));
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : 'Something went wrong';
      toast.error(errorMessage);
      dispatch(roleSlice.actions.getRolesFailure(errorMessage));
    }
  };
};


export const newRole = (role: RolesType) => {
  return async () => {
    try {
      dispatch(roleSlice.actions.newRolesRequest());
      const result = await axios.post(`${envConfig.serverURL}/role`, role);
      toast.success('Create role successful');
      dispatch(roleSlice.actions.newRolesSuccess(result.data));
    } catch (error) {
      const errorMessage =
        error.response && error.response.status === 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(roleSlice.actions.newRolesFailure(errorMessage));
    }
  };
};

export const editRole = (role: RolesType, id: string) => {
  return async () => {
    try {
      dispatch(roleSlice.actions.editRolesRequest());
      const result = await axios.put(`${envConfig.serverURL}/role/${id}`, role);
      toast.success('Edit role successful');
      dispatch(roleSlice.actions.editRolesSuccess(result.data));
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(roleSlice.actions.editRolesFailure(errorMessage));
    }
  };
};

export const deleteRole = (id: string) => {
  return async () => {
    try {
      dispatch(roleSlice.actions.deleteRolesRequest());
      await axios.delete(`${envConfig.serverURL}/role/${id}`);
      toast.success('Delete role successful');
      dispatch(roleSlice.actions.deleteRolesSuccess(id));
      await dispatch(
        getRoles(roleSlice.getInitialState().page, roleSlice.getInitialState().size)
      );
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(roleSlice.actions.deleteRolesFailure(errorMessage));
    }
  };
};


export default roleSlice.reducer;
