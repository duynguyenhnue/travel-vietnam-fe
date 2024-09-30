import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LocationType, LocationsState } from 'src/types/redux/location';
import { dispatch } from '../store';
import { locations } from '../fakeData';
type LocationAction = PayloadAction<LocationType[]>;
type FailureAction = PayloadAction<string>;

const initialState: LocationsState = {
  loading: false,
  errorMessage: '',
  locations: null,
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    // REGISTER
    locationsRequest: (state: LocationsState) => {
      state.loading = true;
    },
    locationsSuccess: (state: LocationsState, action: LocationAction) => {
      state.loading = false;
      state.locations = action.payload;
    },
    locationsFailure: (state: LocationsState, action: FailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const searchLocations = (location: string) => {
  return async () => {
    dispatch(locationsSlice.actions.locationsRequest());

    try {
      const filteredLocations: LocationType[] = locations.filter((loc) =>
        loc.name.toLowerCase().includes(location.toLowerCase())
      );

      dispatch(locationsSlice.actions.locationsSuccess(filteredLocations));
    } catch (error) {
      dispatch(locationsSlice.actions.locationsFailure(error.message));
    }
  };
};

export default locationsSlice.reducer;
