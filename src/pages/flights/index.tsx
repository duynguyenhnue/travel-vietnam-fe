import {
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  Box,
  CardActionArea,
  CardMedia,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { useDispatch, useSelector } from 'src/redux/store';
import { useEffect } from 'react';
import { getDestinations } from 'src/redux/slices/flights';
import { RouterLink } from 'src/components/common/router/router-link';

const FlightsPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { locations } = useSelector((state) => state.flights);

  useEffect(() => {
    dispatch(getDestinations());
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          label={t(tokens.flights.from)}
          sx={{ width: '30%' }}
        />
        <TextField
          label={t(tokens.flights.to)}
          sx={{ width: '30%' }}
        />
        <TextField
          label={t(tokens.flights.departure)}
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={t(tokens.flights.return)}
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label={t(tokens.flights.passengers)}
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

      <Grid
        container
        spacing={3}
      >
        {locations &&
          locations.map((location) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={location.id}
            >
              <RouterLink href={`${location.id}`}>
                <Card
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardActionArea component="div">
                    <CardMedia
                      component="img"
                      height="256"
                      image={location.image_url}
                      alt={location.name}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        padding: 2,
                      }}
                    >
                      <Box textAlign="center">
                        <Typography
                          variant="h5"
                          color="white"
                          fontWeight="bold"
                        >
                          {location.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="white"
                          mt={1}
                          sx={{ display: { xs: 'none', md: 'block' } }}
                        >
                          {location.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                  <Box sx={{ padding: 2 }}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                    >
                      {location.description}
                    </Typography>
                  </Box>
                </Card>
              </RouterLink>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default FlightsPage;
