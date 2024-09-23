import React from 'react';
import { Box, Button, Grid, Typography, Rating, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

const packages = [
  {
    id: 1,
    image: '/assets/hanoi.jpeg',
    location: 'Thailand',
    duration: '3 days',
    persons: '2 Person',
    price: '$149.00',
    rating: 5,
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
  },
  {
    id: 2,
    image: '/assets/hanoi.jpeg',
    location: 'Indonesia',
    duration: '3 days',
    persons: '2 Person',
    price: '$139.00',
    rating: 5,
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
  },
  {
    id: 3,
    image: '/assets/hanoi.jpeg',
    location: 'Malaysia',
    duration: '3 days',
    persons: '2 Person',
    price: '$189.00',
    rating: 5,
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos',
  },
];
export const Packages = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ display: 'inline-block', backgroundColor: 'white', color: 'primary.main', px: 3 }}
        >
          Packages
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{ mb: 5 }}
        >
          Awesome Packages
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="center"
      >
        {packages.map((pkg) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={pkg.id}
            data-wow-delay="0.1s"
          >
            <Box sx={{ border: 1, borderColor: 'grey.300', borderRadius: 1, overflow: 'hidden' }}>
              <Box sx={{ overflow: 'hidden' }}>
                <img
                  src={pkg.image}
                  alt={pkg.location}
                  style={{ width: '100%', height: 'auto', maxHeight: 300 }}
                />
              </Box>

              <Box sx={{ display: 'flex', borderBottom: 1, borderColor: 'grey.300' }}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    borderRight: 1,
                    borderColor: 'grey.300',
                    py: 2,
                  }}
                >
                  <LocationOnIcon sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography
                    variant="body2"
                    component="span"
                  >
                    {pkg.location}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    borderRight: 1,
                    borderColor: 'grey.300',
                    py: 2,
                  }}
                >
                  <CalendarTodayIcon sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography
                    variant="body2"
                    component="span"
                  >
                    {pkg.duration}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  sx={{ flex: 1, textAlign: 'center', py: 2 }}
                >
                  <PersonIcon sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography
                    variant="body2"
                    component="span"
                  >
                    {pkg.persons}
                  </Typography>
                </Stack>
              </Box>

              <Box sx={{ textAlign: 'center', p: 4 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 1 }}
                >
                  {pkg.price}
                </Typography>
                <Rating
                  value={pkg.rating}
                  readOnly
                  sx={{ mb: 2 }}
                />
                <Typography
                  variant="body2"
                  sx={{ mb: 2 }}
                >
                  {pkg.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ borderRadius: '30px 0 0 30px', px: 3 }}
                  >
                    Read More
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ borderRadius: '0 30px 30px 0', px: 3 }}
                  >
                    Book Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
