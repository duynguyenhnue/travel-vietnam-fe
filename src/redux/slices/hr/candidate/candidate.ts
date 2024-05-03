import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../../../store';
import { Response } from 'src/types/redux/response';
import toast from 'react-hot-toast';
import { CandidateActionType, CandidateState, CandidateType, PaginationType } from 'src/types/hr/candidate';
import { CommonResponseType } from 'src/types/common';
import { envConfig } from 'src/config';

type GetCandidateSuccessdAction = PayloadAction<CandidateActionType>;
type GetCandidateFailureAction = PayloadAction<string>;
type newCandidateSuccessAction = PayloadAction<CandidateActionType>;
type newCandidateFailureAction = PayloadAction<string>;
type editCandidateSuccessAction = PayloadAction<CandidateActionType>;
type editCandidateFailureAction = PayloadAction<string>;
type deleteCandidateSuccessAction = PayloadAction<string>;
type deleteCandidateFailureAction = PayloadAction<string>;
type setPageAndSizePagination = PayloadAction<PaginationType>;
type setFilterStatus = PayloadAction<string>;


const initialState: CandidateState = {
  loading: false,
  candidates: [],
  candidateLength: 0,
  page: 0,
  size: 5,
  filterStatus: "",
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
      state.candidates = action.payload?.content ?? [];
      state.candidateLength = action.payload?.totalElements;
    },
    getCandidateFailure: (state: CandidateState, action: GetCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    newCandidateRequest: (state: CandidateState) => {
      state.loading = true;
    },
    newCandidateSuccess: (state: CandidateState, action: newCandidateSuccessAction) => {
      state.loading = false;
      if (action.payload?.data) {
        state.candidates?.unshift(action.payload.data);
        state.candidateLength && state.candidateLength++;
      }
    },
    newCandidateFailure: (state: CandidateState, action: newCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    editCandidateRequest: (state: CandidateState) => {
      state.loading = true;
    },
    editCandidateSuccess: (state: CandidateState, action: editCandidateSuccessAction) => {
      state.loading = false;

      if (action.payload?.data?._id !== undefined) {
        const indexToUpdate = state.candidates?.findIndex(candidate => candidate._id === action.payload?.data?._id);

        if (indexToUpdate !== undefined && indexToUpdate !== -1 && state.candidates) {
          state.candidates[indexToUpdate] = action.payload.data;
        }
      }
    },
    editCandidateFailure: (state: CandidateState, action: editCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    deleteCandidateRequest: (state: CandidateState) => {
      state.loading = true;
    },
    deleteCandidateSuccess: (state: CandidateState, action: deleteCandidateSuccessAction) => {
      state.loading = false;
      if (state.candidates) {
        state.candidates = state.candidates.filter(candidate => candidate._id !== action.payload);
        state.candidateLength && state.candidateLength--;
      }
    },
    deleteCandidateFailure: (state: CandidateState, action: deleteCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    setPageAndSize: (state, action: setPageAndSizePagination) => {
      state.page = action.payload.page;
      state.size = action.payload.size;
    },
    setFilterStatus: (state, action: setFilterStatus) => {
      state.filterStatus = action.payload;
    },
    uploadFileRequest: (state: CandidateState) => {
      state.loading = true;
    },
    uploadFileSuccess: (state: CandidateState) => {
      state.loading = false;
    },
    uploadFileFailure: (state: CandidateState, action: deleteCandidateFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});


export const setPagination = (page: number, size: number) => {
  return async () => {
    dispatch(candidateSlice.actions.setPageAndSize({ page, size }));
  };
};

export const setFillterStatus = (status: string) => {
  return async () => {
    dispatch(candidateSlice.actions.setFilterStatus(status));
  };
};


export const getCandidate = (page: number, size: number, status?: string) => {
  return async () => {
    try {
      const result: Response<CommonResponseType> = await axios.get(
        `${envConfig.serverURL}/hr/candidate?page=${page}&size=${size}&status=${status || ""}`
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
      const result = await axios.post(`${envConfig.serverURL}/hr/candidate`, candidate);
      toast.success('Create candidate successful');
      dispatch(candidateSlice.actions.newCandidateSuccess(result.data));
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

export const editCandidate = (candidate: CandidateType, id: string,) => {
  return async () => {
    try {
      dispatch(candidateSlice.actions.editCandidateRequest());
      const result = await axios.put(`${envConfig.serverURL}/hr/candidate/${id}`, candidate);
      toast.success('Edit candidate successful');
      dispatch(candidateSlice.actions.editCandidateSuccess(result.data));
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

export const deleteCandidate = (id: string) => {
  return async () => {
    try {
      dispatch(candidateSlice.actions.deleteCandidateRequest());
      await axios.delete(`${envConfig.serverURL}/hr/candidate/${id}`);
      toast.success('Delete candidate successful');
      dispatch(candidateSlice.actions.deleteCandidateSuccess(id));
      await dispatch(getCandidate(candidateSlice.getInitialState().page, candidateSlice.getInitialState().size));
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(candidateSlice.actions.deleteCandidateFailure(errorMessage));
    }
  };
};

export const uplaodFile = (filename: string, file: File | null) => {
  return async () => {
    try {
      dispatch(candidateSlice.actions.uploadFileRequest());
      const currentTime = Date.now();
      const newFilename = `${currentTime}_${filename}`;
      const formData = new FormData();
      formData.append("filename", newFilename);
      file && formData.append('file', file);

      const result = await axios.post(
        `${envConfig.serverURL}/upload-file`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      dispatch(candidateSlice.actions.uploadFileSuccess());
      return result.data.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(candidateSlice.actions.uploadFileFailure(errorMessage));
    }
  };
};


export default candidateSlice.reducer;
