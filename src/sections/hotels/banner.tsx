import React, { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';

const banners = [
    'https://via.placeholder.com/800x400.png?text=Banner+1',
    'https://via.placeholder.com/800x400.png?text=Banner+2',
    'https://via.placeholder.com/800x400.png?text=Banner+3',
];

const BannerSlider = () => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % banners.length);
        }, 2000); 

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Container maxWidth="xl">
            <SwipeableViews index={activeStep}>
                {banners.map((banner, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={banner}
                        alt={`Banner ${index + 1}`}
                        sx={{ width: '100%', height: '400px', objectFit: 'cover' }}
                    />
                ))}
            </SwipeableViews>
        </Container>
    );
};

export default BannerSlider;
