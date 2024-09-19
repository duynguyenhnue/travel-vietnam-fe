import {
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { tokens } from 'src/locales/tokens';

export const HotelBooking = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          label={t(tokens.hotels.destination)}
          fullWidth
        />
        <TextField
          label={t(tokens.hotels.checkIn)}
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={t(tokens.hotels.checkOut)}
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={t(tokens.hotels.guests)}
          type="number"
          InputProps={{ inputProps: { min: 1 } }}
        />
        <Button
          variant="contained"
          color="primary"
        >
          <SearchMdIcon />
        </Button>
      </Box>
      <Typography
        variant="h6"
        gutterBottom
      >
        Available Hotels
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {[1, 2, 3].map((hotel) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={hotel}
          >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`}
                alt={`Hotel ${hotel}`}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                >
                  Hotel {hotel}
                </Typography>
                <Rating
                  value={4}
                  readOnly
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  $199/night
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
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
