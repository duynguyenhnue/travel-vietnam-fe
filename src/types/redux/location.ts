export type LocationsState = {
  loading: boolean;
  errorMessage: string;
  locations: LocationType[] | null;
};

export type LocationType = {
  id: string;
  name: string;
  description: string;
  image_url: string;
};
