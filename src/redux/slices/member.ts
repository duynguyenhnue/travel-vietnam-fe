import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../store';
import { MemberType, MemberState } from 'src/types/redux/member';
import toast from 'react-hot-toast';
import { envConfig } from 'src/config';
import { MemberActionType, PaginationType } from 'src/types/member';
import { CommonResponseType } from 'src/types/common';
import { Response } from 'src/types/redux/response';

type GetMemberSuccessdAction = PayloadAction<MemberType[] | null>;
type GetMemberFailureAction = PayloadAction<string>;
type newMemberSuccessAction = PayloadAction<MemberActionType>;
type newMemberFailureAction = PayloadAction<string>;
type editMemberSuccessAction = PayloadAction<MemberActionType>;
type editMemberFailureAction = PayloadAction<string>;
type deleteMemberSuccessAction = PayloadAction<string>;
type deleteMemberFailureAction = PayloadAction<string>;
type setPageAndSizePagination = PayloadAction<PaginationType>;

const initialState: MemberState = {
  loading: false,
  members: [],
  errorMessage: '',
  memberLength: 0,
  page: 0,
  size: 5,
};

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    getMemberRequest: (state: MemberState) => {
      state.loading = true;
    },
    getMemberSuccess: (state: MemberState, action: GetMemberSuccessdAction) => {
      state.loading = false;
      state.members = action.payload;
      state.memberLength = action.payload?.length;

    },
    getMemberFailure: (state: MemberState, action: GetMemberFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },    newMemberRequest: (state: MemberState) => {
      state.loading = true;
    },
    newMemberSuccess: (state: MemberState, action: newMemberSuccessAction) => {
      state.loading = false;
      if (action.payload?.data) {
        state.members?.unshift(action.payload.data);
        state.memberLength && state.memberLength++;
      }
    },
    newMemberFailure: (state: MemberState, action: newMemberFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    editMemberRequest: (state: MemberState) => {
      state.loading = true;
    },
    editMemberSuccess: (state: MemberState, action: editMemberSuccessAction) => {
      state.loading = false;

      if (action.payload?.data?._id !== undefined) {
        const indexToUpdate = state.members?.findIndex(
          (member) => member._id === action.payload?.data?._id
        );

        if (indexToUpdate !== undefined && indexToUpdate !== -1 && state.members) {
          state.members[indexToUpdate] = action.payload.data;
        }
      }
    },
    editMemberFailure: (state: MemberState, action: editMemberFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    deleteMemberRequest: (state: MemberState) => {
      state.loading = true;
    },
    deleteMemberSuccess: (state: MemberState, action: deleteMemberSuccessAction) => {
      state.loading = false;
      if (state.members) {
        state.members = state.members.filter((member) => member._id !== action.payload);
        state.memberLength && state.memberLength--;
      }
    },
    deleteMemberFailure: (state: MemberState, action: deleteMemberFailureAction) => {
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
    dispatch(memberSlice.actions.setPageAndSize({ page, size }));
  };
};

export const getMember = (page?:number, size?:number) => {
  return async () => {
    try {
      const result: Response<CommonResponseType> = await axios.get(`${envConfig.serverURL}/member?page=${page}&size=${size}`);
      dispatch(memberSlice.actions.getMemberSuccess(result.data?.data.content ? result.data.data.content : null));
    } catch (error) {
      const errorMessage = error.response ? error.response.data.message : 'Something went wrong';
      toast.error(errorMessage);
      dispatch(memberSlice.actions.getMemberFailure(errorMessage));
    }
  };
};


export const newMember = (member: MemberType) => {
  return async () => {
    try {
      dispatch(memberSlice.actions.newMemberRequest());
      const result = await axios.post(`${envConfig.serverURL}/member`, member);
      toast.success('Create member successful');
      dispatch(memberSlice.actions.newMemberSuccess(result.data));
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(memberSlice.actions.newMemberFailure(errorMessage));
    }
  };
};

export const editMember = (member: MemberType, id: string) => {
  return async () => {
    try {
      dispatch(memberSlice.actions.editMemberRequest());
      const result = await axios.put(`${envConfig.serverURL}/member/${id}`, member);
      toast.success('Edit member successful');
      dispatch(memberSlice.actions.editMemberSuccess(result.data));
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(memberSlice.actions.editMemberFailure(errorMessage));
    }
  };
};

export const deleteMember = (id: string) => {
  return async () => {
    try {
      dispatch(memberSlice.actions.deleteMemberRequest());
      await axios.delete(`${envConfig.serverURL}/member/${id}`);
      toast.success('Delete member successful');
      dispatch(memberSlice.actions.deleteMemberSuccess(id));
      await dispatch(
        getMember(memberSlice.getInitialState().page, memberSlice.getInitialState().size)
      );
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(memberSlice.actions.deleteMemberFailure(errorMessage));
    }
  };
};


export default memberSlice.reducer;
