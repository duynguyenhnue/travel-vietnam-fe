import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import HotelIcon from '@mui/icons-material/Hotel';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

interface Service {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const services: Service[] = [
  {
    title: 'WorldWide Tours',
    description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    icon: <PublicIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
  },
  {
    title: 'Hotel Reservation',
    description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    icon: <HotelIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
  },
  {
    title: 'Travel Guides',
    description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    icon: <PersonIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
  },
  {
    title: 'Event Management',
    description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
    icon: <SettingsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />,
  },
];

export const Services: React.FC = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Box className="container">
        <Box
          textAlign="center"
          sx={{ mb: 5 }}
        >
          <Typography
            variant="h6"
            sx={{ bgcolor: 'white', color: 'primary.main', display: 'inline-block', px: 2 }}
          >
            Services
          </Typography>
          <Typography
            variant="h4"
            sx={{ mt: 1 }}
          >
            Our Services
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <Paper
                elevation={3}
                sx={{
                  textAlign: 'center',
                  borderRadius: 2,
                  pt: 3,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-10px)' },
                }}
              >
                <Box p={4}>
                  {service.icon}
                  <Typography
                    variant="h5"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography>{service.description}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
