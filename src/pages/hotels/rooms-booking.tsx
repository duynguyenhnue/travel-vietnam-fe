import { Breadcrumbs, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { RouterLink } from 'src/components/common/router/router-link';
import RoomsBooking from 'src/sections/hotels/rooms-booking';

const RoomsBookingPage = () => {
  const { hotelId, locationId } = useParams();
  return (
    <Stack spacing={4}>
      <Breadcrumbs aria-label="breadcrumb">
        <RouterLink
          color="inherit"
          href="/hotels"
        >
          Hotels
        </RouterLink>
        <RouterLink
          color="inherit"
          href={`/hotels/${locationId}`}
        >
          {locationId}
        </RouterLink>
        <Typography sx={{ color: 'text.primary' }}>{hotelId}</Typography>
      </Breadcrumbs>
      <RoomsBooking />
    </Stack>
  );
};

export default RoomsBookingPage;
