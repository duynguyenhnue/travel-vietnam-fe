import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from 'src/redux/store';
import { CheckoutState, VnpayParams } from 'src/types/redux/checkout';

type FailureAction = PayloadAction<string>;

const initialState: CheckoutState = {
  loading: false,
  errorMessage: '',
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    checkoutRequest: (state: CheckoutState) => {
      state.loading = true;
    },
    checkoutSuccess: (state: CheckoutState) => {
      state.loading = false;
    },
    checkoutFailure: (state: CheckoutState, action: FailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const getPaymentUrl = (params: VnpayParams) => {
  return async () => {
    try {
      dispatch(checkoutSlice.actions.checkoutRequest());
      const response = await axios.post('/vnpay/create_payment_url', params);

      window.location.href = response.data.data.paymentUrl;
      dispatch(checkoutSlice.actions.checkoutSuccess());
    } catch (error) {
      dispatch(checkoutSlice.actions.checkoutFailure(error.message));
    }
  };
};

export default checkoutSlice.reducer;
