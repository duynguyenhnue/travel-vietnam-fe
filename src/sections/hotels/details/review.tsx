import React from 'react';
import { Box, Container, Grid, Typography, Rating, Avatar, Divider, TextField, MenuItem } from '@mui/material';
import { Review } from 'src/types/redux/tours';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

const CustomerReview = ({ data }: { data: Review[] }) => {
    const { t } = useTranslation();
    const calculateAverageRating = (reviews: { rating: number }[]) => {
        if (reviews.length === 0) return 0;
        const total = reviews.reduce((acc, review) => acc + review.rating, 0);
        return (total / reviews.length).toFixed(2);
    };

    const averageRating = calculateAverageRating(data);
    return (
        <Container maxWidth="xl" sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h5" gutterBottom>
                {t(tokens.reviews.title)}
            </Typography>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'end', mb: 2 }}>
                    <Typography variant="h3" sx={{ mr: 1 }}>{averageRating}</Typography>
                    <Typography variant="body1" sx={{ ml: 1 }}>{data.length} {t(tokens.reviews.reviews)}</Typography>
                </Box>
                <Rating value={Number(averageRating)} readOnly precision={0.1} sx={{ fontSize: '3rem' }} />
            </Box>

            <Grid container columnSpacing={2} sx={{ mb: 2, mt: 0, backgroundColor: '#F8FAFC', border: '0.5px solid rgba(22, 82, 125, 0.08)', borderRadius: '5px', padding: 2 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label={t(tokens.reviews.filtering)} fullWidth>
                        <MenuItem value="recommended">{t(tokens.reviews.recommended)}</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label={t(tokens.reviews.travelerType)} fullWidth>
                        <MenuItem value="all">{t(tokens.reviews.all)}</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField select label={t(tokens.reviews.rating)} fullWidth>
                        <MenuItem value="all">{t(tokens.reviews.all)}</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label={t(tokens.reviews.searchHere)} fullWidth />
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
                {t(tokens.reviews.viewMore)}
            </Typography>
        </Container>
    );
};

export default CustomerReview;
