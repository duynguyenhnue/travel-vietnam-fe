import React, { useState } from 'react';
import { Box, Container, Grid, IconButton } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { StyledTitleComponent } from 'src/styles/common';
import ItemCard, { Data } from '../common/itemCard';

const chunkArray = (arr: any, size: any) => {
    return arr.reduce((acc: any, _: any, index: any) => {
        if (index % size === 0) {
            acc.push(arr.slice(index, index + size));
        }
        return acc;
    }, []);
};

const ProposeHotel = () => {
    const [activePromoIndex, setActivePromoIndex] = useState(0);
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
    ;
    const promoChunks = chunkArray(promoCodes, 4);

    const handlePromoPrev = () => {
        setActivePromoIndex(prev => (prev === 0 ? promoChunks.length - 1 : prev - 1));
    };

    return (
        <Container maxWidth="xl">
            <StyledTitleComponent>Đề xuất</StyledTitleComponent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, position: 'relative' }}>
                <IconButton onClick={handlePromoPrev} sx={{ color: '#faa935', border: '1px solid #faa935', position: 'absolute', left: '0', top: '50%', zIndex: '1', transform: 'translateY(-50%)', background: 'white' }}>
                    <NavigateBeforeIcon />
                </IconButton>
                <SwipeableViews index={activePromoIndex}>
                    {promoChunks.map((chunk: any, chunkIndex: number) => (
                        <Grid
                            container
                            spacing={2}
                            key={chunkIndex}
                            sx={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                                padding: '10px 0'
                            }}
                        >
                            {chunk.map((promo: any, index: number) => (
                                <Grid
                                    item sm={12} md={6} lg={4}
                                    key={index}
                                >
                                    <ItemCard data={promo} />
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </SwipeableViews>

                <IconButton onClick={handlePromoPrev} sx={{ color: '#faa935', border: '1px solid #faa935', position: 'absolute', right: '0', top: '50%', zIndex: '1', transform: 'translateY(-50%)', background: 'white' }}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Container>
    );
};

export default ProposeHotel;
