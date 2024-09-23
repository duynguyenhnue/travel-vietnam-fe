import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { flights, locations } from 'src/redux/fakeData';
import { dispatch } from 'src/redux/store';
import { FlightType, FlightsState, LocationsType } from 'src/types/redux/flights';
type LocationsAction = PayloadAction<LocationsType[]>;
type FlightsAction = PayloadAction<FlightType[]>;
type FailureAction = PayloadAction<string>;

const initialState: FlightsState = {
  loading: false,
  errorMessage: '',
  locations: null,
  flights: null,
};

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    // REGISTER
    locationsRequest: (state: FlightsState) => {
      state.loading = true;
    },
    locationsSuccess: (state: FlightsState, action: LocationsAction) => {
      state.loading = false;
      state.locations = action.payload;
    },
    locationsFailure: (state: FlightsState, action: FailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },

    flightsRequest: (state: FlightsState) => {
      state.loading = true;
    },
    flightsSuccess: (state: FlightsState, action: FlightsAction) => {
      state.loading = false;
      state.flights = action.payload;
    },
    flightsFailure: (state: FlightsState, action: FailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const getDestinations = () => {
  return async () => {
    dispatch(flightsSlice.actions.locationsRequest());

    try {
      const response: LocationsType[] = locations;
      dispatch(flightsSlice.actions.locationsSuccess(response));
    } catch (error) {
      dispatch(flightsSlice.actions.locationsFailure(error.message));
    }
  };
};

export const getFlightByDestinationId = (destinationId: number) => {
  return async () => {
    dispatch(flightsSlice.actions.flightsRequest());

    try {
      const response: FlightType[] = flights.filter(
        (flight) => flight.destinationId === destinationId
      );
      dispatch(flightsSlice.actions.flightsSuccess(response));
    } catch (error) {
      dispatch(flightsSlice.actions.flightsFailure(error.message));
    }
  };
};

export default flightsSlice.reducer;
