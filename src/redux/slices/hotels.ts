import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { hotels, locations, rooms } from 'src/redux/fakeData';
import { dispatch } from 'src/redux/store';
import { HotelType, HotelsState, LocationsType, RoomType } from 'src/types/redux/hotels';

type LocationsAction = PayloadAction<LocationsType[]>;
type HotelsAction = PayloadAction<HotelType[]>;
type HotelAction = PayloadAction<HotelType>;
type RoomsAction = PayloadAction<RoomType[]>;
type FailureAction = PayloadAction<string>;

const initialState: HotelsState = {
  loading: false,
  errorMessage: '',
  locations: null,
  hotels: null,
  hotel: null,
  rooms: null,
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    // REGISTER
    locationsRequest: (state: HotelsState) => {
      state.loading = true;
    },
    locationsSuccess: (state: HotelsState, action: LocationsAction) => {
      state.loading = false;
      state.locations = action.payload;
    },
    locationsFailure: (state: HotelsState, action: FailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },

    hotelsRequest: (state: HotelsState) => {
      state.loading = true;
    },
    hotelsSuccess: (state: HotelsState, action: HotelsAction) => {
      state.loading = false;
      state.hotels = action.payload;
    },
    hotelsFailure: (state: HotelsState, action: FailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    hotelRequest: (state: HotelsState) => {
      state.loading = true;
    },
    hotelSuccess: (state: HotelsState, action: HotelAction) => {
      state.loading = false;
      state.hotel = action.payload;
    },
    hotelFailure: (state: HotelsState, action: FailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    roomsRequest: (state: HotelsState) => {
      state.loading = true;
    },
    roomsSuccess: (state: HotelsState, action: RoomsAction) => {
      state.loading = false;
      state.rooms = action.payload;
    },
    roomsFailure: (state: HotelsState, action: FailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const getDestinations = () => {
  return async () => {
    dispatch(hotelsSlice.actions.locationsRequest());

    try {
      const response: LocationsType[] = locations;
      dispatch(hotelsSlice.actions.locationsSuccess(response));
    } catch (error) {
      dispatch(hotelsSlice.actions.locationsFailure(error.message));
    }
  };
};

export const getHotelByDestinationId = (locationId: string) => {
  return async () => {
    dispatch(hotelsSlice.actions.hotelsRequest());

    try {
      const response: HotelType[] = hotels.filter((hotel) => hotel.location_id === locationId);
      dispatch(hotelsSlice.actions.hotelsSuccess(response));
    } catch (error) {
      dispatch(hotelsSlice.actions.hotelsFailure(error.message));
    }
  };
};

export const getHotel = (hotelId: string) => {
  return async () => {
    dispatch(hotelsSlice.actions.hotelRequest());

    try {
      const response: HotelType = hotels.filter((hotel) => hotel.id === hotelId)[0];
      dispatch(hotelsSlice.actions.hotelSuccess(response));
    } catch (error) {
      dispatch(hotelsSlice.actions.hotelFailure(error.message));
    }
  };
};

export const getRoomsByHotelId = (hotelId: string) => {
  return async () => {
    dispatch(hotelsSlice.actions.roomsRequest());

    try {
      const response: RoomType[] = rooms.filter((rooms) => rooms.hotel_id === hotelId);
      dispatch(hotelsSlice.actions.roomsSuccess(response));
    } catch (error) {
      dispatch(hotelsSlice.actions.roomsFailure(error.message));
    }
  };
};

export default hotelsSlice.reducer;
