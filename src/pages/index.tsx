import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stack } from '@mui/material';
import HeroSection from 'src/sections/home/hero';
import ServicesSection from 'src/sections/home/service';
import ExperienceSection from 'src/sections/home/experience';
import Gallery from 'src/sections/home/gallery';
import TestimonialSection from 'src/sections/home/testimonials';
import NewsLetter from 'src/sections/home/newsletter';
import Explore from 'src/sections/home/explore';

const TravelHomePage = () => {
  return (
    <Stack sx={{display: 'flex', flexDirection: 'column', gap: 10}}>
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <Explore />
      <Gallery />
      <TestimonialSection />
      <NewsLetter />
    </Stack>
  );
};

export default TravelHomePage;
