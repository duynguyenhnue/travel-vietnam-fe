export type CheckoutState = {
  loading: boolean;
  errorMessage: string;
};

export interface VnpayParams {
  amount: number;
  orderInfo: string;
}
