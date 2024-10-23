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
import { useDispatch } from 'src/redux/store';
import { getPaymentUrl } from 'src/redux/slices/checkout';
import { localStorageConfig } from 'src/config';
import { useDialog } from 'src/hooks/use-dialog';
import { handleOpenDialog } from 'src/redux/slices/authentication';
import toast from 'react-hot-toast';

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
  const dispatch = useDispatch();
  const dialog = useDialog();

  const handlePayment = () => {
    const access = localStorage.getItem(localStorageConfig.accessToken);

    if (!access) {
      dialog.handleOpen();
      dispatch(handleOpenDialog('login'));
      toast.error('Please login to continue booking');
      return;
    }

    dispatch(
      getPaymentUrl({
        amount: 78000,
        orderInfo: 'Vintage Double Decker Bus Tour & Thames River Cruise',
      })
    );
  };

  const features = [
    {
      icon: <CancelIcon sx={{ color: '#faa935' }} />,
      title: 'Free Cancellation',
      description: 'Cancel up to 24 hours in advance to receive a full refund',
    },
    {
      icon: <HealthAndSafetyIcon sx={{ color: '#faa935' }} />,
      title: 'Health Precautions',
      description: 'Special health and safety measures apply. Learn more',
    },
    {
      icon: <MobileFriendlyIcon sx={{ color: '#faa935' }} />,
      title: 'Mobile Ticketing',
      description: 'Use your phone or print your voucher',
    },
    {
      icon: <AccessTimeIcon sx={{ color: '#faa935' }} />,
      title: 'Duration 3.5 Hours',
      description: 'Check availability to see starting times.',
    },
    {
      icon: <FlashOnIcon sx={{ color: '#faa935' }} />,
      title: 'Instant Confirmation',
      description: 'Don’t wait for the confirmation!',
    },
    {
      icon: <TranslateIcon sx={{ color: '#faa935' }} />,
      title: 'Live Tour Guide In English',
      description: 'English',
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
        Vintage Double Decker Bus Tour & Thames River Cruise
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <LocationOnIcon fontSize="small" /> Gothenburg |
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={4}
          precision={0.5}
          readOnly
        />
        <Typography
          variant="subtitle1"
          color="textSecondary"
        >
          (348 reviews)
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
            <Typography variant="h6">Description</Typography>
            <Typography
              variant="body1"
              color="textSecondary"
            >
              See the highlights of London via 2 classic modes of transport on this half-day
              adventure...
            </Typography>
          </Box>
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: '#faa935', textDecoration: 'underline' }}
            >
              Open In Google Maps
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
              <Typography variant="h6">Booking</Typography>
              <TextField
                label="From"
                type="date"
                defaultValue="2021-10-12"
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="To"
                type="date"
                defaultValue="2021-10-12"
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                label="No. Of Guest"
                select
                defaultValue="2 adults"
                fullWidth
                sx={{ mt: 2 }}
              >
                <MenuItem value="1 adult">1 adult</MenuItem>
                <MenuItem value="2 adults">2 adults</MenuItem>
                <MenuItem value="3 adults">3 adults</MenuItem>
              </TextField>
              <p style={{ textAlign: 'center' }}>Subtotal</p>
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
                onClick={handlePayment}
                sx={{ backgroundColor: '#faa935', '&:hover': { backgroundColor: '#faa935' } }}
                fullWidth
              >
                Confirm Booking
              </Button>
              <Button
                variant="outlined"
                fullWidth
                color="inherit"
              >
                Save To Wishlist
              </Button>
              <Button
                variant="outlined"
                fullWidth
                color="inherit"
              >
                Share The Activity
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ mt: 4, '.MuiContainer-root': { padding: 0 } }}>
        <Typography variant="h6">Related Hotels In Today</Typography>
        <Testimonials Html={relatedHotelsToday()} />
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ mt: 4, '.MuiContainer-root': { padding: 0 } }}>
        <Typography variant="h6">Related Hotels In VietNam</Typography>
        <Testimonials Html={relatedHotelsVietnam()} />
      </Box>
      <Divider sx={{ my: 4 }} />
      <CustomerReview />
    </Container>
  );
};

export default HotelBookingPage;
