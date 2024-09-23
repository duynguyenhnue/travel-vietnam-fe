import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

interface Destination {
  discount: string;
  country: string;
  imageUrl: string;
  delay: string;
}

const destinations: Destination[] = [
  { discount: '30% OFF', country: 'Thailand', imageUrl: '/assets/hanoi.jpeg', delay: '0.1s' },
  { discount: '25% OFF', country: 'Malaysia', imageUrl: '/assets/hcm.jpeg', delay: '0.3s' },
  { discount: '35% OFF', country: 'Australia', imageUrl: '/assets/danang.jpeg', delay: '0.5s' },
  { discount: '20% OFF', country: 'Indonesia', imageUrl: '/assets/nt.jpeg', delay: '0.7s' },
];

export const PopularDestinations: React.FC = () => {
  return (
    <Box
      className="destination"
      sx={{ py: 5 }}
    >
      <Box className="container">
        <Box
          textAlign="center"
          sx={{ mb: 5 }}
        >
          <Typography
            variant="h6"
            sx={{ bgcolor: 'white', color: 'primary.main', display: 'inline-block', px: 2 }}
          >
            Destination
          </Typography>
          <Typography
            variant="h4"
            sx={{ mt: 1 }}
          >
            Popular Destination
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={7}
            md={6}
          >
            <Grid
              container
              spacing={3}
            >
              {destinations.slice(0, 3).map((destination, index) => (
                <Grid
                  item
                  xs={12}
                  md={index === 0 ? 12 : 6}
                  key={destination.country}
                >
                  <Box
                    component="a"
                    href="#"
                    sx={{
                      display: 'block',
                      position: 'relative',
                      overflow: 'hidden',
                      '& img': { width: '100%', height: '100%' },
                      maxHeight: 400,
                      height: '100%',
                    }}
                  >
                    <img
                      src={destination.imageUrl}
                      alt={destination.country}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        m: 3,
                        py: 1,
                        px: 2,
                        bgcolor: 'white',
                        color: 'error.main',
                        fontWeight: 'bold',
                      }}
                    >
                      {destination.discount}
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        m: 3,
                        py: 1,
                        px: 2,
                        bgcolor: 'white',
                        color: 'primary.main',
                        fontWeight: 'bold',
                      }}
                    >
                      {destination.country}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid
            item
            lg={5}
            md={6}
            sx={{ minHeight: 350 }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: 'block',
                position: 'relative',
                height: '100%',
                overflow: 'hidden',
                '& img': {
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                },
              }}
            >
              <img
                src={destinations[3].imageUrl}
                alt={destinations[3].country}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  m: 3,
                  py: 1,
                  px: 2,
                  bgcolor: 'white',
                  color: 'error.main',
                  fontWeight: 'bold',
                }}
              >
                {destinations[3].discount}
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  m: 3,
                  py: 1,
                  px: 2,
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 'bold',
                }}
              >
                {destinations[3].country}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
