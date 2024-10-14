import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  marginTop: '4rem',
  textAlign: 'center',
});

const AboutUs = () => {
  return (
    <StyledContainer maxWidth="xl">
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Welcome to our travel website! We specialize in providing the best hotel accommodations and exciting tours to make your travel experience unforgettable.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/400x200"
              alt="Our Hotels"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Hotels
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Discover a wide range of hotels that cater to all your needs, from luxury resorts to budget-friendly accommodations.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/400x200"
              alt="Our Tours"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Our Tours
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Explore exciting tours that take you to the most beautiful and adventurous places around the world.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, backgroundColor: '#f5f5f5', p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          Our mission is to provide exceptional travel experiences by offering top-notch services and personalized itineraries that cater to your unique preferences.
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {['Alice', 'Bob', 'Charlie'].map((name, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={`https://via.placeholder.com/200?text=${name}`}
                  alt={name}
                />
                <CardContent>
                  <Typography variant="h6">{name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {name} is a key member of our team, dedicated to making your travel experience unforgettable.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Have questions? Feel free to reach out to us at contact@travelwebsite.com or call us at (123) 456-7890.
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default AboutUs;