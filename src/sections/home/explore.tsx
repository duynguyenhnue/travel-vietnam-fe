import React from 'react';
import { Grid, Typography } from '@mui/material';
import TourCard from './tourCard';

const FeaturedTourList = () => {
    const data = [{
        "title": "Explore the Ancient Ruins of Rome 2",
        "photos": [
            "https://storage.googleapis.com/travel-vietnam-2cca2.appspot.com/tours/1727858707887__1c92921f-2bfc-492d-8744-4710a64a1781.jpeg",
            "https://storage.googleapis.com/travel-vietnam-2cca2.appspot.com/tours/1727858707887__d48842b9-7d13-43e3-9f05-96bb2dc9f8ef.jpeg"
        ],
        "desc": "11222111111",
        "price": 111111,
        "maxGroupSize": 6,
        "hotelId": [
            "66fa5a09f9de27af0754de06"
        ],
        "status": "PENDING",
        "customerIds": [],
        "reviews": [],
        "startDate": "2024-10-05T00:00:00.000Z",
        "endDate": "2024-10-10T00:00:00.000Z",
        "destination": {
            "province": "Lazio",
            "district": "Lazio",
            "ward": "Lazio"
        },
        "departurePoint": {
            "province": "Rome",
            "district": "Central",
            "ward": "Rome Center"
        },
        "isDeleted": false,
        "_id": "66fd08144bed5f03ee539f5b",
        "createdAt": "2024-10-02T08:45:08.943Z",
        "updatedAt": "2024-10-02T08:45:08.943Z",
        "__v": 0
    }];

    return (
        <Grid container spacing={2}>
            {data?.map((tour: any) => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={tour._id}>
                    <TourCard tour={tour} />
                </Grid>
            ))}
        </Grid>
    );
};

const Explore = () => {
    return (
        <Grid container rowGap={5}>
            <Grid item lg={12} className='mb-5'>
                <h3 style={{
                    background: '#faa935',
                    fontFamily: '"Island Moments", cursive',
                    width: 'max-content',
                    padding: '0px 0.5rem',
                    paddingRight: '1rem',
                    borderRadius: '50px',
                    fontWeight: '500',
                    fontSize: '1.7rem',
                    color: '#0b2727'
                }}>Explore</h3>
                <Typography variant="h4" className='featured__tour-title'>Our featured tours</Typography>
            </Grid>
            <FeaturedTourList />
        </Grid>
    );
};

export default Explore;
