import { Card, CardContent, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHotel, getRoomsByHotelId } from 'src/redux/slices/hotels';
import { useDispatch, useSelector } from 'src/redux/store';
import RoomsBooking from 'src/sections/hotels/rooms-booking';

const RoomsBookingPage = () => {
  const { hotelId } = useParams();
  const dispatch = useDispatch();
  const { rooms, hotel } = useSelector((state) => state.hotels);

  useEffect(() => {
    if (hotelId) {
      dispatch(getHotel(hotelId));
      dispatch(getRoomsByHotelId({ hotelId }));
    }
  }, [hotelId, dispatch]);

  return (
    <Stack spacing={4}>
      {hotel && (
        <Stack spacing={2}>
          <Typography
            variant="h4"
            gutterBottom
          >
            {hotel.name}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
          >
            <Typography
              variant="body2"
              display="flex"
              alignItems="center"
            >
              {hotel.address}
            </Typography>
            <Typography
              variant="body2"
              display="flex"
              alignItems="center"
            >
              |
            </Typography>
            <Rating
              value={hotel.rating}
              readOnly
              precision={0.5}
            />
            <Typography
              color="text.secondary"
              variant="body2"
              display="flex"
              alignItems="center"
            >
              ({hotel.rating} reviews)
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            {hotel.description}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
          >
            Amenities
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
          >
            {hotel.amenities.join(', ')}
          </Typography>

          <Grid
            container
            spacing={2}
          >
            {hotel.images.map((image, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={`${hotel.name} image ${index + 1}`}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Image {index + 1}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}

      <RoomsBooking rooms={rooms} />
    </Stack>
  );
};

export default RoomsBookingPage;
