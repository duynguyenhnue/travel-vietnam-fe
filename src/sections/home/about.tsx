import React from 'react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const AboutUs: React.FC = () => {
  return (
    <Box sx={{ py: 5, bgcolor: 'background.paper' }}>
      <Box className="container">
        <Grid
          container
          spacing={5}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Box
              sx={{
                position: 'relative',
                minHeight: '400px',
                height: '100%',
                width: '100%',
              }}
            >
              <Box
                component="img"
                src="/assets/hanoi.jpeg"
                alt="About Us"
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="h6"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                display: 'inline-block',
                px: 1,
                mb: 1,
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h4"
              sx={{ mb: 4 }}
            >
              Welcome to <span style={{ color: '#1976d2' }}>Tourist</span>
            </Typography>
            <Typography sx={{ mb: 4 }}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
              eos. Clita erat ipsum et lorem et sit.
            </Typography>
            <Typography sx={{ mb: 4 }}>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
              eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
              erat amet.
            </Typography>

            <Grid
              container
              spacing={2}
              sx={{ mb: 4 }}
            >
              {[
                'First Class Flights',
                'Handpicked Hotels',
                '5 Star Accommodations',
                'Latest Model Vehicles',
                '150 Premium City Tours',
                '24/7 Service',
              ].map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                >
                  <Stack direction="row">
                    <ArrowRightIcon sx={{ color: 'primary.main', mr: 1 }} />
                    {feature}
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              color="primary"
              size="large"
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
