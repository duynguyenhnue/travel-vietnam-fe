import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, TextField, MenuItem, Rating, Divider } from '@mui/material';
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
import { useDispatch, useSelector, RootState, dispatch } from 'src/redux/store';
import { getPaymentUrl } from 'src/redux/slices/checkout';
import { localStorageConfig } from 'src/config';
import { useDialog } from 'src/hooks/use-dialog';
import { handleOpenDialog } from 'src/redux/slices/authentication';
import toast from 'react-hot-toast';
import { BookingType } from 'src/types/redux/checkout';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { getHotelById, getHotels } from 'src/redux/slices/hotels';
import { LocationsType } from 'src/types/redux/hotels';
import { getTours } from 'src/redux/slices/tours';
import { Review } from 'src/types/redux/tours';
import ImageModal from 'src/components/common/imageModal/ImageModal';
import { LatLngTuple } from 'leaflet';
import { useNavigate } from 'react-router-dom';

const relatedHotelsVietnam = () => {
  const { hotels } = useSelector((state: RootState) => state.hotels);
  const navigate = useNavigate();
  useEffect(() => {
    if (!hotels) {
      dispatch(getHotels());
    }
  }, [hotels]);
  const calculateAverageRating = (reviews: Review[] | undefined) => {
    if (!reviews || reviews.length === 0) return 5;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / reviews.length).toFixed(2) as unknown as number;
  };
  const handleHotelClick = (id: string) => {
    navigate(`/hotels/${id}`);
  };
  return hotels?.map((hotel, index) => (
    <Card key={index} onClick={() => handleHotelClick(hotel._id)}>
      <CardMedia
        component="img"
        height="140"
        image={hotel.photos[0]}
        alt={hotel.name}
      />
      <CardContent>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
        >
          {hotel.name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {hotel.description}
        </Typography>
        {hotel.reviews.map((review, i) => (
          <Typography
            variant="body2"
            color="textSecondary"
            key={i}
          >
            {review.reviewText}
          </Typography>
        ))}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Rating
            value={calculateAverageRating(hotel.reviews)}
            readOnly
            size="small"
          />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ ml: 1 }}
          >
            {hotel.reviews.length} reviews
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ mt: 1 }}
        >
          {hotel.price.toLocaleString()} VNĐ/person
        </Typography>
      </CardContent>
    </Card>
  ));
};

const relatedToursToday = () => {
  const { tours } = useSelector((state: RootState) => state.tours);
  const navigate = useNavigate();
  useEffect(() => {
    if (!tours) {
      dispatch(getTours());
    }
  }, [tours]);
  const calculateAverageRating = (reviews: { rating: number }[]) => {
    if (reviews.length === 0) return 5;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / reviews.length).toFixed(2) as unknown as number;
  };
  const handleTourClick = (id: string) => {
    navigate(`/tours/${id}`);
  };
  return tours?.map((tour, index) => (
    <Card key={index} onClick={() => handleTourClick(tour._id)}>
      <CardMedia
        component="img"
        height="140"
        image={tour.photos[0]}
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
          {tour.desc}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Rating
            value={calculateAverageRating(tour.reviews)}
            readOnly
            size="small"
          />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ ml: 1 }}
          >
            {tour.reviews.length} reviews
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ mt: 1 }}
        >
          {tour.price.toLocaleString()} VNĐ/person
        </Typography>
      </CardContent>
    </Card>
  ));
};

const HotelBookingPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const pathname = location.pathname;
  const id = pathname.split('/').pop();
  const dialog = useDialog();
  const { locationId } = useParams();
  const { hotel } = useSelector((state: RootState) => state.hotels);
  const [provinces, setProvinces] = useState<LocationsType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkInDate, setCheckInDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [checkOutDate, setCheckOutDate] = useState<string>(new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [destination, setDestination] = useState<LatLngTuple>([0, 0]);

  useEffect(() => {
    if (hotel) {
      setTotalPrice(hotel.price);
    }
  }, [hotel]);

  useEffect(() => {
    if (id) {
      dispatch(getHotelById(id));
    }
  }, [id]);

  useEffect(() => {
    const fetchProvinces = async (): Promise<void> => {
      try {
        const response = await fetch('https://esgoo.net/api-tinhthanh/1/0.htm');
        const data: { data: LocationsType[] } = await response.json() as { data: LocationsType[] };
        setProvinces(data.data);
        const destination = data.data?.find((p) => p.id === hotel?.address.province);
        setDestination([destination?.latitude || 0, destination?.longitude || 0]);
      } catch (error: unknown) {
        toast.error(`Error fetching provinces: ${String(error)}`);
      }
    };

    fetchProvinces().catch((error: unknown) => {
      toast.error(`Error fetching provinces: ${String(error)}`);
    });
  }, [hotel]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const days = (checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24);
      setTotalPrice(days * (hotel?.price || 0));
    };

    calculateTotalPrice();
  }, [checkInDate, checkOutDate, hotel?.price]);

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
        amount: totalPrice,
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

  const calculateAverageRating = (reviews: Review[] | undefined) => {
    if (!reviews || reviews.length === 0) return 5;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / reviews.length).toFixed(2) as unknown as number;
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

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
        {hotel?.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <LocationOnIcon fontSize="small" /> {provinces?.find((p) => p.id === hotel?.address.province)?.name} |
        </Typography>
        <Rating
          name="half-rating-read"
          defaultValue={calculateAverageRating(hotel?.reviews)}
          precision={0.5}
          readOnly
        />
        <Typography
          variant="subtitle1"
          color="textSecondary"
        >
          ({hotel?.reviews.length} {t(tokens.reviews.reviews)})
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
              image={hotel?.photos[0]}
              alt="Tour Image"
              onClick={() => handleImageClick(hotel?.photos[0] || '')}
            />
            <CardContent sx={{ padding: 0 }}>
              <Grid
                container
                spacing={2}
              >
                {hotel?.photos.slice(0, 6).map((src, index) => (
                  <Grid
                    item
                    xs={2}
                    key={index}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${index}`}
                      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                      onClick={() => handleImageClick(src)}
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
            <Maps destination={destination} />
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
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label={t(tokens.hotelBooking.booking.to)}
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
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
                {totalPrice.toLocaleString()} VNĐ
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
        <Testimonials Html={relatedToursToday()} />
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ mt: 4, '.MuiContainer-root': { padding: 0 } }}>
        <Typography variant="h6">{t(tokens.hotelBooking.relatedHotels.vietnam)}</Typography>
        <Testimonials Html={relatedHotelsVietnam()} />
      </Box>
      <Divider sx={{ my: 4 }} />
      <CustomerReview data={[]} />
      <ImageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage || ''}
      />
    </Container>
  );
};

export default HotelBookingPage;
