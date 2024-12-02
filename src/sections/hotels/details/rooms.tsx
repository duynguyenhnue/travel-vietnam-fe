import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  DialogActions,
  TextField,
  DialogContent,
  DialogTitle,
  Dialog,
  Divider,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

export const RoomOptionItem: React.FC<{
  id: string;
  title: string;
  details: string;
  price: number;
  adults?: number;
  handlePayment?: (
    price: number,
    roomId: string,
    guestSize: number,
    startDate: string,
    endDate: string
  ) => void;
  isPopular?: boolean;
}> = ({ id, title, details, price, adults, handlePayment }) => {
  const [open, setOpen] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    startDate: '',
    endDate: '',
  });
  const [error, setError] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const { t } = useTranslation();
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError('');
    setBookingInfo({ startDate: '', endDate: '' });
    setTotalPrice(0);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newInfo = { ...bookingInfo, [name]: value };

    // Kiểm tra lỗi ngày
    if (name === 'endDate' && newInfo.startDate && value <= newInfo.startDate) {
      // setError('Ngày kết thúc phải lớn hơn ngày bắt đầu');
      setError(t(tokens.hotels.roomEndDate));
    } else if (name === 'startDate' && newInfo.endDate && value >= newInfo.endDate) {
      // setError('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
      setError(t(tokens.hotels.roomStartDate));
    } else {
      setError('');
    }

    setBookingInfo(newInfo);

    // Tính toán tổng tiền trực tiếp
    if (newInfo.startDate && newInfo.endDate) {
      const start = dayjs(newInfo.startDate);
      const end = dayjs(newInfo.endDate);
      const nights = end.diff(start, 'day');
      if (nights > 0) {
        setTotalPrice(nights * price);
      } else {
        setTotalPrice(0);
      }
    }
  };
  const handleConfirm = () => {
    if (error || totalPrice === 0) {
      toast.error('Thông tin chưa hợp lệ');
      return;
    }

    if (bookingInfo.startDate && bookingInfo.endDate) {
      const guestSize = adults || 1;
      if (handlePayment) {
        handlePayment(totalPrice, id, guestSize, bookingInfo.startDate, bookingInfo.endDate);
      }
    }
    handleClose();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: 3,
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          p: 3,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            container
            xs={12}
            sx={{
              background: '#f5f5f5',
              borderRadius: 1,
              p: 1,
              mb: 2,
            }}
          >
            <Grid
              item
              xs={6}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
              >
                {t(tokens.hotels.roomSelect)}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
              >
                {t(tokens.hotels.roomGuest)}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ textAlign: 'right' }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="bold"
              >
                {t(tokens.hotels.roomPrice)}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={6}
          >
            <Typography variant="body2">{title}</Typography>
            <Typography variant="body2">{details}</Typography>
          </Grid>

          <Grid
            item
            xs={2}
          >
            <Stack
              mt={2}
              direction="row"
            >
              {Array.from({ length: adults || 2 }).map((_, index) => (
                <PersonIcon
                  key={index}
                  color="primary"
                  sx={{
                    fontSize: 32,
                    mt: 0.5,
                  }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Typography
              sx={{
                background: '#e3f2fd',
                borderRadius: 1,
                px: 1,
                fontSize: '0.85rem',
              }}
            >
              {t(tokens.hotels.roomSpecial)}
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              sx={{ mt: 1, fontWeight: 'bold' }}
            >
              {price.toLocaleString()} VNĐ
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'text.secondary', mt: 0.5 }}
            >
              {t(tokens.hotels.roomTax)}
            </Typography>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleClickOpen}
          sx={{
            mt: 3,
            alignSelf: 'flex-end',
            textTransform: 'none',
            px: 3,
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#faaf00',
            },
          }}
        >
          {t(tokens.hotels.roomBook)}
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{t(tokens.hotels.roomBill)}</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label={t(tokens.hotels.roomStart)}
              type="date"
              name="startDate"
              InputLabelProps={{ shrink: true }}
              value={bookingInfo.startDate}
              onChange={handleInputChange}
              error={!!error && bookingInfo.startDate >= bookingInfo.endDate}
              helperText={bookingInfo.startDate >= bookingInfo.endDate && error}
            />
            <TextField
              label={t(tokens.hotels.roomEnd)}
              type="date"
              name="endDate"
              InputLabelProps={{ shrink: true }}
              value={bookingInfo.endDate}
              onChange={handleInputChange}
              error={!!error && bookingInfo.endDate <= bookingInfo.startDate}
              helperText={bookingInfo.endDate <= bookingInfo.startDate && error}
            />
            <Divider />
            <Typography variant="body2">
              <strong>{t(tokens.hotels.pricePerNight)}:</strong> {price.toLocaleString()} VNĐ
            </Typography>
            <Typography variant="body2">
              <strong>{t(tokens.hotels.numberOfNights)}:</strong>{' '}
              {bookingInfo.startDate && bookingInfo.endDate
                ? dayjs(bookingInfo.endDate).diff(dayjs(bookingInfo.startDate), 'day')
                : 0}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
            >
              <strong>{t(tokens.hotels.totalAmount)}:</strong> {totalPrice.toLocaleString()} VNĐ
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
          >
            {t(tokens.hotels.cancel)}
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color="primary"
          >
            {t(tokens.hotels.confirm)}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
