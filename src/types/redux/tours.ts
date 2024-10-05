export type ToursState = {
    loading: boolean;
    tours: TourType[] | null;
    errorMessage: string | null;
};

export type Review = {
    userID: string;
    rating: number;
    reviewText: string;
};

export type TourType = {
    _id: string;
    title: string;
    photos: string[];
    desc: string;
    price: number;
    maxGroupSize: number;
    hotelId: string;
    status: TourStatus;
    customerIds: string[];
    reviews: Review[];
    startDate: Date;
    endDate: Date;
    destination: Address;
    departurePoint: Address;
    isDeleted: boolean;
};

export type Address = {
    province: string;
    district: string;
    ward: string;
};


export enum TourStatus {
    PENDING = "PENDING",
    INPROGRESS = "INPROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
}