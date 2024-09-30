import { Button, Typography, Grid, Card, CardMedia, Box, CardContent, Rating } from '@mui/material';
import { HotelType } from 'src/types/redux/hotels';

type HotelBookingProps = {
  hotels: HotelType[] | null;
};

const HotelBooking = (props: HotelBookingProps) => {
  const { hotels } = props;

  return (
    hotels && (
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
                key={hotel._id}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={hotel.images[0]}
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
                      {hotel.address}
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                      href={`hotels/${hotel._id}`}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    )
  );
};

export default HotelBooking;
