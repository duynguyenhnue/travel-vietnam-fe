export type HotelsState = {
  loading: boolean;
  errorMessage: string;
  locations: LocationsType[] | null;
  hotels: HotelType[] | null;
  hotel: HotelType | null;
  rooms: RoomType[] | null;
  total: number;
  totalRooms: number;
};

export type LocationsType = {
  id: string;
  name: string;
  description: string;
  image_url: string;
};

export interface HotelType {
  _id?: string;
  name: string;
  address: string;
  rating: number;
  description: string;
  amenities: string[];
  images: string[];
  checkInPolicy: string;
  checkOutPolicy: string;
  cancellationPolicy: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoomType {
  maxOccupancy: number;
  _id: string;
  description: string;
  roomType: string;
  roomNumber: string;
  price: number;
  available: boolean;
  amenities: string[];
  images: string[];
  hotelId: string;
}

export interface SearchHotelAction {
  limit?: number;
  page?: number;
  name?: string;
}

export interface SearchRoomsByHotelIdAction {
  limit?: number;
  page?: number;
  roomType?: string;
  price?: number;
  maxOccupancy?: number;
  hotelId: string;
}
