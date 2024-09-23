import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import Slider from 'react-slick';

const sliderSettings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface Testimonial {
  name: string;
  location: string;
  image: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    location: 'New York, USA',
    image: '/img/testimonial-1.jpg',
    feedback:
      'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
  },
  {
    name: 'Jane Smith',
    location: 'Los Angeles, USA',
    image: '/img/testimonial-2.jpg',
    feedback:
      'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
  },
  {
    name: 'Michael Johnson',
    location: 'Chicago, USA',
    image: '/img/testimonial-3.jpg',
    feedback:
      'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
  },
  {
    name: 'Alice Brown',
    location: 'Miami, USA',
    image: '/img/testimonial-4.jpg',
    feedback:
      'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
  },
];

export const TestimonialsSection: React.FC = () => (
  <Box sx={{ py: 5 }}>
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Typography
        variant="h6"
        component="div"
        color="primary"
        sx={{ mb: 1, px: 3, display: 'inline-block', backgroundColor: '#fff' }}
      >
        Testimonial
      </Typography>
      <Typography
        variant="h4"
        component="div"
      >
        Our Clients Say!!!
      </Typography>
    </Box>
    <Slider {...sliderSettings}>
      {testimonials.map((testimonial, index) => (
        <Box
          key={index}
          sx={{ px: 2 }}
        >
          <Paper
            elevation={3}
            sx={{ p: 4, textAlign: 'center', borderRadius: '8px' }}
          >
            <Avatar
              src={testimonial.image}
              alt={testimonial.name}
              sx={{ width: 80, height: 80, margin: '0 auto', mb: 2, boxShadow: 3 }}
            />
            <Typography
              variant="h5"
              component="div"
            >
              {testimonial.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              {testimonial.location}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2 }}
            >
              {testimonial.feedback}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Slider>
  </Box>
);
