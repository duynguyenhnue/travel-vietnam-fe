import React from 'react';
import { Box, Container, Grid, Typography, Rating, Avatar, Divider, TextField, MenuItem } from '@mui/material';
import { Review } from 'src/types/redux/tours';

const CustomerReview = ( { data }: { data: Review[] }) => {
    const calculateAverageRating = (reviews: { rating: number }[]) => {
        if (reviews.length === 0) return 0; 
        const total = reviews.reduce((acc, review) => acc + review.rating, 0);
        return (total / reviews.length).toFixed(2); 
    };
    
    const averageRating = calculateAverageRating(data);
    return (
        <Container maxWidth="xl" sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h5" gutterBottom>
                Customer Review
            </Typography>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'end', mb: 2 }}>
                    <Typography variant="h3" sx={{ mr: 1 }}>{averageRating}</Typography>
                    <Typography variant="body1" sx={{ ml: 1 }}>{data.length} Reviews</Typography>
                </Box>
                <Rating value={Number(averageRating)} readOnly precision={0.1} sx={{ fontSize: '3rem' }} />
            </Box>

            <Grid container columnSpacing={2} sx={{ mb: 2, mt: 0, backgroundColor: '#F8FAFC', border: '0.5px solid rgba(22, 82, 125, 0.08)', borderRadius: '5px', padding: 2 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label="Filtering" fullWidth>
                        <MenuItem value="recommended">Recommended</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label="Traveler type" fullWidth>
                        <MenuItem value="all">All</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label="Rating" fullWidth>
                        <MenuItem value="all">All</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Search Here" fullWidth />
                </Grid>
            </Grid>

            {data.map((review: Review, index: number) => (
                <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Avatar sx={{ mr: 2 }}>A</Avatar>
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">{review.userId}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {new Date(review.updatedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </Typography>
                        </Box>
                    </Box>
                    <Rating value={review.rating} readOnly size="small" />
                    {/* <Typography variant="body1" fontWeight="bold" sx={{ mt: 1 }}>{review.reviewText}</Typography> */}
                    <Typography variant="body2" color="textSecondary">{review.reviewText}</Typography>
                    <Divider sx={{ mt: 2 }} />
                </Box>
            ))}
            <Typography
                variant="h6"
                sx={{
                    mt: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                    color: '#faa935',
                }}
            >
                View More Comments
            </Typography>
        </Container>
    );
};

export default CustomerReview;
