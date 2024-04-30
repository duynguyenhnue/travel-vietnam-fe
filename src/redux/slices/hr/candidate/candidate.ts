import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../../../store';
import { Response } from 'src/types/redux/response';
import toast from 'react-hot-toast';
import { CandidateState, CandidateType } from 'src/types/hr/candidate';
import { CommonResponseType } from 'src/types/common';
import { envConfig } from 'src/config';

type GetCandidateSuccessdAction = PayloadAction<CandidateType[] | null>;
type GetCandidateFailureAction = PayloadAction<string>;
type newCandidateFailureAction = PayloadAction<string>;
type editCandidateFailureAction = PayloadAction<string>;
type deleteCandidateFailureAction = PayloadAction<string>;

const initialState: CandidateState = {
  loading: false,
  candidates: [],
  errorMessage: '',
};

export const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    getCandidateRequest: (state: CandidateState) => {
      state.loading = true;
    },
    getCandidateSuccess: (state: CandidateState, action: GetCandidateSuccessdAction) => {
      state.loading = false;
      state.candidates = action.payload;
    },
    getCandidateFailure: (state: CandidateState, action: GetCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    newCandidateRequest: (state: CandidateState) => {
      state.loading = true;
    },
    newCandidateSuccess: (state: CandidateState) => {
      state.loading = false;
    },
    newCandidateFailure: (state: CandidateState, action: newCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    editCandidateRequest: (state: CandidateState) => {
      state.loading = true;
    },
    editCandidateSuccess: (state: CandidateState) => {
      state.loading = false;
    },
    editCandidateFailure: (state: CandidateState, action: editCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    deleteCandidateRequest: (state: CandidateState) => {
      state.loading = true;
    },
    deleteCandidateSuccess: (state: CandidateState) => {
      state.loading = false;
    },
    deleteCandidateFailure: (state: CandidateState, action: deleteCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const getCandidate = () => {
  return async () => {
    try {
      dispatch(candidateSlice.actions.getCandidateRequest());

      const result: Response<CommonResponseType> = await axios.get(
        `${envConfig.serverURL}/hr/candidate`
      );

      dispatch(candidateSlice.actions.getCandidateSuccess(result.data?.data));
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(candidateSlice.actions.getCandidateFailure(errorMessage));
    }
  };
};

export const newCandidate = (candidate: CandidateType) => {
  return async () => {
    try {
      dispatch(candidateSlice.actions.newCandidateRequest());

      await axios.post(`${envConfig.serverURL}/hr/candidate`, candidate);
      toast.success('Create candidate successful');
      dispatch(candidateSlice.actions.newCandidateSuccess());
      window.location.reload();
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(candidateSlice.actions.newCandidateFailure(errorMessage));
    }
  };
};

export const editCandidate = (candidate: CandidateType, id: string) => {
  return async () => {
    try {
      dispatch(candidateSlice.actions.editCandidateRequest());
      await axios.put(`${envConfig.serverURL}/hr/candidate/${id}`, candidate);
      toast.success('Edit candidate successful');
      dispatch(candidateSlice.actions.editCandidateSuccess());
      window.location.reload();
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error('Edit candidate false');
      dispatch(candidateSlice.actions.editCandidateFailure(errorMessage));
    }
  };
};

export const deleteCandidate = (id: string) => {
  return async () => {
    try {
      dispatch(candidateSlice.actions.editCandidateRequest());

      await axios.delete(`${envConfig.serverURL}/hr/candidate/${id}`);
      toast.success('Delete candidate successful');
      dispatch(candidateSlice.actions.editCandidateSuccess());
      window.location.reload();
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(candidateSlice.actions.editCandidateFailure(errorMessage));
    }
  };
};

export default candidateSlice.reducer;
