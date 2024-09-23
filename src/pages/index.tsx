import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AboutUs } from 'src/sections/home/about';
import { Services } from 'src/sections/home/services';
import { PopularDestinations } from 'src/sections/home/destinations';
import { Packages } from 'src/sections/home/packages';
import { Booking } from 'src/sections/home/booking';
import { MeetOurGuides } from 'src/sections/home/guides';
import { TestimonialsSection } from 'src/sections/home/testimonials';
import { Stack } from '@mui/material';

const TravelHomePage = () => {
  return (
    <Stack>
      <AboutUs />
      <Services />
      <PopularDestinations />
      <Packages />
      <Booking />
      <MeetOurGuides />
      <TestimonialsSection />
    </Stack>
  );
};

export default TravelHomePage;
