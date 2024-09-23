export type HotelsState = {
  loading: boolean;
  errorMessage: string;
  locations: LocationsType[] | null;
  hotels: HotelType[] | null;
  hotel: HotelType | null;
  rooms: RoomType[] | null;
};

export type LocationsType = {
  id: string;
  name: string;
  description: string;
  image_url: string;
};

export interface HotelType {
  id: string;
  name: string;
  location_id: string;
  description: string;
  rating: number;
  image_url: string;
}

export interface RoomType {
  id: string;
  hotel_id: string;
  image_url: string;
  name: string;
  price: string;
  description: string;
  availability: boolean;
}
