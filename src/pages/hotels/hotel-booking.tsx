import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
  MenuItem,
  Rating,
  Divider,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CancelIcon from '@mui/icons-material/Cancel';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TranslateIcon from '@mui/icons-material/Translate';
import Maps from 'src/sections/common/map';
import Testimonials from 'src/sections/common/testimonials';
import CustomerReview from 'src/sections/hotels/details/review';
import { useDispatch, useSelector, RootState } from 'src/redux/store';
import { getPaymentUrl } from 'src/redux/slices/checkout';
import { localStorageConfig } from 'src/config';
import { useDialog } from 'src/hooks/use-dialog';
import { handleOpenDialog } from 'src/redux/slices/authentication';
import toast from 'react-hot-toast';
import { BookingType } from 'src/types/redux/checkout';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

const relatedHotelsToday = () => {
  const tours = [
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
  ];
  return tours.map((tour, index) => (
    <Card key={index}>
      <CardMedia
        component="img"
        height="140"
        image={tour.image}
        alt={tour.title}
      />
      <CardContent>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
        >
          {tour.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {tour.duration}
        </Typography>
        {tour.facilities.map((facility, i) => (
          <Typography
            variant="body2"
            color="textSecondary"
            key={i}
          >
            {facility}
          </Typography>
        ))}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Rating
            value={tour.rating}
            readOnly
            size="small"
          />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ ml: 1 }}
          >
            {tour.reviews} reviews
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ mt: 1 }}
        >
          {tour.price} per person
        </Typography>
      </CardContent>
    </Card>
  ));
};

const relatedHotelsVietnam = () => {
  const tours = [
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
    {
      title: 'Alaska: Westminster to Greenwich River Thames',
      image: 'https://via.placeholder.com/300x200',
      duration: 'Duration 2 hours',
      facilities: ['Transport Facility', 'Family Plan'],
      price: '$35.00',
      reviews: 584,
      rating: 4,
    },
  ];
  return tours.map((tour, index) => (
    <Card key={index}>
      <CardMedia
        component="img"
        height="140"
        image={tour.image}
        alt={tour.title}
      />
      <CardContent>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
        >
          {tour.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {tour.duration}
        </Typography>
        {tour.facilities.map((facility, i) => (
          <Typography
            variant="body2"
            color="textSecondary"
            key={i}
          >
            {facility}
          </Typography>
        ))}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Rating
            value={tour.rating}
            readOnly
            size="small"
          />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ ml: 1 }}
          >
            {tour.reviews} reviews
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ mt: 1 }}
        >
          {tour.price} per person
        </Typography>
      </CardContent>
    </Card>
  ));
};

const HotelBookingPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const dialog = useDialog();
  const { locationId } = useParams();
  const { hotel } = useSelector((state: RootState) => state.hotels);

  const handlePayment = () => {
    const access = localStorage.getItem(localStorageConfig.accessToken);

    if (!access) {
      dialog.handleOpen();
      dispatch(handleOpenDialog('login'));
      toast.error(t(tokens.booking.loginRequired));
      return;
    }

    dispatch(
      getPaymentUrl({
        amount: 78000,
        bookingType: BookingType.HOTELS,
        guestSize: 2,
        orderId: locationId || '',
      })
    );
  };

  const features = [
    {
      icon: <CancelIcon sx={{ color: '#faa935' }} />,
      title: t(tokens.hotelBooking.features.freeCancellation.title),
      description: t(tokens.hotelBooking.features.freeCancellation.description),
    },
    {
      icon: <HealthAndSafetyIcon sx={{ color: '#faa935' }} />,
      title: t(tokens.hotelBooking.features.healthPrecautions.title),
      description: t(tokens.hotelBooking.features.healthPrecautions.description),
    },
    {
      icon: <MobileFriendlyIcon sx={{ color: '#faa935' }} />,
      title: t(tokens.hotelBooking.features.mobileTicketing.title),
      description: t(tokens.hotelBooking.features.mobileTicketing.description),
    },
    {
      icon: <AccessTimeIcon sx={{ color: '#faa935' }} />,
      title: t(tokens.hotelBooking.features.duration.title),
      description: t(tokens.hotelBooking.features.duration.description),
    },
    {
      icon: <FlashOnIcon sx={{ color: '#faa935' }} />,
      title: t(tokens.hotelBooking.features.instantConfirmation.title),
      description: t(tokens.hotelBooking.features.instantConfirmation.description),
    },
    {
      icon: <TranslateIcon sx={{ color: '#faa935' }} />,
      title: t(tokens.hotelBooking.features.service.title),
      description: t(tokens.hotelBooking.features.service.description),
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{ mt: 4 }}
    >
      <Typography
        variant="h4"
        gutterBottom
        maxWidth="sm"
      >
        {t(tokens.hotelBooking.title)}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <LocationOnIcon fontSize="small" /> {t(tokens.hotelBooking.location)} |
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={hotel?.rating || 0}
          precision={0.5}
          readOnly
        />
        <Typography
          variant="subtitle1"
          color="textSecondary"
        >
          ({300} {t(tokens.reviews.reviews)})
        </Typography>
      </Box>

      <Grid
        container
        sx={{ mt: 2 }}
        columnSpacing={4}
        rowSpacing={2}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            '.MuiPaper-root': { border: 0, borderRadius: 0 },
            '.MuiCardContent-root': { padding: 0 },
          }}
        >
          <Card sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <CardMedia
              component="img"
              height="400"
              image="https://via.placeholder.com/800x400"
              alt="Tour Image"
            />
            <CardContent sx={{ padding: 0 }}>
              <Grid
                container
                spacing={2}
              >
                {[
                  'https://via.placeholder.com/100',
                  'https://via.placeholder.com/100',
                  'https://via.placeholder.com/100',
                  'https://via.placeholder.com/100',
                  'https://via.placeholder.com/100',
                  'https://via.placeholder.com/100',
                ].map((src, index) => (
                  <Grid
                    item
                    xs={2}
                    key={index}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${index}`}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
          <Box
            sx={{
              mt: 4,
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              backgroundColor: '#f9f9f9',
            }}
          >
            <Grid
              container
              spacing={2}
            >
              {features.map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                >
                  <Box sx={{ display: 'flex', alignItems: 'top', gap: 1 }}>
                    {feature.icon}
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">{t(tokens.hotelBooking.description)}</Typography>
            <Typography
              variant="body1"
              color="textSecondary"
            >
              {hotel?.description || 'No description available'}
            </Typography>
          </Box>
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: '#faa935', textDecoration: 'underline' }}
            >
              {t(tokens.hotelBooking.openInGoogleMaps)}
            </Typography>
            <Maps />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
        >
          <Card>
            <CardContent>
              <Typography variant="h6">{t(tokens.hotelBooking.booking.title)}</Typography>
              <TextField
                label={t(tokens.hotelBooking.booking.from)}
                type="date"
                defaultValue="2021-10-12"
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label={t(tokens.hotelBooking.booking.to)}
                type="date"
                defaultValue="2021-10-12"
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label={t(tokens.hotelBooking.booking.guests)}
                select
                defaultValue="2 adults"
                fullWidth
                sx={{ mt: 2 }}
              >
                <MenuItem value="1 adult">1 adult</MenuItem>
                <MenuItem value="2 adults">2 adults</MenuItem>
                <MenuItem value="3 adults">3 adults</MenuItem>
              </TextField>
              <p style={{ textAlign: 'center' }}>{t(tokens.hotelBooking.booking.subtotal)}</p>
              <Typography
                variant="h4"
                sx={{ textAlign: 'center', color: '#faa935' }}
              >
                $78.90
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#faa935', '&:hover': { backgroundColor: '#faa935' } }}
                onClick={handlePayment}
                fullWidth
              >
                {t(tokens.hotelBooking.booking.confirmBooking)}
              </Button>
              <Button
                variant="outlined"
                fullWidth
                color="inherit"
              >
                {t(tokens.hotelBooking.booking.saveWishlist)}
              </Button>
              <Button
                variant="outlined"
                fullWidth
                color="inherit"
              >
                {t(tokens.hotelBooking.booking.shareActivity)}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ mt: 4, '.MuiContainer-root': { padding: 0 } }}>
        <Typography variant="h6">{t(tokens.hotelBooking.relatedHotels.today)}</Typography>
        <Testimonials Html={relatedHotelsToday()} />
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ mt: 4, '.MuiContainer-root': { padding: 0 } }}>
        <Typography variant="h6">{t(tokens.hotelBooking.relatedHotels.vietnam)}</Typography>
        <Testimonials Html={relatedHotelsVietnam()} />
      </Box>
      <Divider sx={{ my: 4 }} />
      <CustomerReview data={[]} />
    </Container>
  );
};

export default HotelBookingPage;
