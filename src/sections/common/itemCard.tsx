import React from 'react';
import { Card, CardContent, Typography, Button, Box, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { Review, Address } from 'src/types/redux/tours';

export interface Data {
    _id: string;
    title: string;
    reviews: Review[];
    departurePoint?: Address;
    city?: Address;
    price: number;
    photos: string[];
}

const ItemCard = ({ data }: { data: Data }) => {
    const averageRating = data.reviews.length > 0
        ? data.reviews.reduce((sum, review) => sum + review.rating, 0) / data.reviews.length
        : 5;
    return (
        <Box sx={{ marginBottom: '24px' }}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px', border: 'none' }}>
                <Box sx={{ position: 'relative' }}>
                    <img
                        src={data.photos[0] || ""}
                        alt="tour-img"
                        style={{ width: '100%', borderRadius: '5px 5px 0 0' }}
                    />
                    {
                        averageRating > 4 &&
                        <Box
                            component="span"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                background: '#ff7e01',
                                color: '#fff',
                                padding: '0.1rem 0.3rem',
                                borderRadius: '3px 0 0 0'
                            }}
                        >
                            Featured
                        </Box>
                    }
                </Box>

                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0b2727', fontWeight: 500 }}>
                            {data.departurePoint ? data.departurePoint?.province : (data.city ? data.city?.province : "") }
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '0.8rem', color: '#6e7074' }}>
                            <Rating name="half-rating-read" defaultValue={averageRating} precision={0.5} readOnly />
                            <p>{averageRating > 0 ? averageRating.toFixed(1) : 'No ratings yet'}</p>
                        </Box>
                    </Box>

                    <Typography
                        variant="h6"
                        sx={{ marginTop: '1rem', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        <Link
                            to={`/${data.departurePoint ? "tours" : "hotel"}/${data._id}`}
                            style={{ textDecoration: 'none', color: '#0b2727', transition: '0.3s' }}
                        >
                            {data.title}
                        </Link>
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                        <Typography variant="h6" sx={{ color: '#faa935', fontWeight: 700 }}>
                            ${data.price} <span style={{ fontWeight: 500, color: '#6e7074' }}> {data.departurePoint ? "/ 1 person" : "/ 1 room"}</span>
                        </Typography>

                        <Link to={`/${data.departurePoint ? "tours" : "hotels"}/${data._id}`}>
                            <Button
                                sx={{
                                    backgroundColor: '#faa935',
                                    padding: '0.6rem',
                                    borderRadius: '14px 0 14px 0',
                                    transition: '0.5s',
                                    cursor: 'pointer',
                                    fontStyle: 'italic',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        color: 'purple'
                                    }
                                }}
                                variant="contained"
                            >
                                Book Now
                            </Button>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemCard;
