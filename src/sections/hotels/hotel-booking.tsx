import { Button, Typography, Grid, Card, CardMedia, Box, CardContent, Rating } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'src/redux/store';
import { getHotelByDestinationId } from 'src/redux/slices/hotels';
import { HotelType } from 'src/types/redux/hotels';
import { useParams } from 'react-router';

const HotelBooking = () => {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.hotels);
  const { locationId } = useParams();

  useEffect(() => {
    if (locationId) {
      dispatch(getHotelByDestinationId(locationId));
    }
  }, []);

  return (
    <Box>
      <Grid
        container
        spacing={3}
      >
        {hotels &&
          hotels.map((hotel: HotelType) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={hotel.id}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={hotel.image_url}
                  alt={`Hotel ${hotel.name}`}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    {hotel.name}
                  </Typography>
                  <Rating
                    value={hotel.rating}
                    readOnly
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {hotel.description}
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    href={`${locationId}/${hotel.id}`}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default HotelBooking;
