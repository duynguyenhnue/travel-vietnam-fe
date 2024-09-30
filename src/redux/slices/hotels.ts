import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { envConfig } from 'src/config';
import { dispatch } from 'src/redux/store';
import { CommonResponseType } from 'src/types/common';
import {
  HotelType,
  HotelsState,
  LocationsType,
  RoomType,
  SearchHotelAction,
  SearchRoomsByHotelIdAction,
} from 'src/types/redux/hotels';

type LocationsAction = PayloadAction<LocationsType[]>;
type HotelsAction = PayloadAction<HotelType[]>;
type HotelAction = PayloadAction<HotelType>;
type RoomsAction = PayloadAction<RoomType[]>;
type FailureAction = PayloadAction<string>;
type TotalAction = PayloadAction<number>;

const initialState: HotelsState = {
  loading: false,
  errorMessage: '',
  locations: null,
  hotels: null,
  hotel: null,
  rooms: null,
  total: 0,
  totalRooms: 0,
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
    setTotal: (state: HotelsState, action: TotalAction) => {
      state.total = action.payload;
    },
    setTotalRoom: (state: HotelsState, action: TotalAction) => {
      state.total = action.payload;
    },
  },
});

export const searchHotel = (searchHotel: SearchHotelAction) => {
  return async () => {
    dispatch(hotelsSlice.actions.hotelsRequest());
    const { limit = 10, page = 0, name } = searchHotel;
    try {
      const response: CommonResponseType<{ data: HotelType[]; total: number }> = await axios.get(
        `${envConfig.serverURL}/hotels`,
        {
          params: { page, limit, search: name },
        }
      );
      if (response.data) {
        dispatch(hotelsSlice.actions.hotelsSuccess(response.data.data.data));
        dispatch(hotelsSlice.actions.setTotal(response.data.data.total));
      }
    } catch (error) {
      dispatch(hotelsSlice.actions.hotelsFailure(error.message));
    }
  };
};

export const getHotel = (hotelId: string) => {
  return async () => {
    dispatch(hotelsSlice.actions.hotelRequest());
    try {
      const response: CommonResponseType<HotelType> = await axios.get(
        `${envConfig.serverURL}/hotels/${hotelId}`
      );
      if (response.data) {
        dispatch(hotelsSlice.actions.hotelSuccess(response.data.data));
      }
    } catch (error) {
      dispatch(hotelsSlice.actions.hotelsFailure(error.message));
    }
  };
};

export const getRoomsByHotelId = (search: SearchRoomsByHotelIdAction) => {
  return async () => {
    dispatch(hotelsSlice.actions.roomsRequest());

    const { limit = 6, page = 0, roomType, price, maxOccupancy, hotelId } = search;
    try {
      const response: CommonResponseType<{ data: RoomType[]; total: number }> = await axios.get(
        `${envConfig.serverURL}/rooms`,
        {
          params: { page, limit, roomType, price, maxOccupancy, hotelId },
        }
      );
      if (response.data) {
        dispatch(hotelsSlice.actions.roomsSuccess(response.data.data.data));
        dispatch(hotelsSlice.actions.setTotalRoom(response.data.data.total));
      }
    } catch (error) {
      dispatch(hotelsSlice.actions.roomsFailure(error.message));
    }
  };
};

export default hotelsSlice.reducer;
