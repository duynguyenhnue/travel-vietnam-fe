import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../../store';
import toast from 'react-hot-toast';
import { InitalSendEmailType, SendEmailType } from 'src/types/send-email';
import { envConfig } from 'src/config';

type sendEmailFailureAction = PayloadAction<string>;

const initialState: InitalSendEmailType = {
  loading: false,
  errorMessage: '',
};

export const sendEmailSlice = createSlice({
  name: 'send-email',
  initialState,
  reducers: {
    sendEmailRequest: (state: InitalSendEmailType) => {
      state.loading = true;
    },
    sendEmailSuccess: (state: InitalSendEmailType) => {
      state.loading = false;
    },
    sendEmailFailure: (state: InitalSendEmailType, action: sendEmailFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const sendEmail = (data: SendEmailType) => {
  return async () => {
    try {
      dispatch(sendEmailSlice.actions.sendEmailRequest());

      await axios.post(`${envConfig.serverURL}/send-email`, data);
      toast.success(`Send email to ${data.email} successful.`);
      dispatch(sendEmailSlice.actions.sendEmailSuccess());
    } catch (error) {
      const errorMessage =
        error.response && error.response.status !== 500
          ? error.response.data.message
          : error.message;
      toast.error(errorMessage);
      dispatch(sendEmailSlice.actions.sendEmailFailure(errorMessage));
    }
  };
};

export default sendEmailSlice.reducer;
