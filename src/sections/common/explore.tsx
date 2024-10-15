import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import ItemCard from './itemCard';
import { useDispatch, useSelector } from 'src/redux/store';
import { getTours } from 'src/redux/slices/tours';
import { StyledTitleComponent } from 'src/styles/common';

const FeaturedTourList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTours());
    }, []);
    const tours = useSelector((state) => state.tours.tours);
    return (
        <Grid container spacing={2}>
            {tours && tours.length > 0 && tours.map((tour: any) => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={tour._id}>
                    <ItemCard data={tour} />
                </Grid>
            ))}
        </Grid>
    );
};

const Explore = () => {
    return (
        <Grid container rowGap={5}>
            <Grid item lg={12} className='mb-5'>
                <StyledTitleComponent>Explore</StyledTitleComponent>
                <Typography variant="h4" className='featured__tour-title'>Our featured tours</Typography>
            </Grid>
            <FeaturedTourList />
        </Grid>
    );
};

export default Explore;
