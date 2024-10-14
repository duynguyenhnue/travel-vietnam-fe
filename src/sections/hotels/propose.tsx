import React from 'react';
import { Container, Grid } from '@mui/material';
import { StyledTitleComponent } from 'src/styles/common';
import ItemCard, { Data } from '../common/itemCard';

const ProposeHotel = () => {
    const promoCodes: Data[] = [
        {
            _id: "1",
            title: "Luxury Hotel",
            reviews: [
                { rating: 4.5, reviewText: "Great stay!", userID: "1" },
                { rating: 4.0, reviewText: "Comfortable and clean.", userID: "1" }
            ],
            city: { district: "Downtown", province: "City A", ward: "Country A" },
            price: 12000,
            photos: ["https://s.net.vn/qHsN"]
        },
        {
            _id: "2",
            title: "Cozy Cottage",
            reviews: [
                { rating: 4.5, reviewText: "Great stay!", userID: "1" },
                { rating: 4.0, reviewText: "Comfortable and clean.", userID: "1" }
            ],
            city: { district: "Downtown", province: "City A", ward: "Country A" },
            price: 12000,
            photos: ["https://s.net.vn/qHsN"]
        },
        {
            _id: "3",
            title: "Budget Inn",
            reviews: [
                { rating: 4.5, reviewText: "Great stay!", userID: "1" },
                { rating: 4.0, reviewText: "Comfortable and clean.", userID: "1" }
            ],
            city: { district: "Downtown", province: "City A", ward: "Country A" },
            price: 12000,
            photos: ["https://s.net.vn/qHsN"]
        },
        {
            _id: "4",
            title: "Cozy Cottage",
            reviews: [
                { rating: 4.5, reviewText: "Great stay!", userID: "1" },
                { rating: 4.0, reviewText: "Comfortable and clean.", userID: "1" }
            ],
            city: { district: "Downtown", province: "City A", ward: "Country A" },
            price: 12000,
            photos: ["https://s.net.vn/qHsN"]
        },
        {
            _id: "5",
            title: "Budget Inn",
            reviews: [
                { rating: 4.5, reviewText: "Great stay!", userID: "1" },
                { rating: 4.0, reviewText: "Comfortable and clean.", userID: "1" }
            ],
            city: { district: "Downtown", province: "City A", ward: "Country A" },
            price: 12000,
            photos: ["https://s.net.vn/qHsN"]
        }
    ];

    return (
        <Container maxWidth="xl">
            <StyledTitleComponent>Đề xuất</StyledTitleComponent>
            <Grid
                container
                spacing={2}
            >
                {promoCodes.map((promo: any, index: number) => (
                    <Grid
                        item xs={12} sm={6} md={4} lg={3}
                        key={index}
                    >
                        <ItemCard data={promo} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProposeHotel;
