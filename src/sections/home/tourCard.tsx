import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }: any) => {
    const data = tour;

    return (
        <Box sx={{ marginBottom: '24px' }}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px', border: 'none' }}>
                <Box sx={{ position: 'relative' }}>
                    <img
                        src={data.photos[0]}
                        alt="tour-img"
                        style={{ width: '100%', borderRadius: '5px 5px 0 0' }}
                    />
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
                </Box>

                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0b2727', fontWeight: 500 }}>
                            {data.departurePoint.province}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6e7074' }}>
                            {/* <i className='ri-star-fill'></i> {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? 'Not rated' : (<span>({data.reviews.length})</span>)} */}
                        </Box>
                    </Box>

                    <Typography
                        variant="h6"
                        sx={{ marginTop: '1rem', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        <Link
                            to={`/tours/${data._id}`}
                            style={{ textDecoration: 'none', color: '#0b2727', transition: '0.3s' }}
                        >
                            {data.title}
                        </Link>
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                        <Typography variant="h6" sx={{ color: '#faa935', fontWeight: 700 }}>
                            ${data.price} <span style={{ fontWeight: 500, color: '#6e7074' }}> /per person</span>
                        </Typography>

                        <Link to={`/tours/${data._id}`}>
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

export default TourCard;
