export type CheckoutState = {
  loading: boolean;
  errorMessage: string;
};

export interface VnpayParams {
  amount: number;
  bookingType: BookingType;
  guestSize: number;
  userId: string;
  orderId: string;
}

export enum BookingType {
  HOTELS = 'HOTELS',
  TOURS = 'TOURS',
}