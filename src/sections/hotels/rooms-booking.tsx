import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  styled,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Stepper,
  Step,
  StepLabel,
  Box,
  FormControl,
  MenuItem,
  Paper,
  TextField,
} from '@mui/material';
import { Stack } from '@mui/system';
import { SetStateAction, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDialog } from 'src/hooks/use-dialog';
import { getHotel, getRoomsByHotelId } from 'src/redux/slices/hotels';
import { useDispatch, useSelector } from 'src/redux/store';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { enGB } from 'date-fns/locale';
import { FaBed, FaWifi, FaTv, FaParking } from 'react-icons/fa';
import { RoomType } from 'src/types/redux/hotels';

const PriceTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const roomItems = [
  { icon: <FaBed />, text: 'King-size bed' },
  { icon: <FaWifi />, text: 'High-speed Wi-Fi' },
  { icon: <FaTv />, text: '50-inch Smart TV' },
  { icon: <FaParking />, text: 'Free parking' },
];

const steps = ['Select Time', 'View Information', 'Make Payment'];

const RoomsBooking = () => {
  const { hotelId } = useParams();
  const dispatch = useDispatch();
  const dialog = useDialog();
  const { rooms, hotel } = useSelector((state) => state.hotels);
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [bank, setBank] = useState('vietinbank');
  const [activeStep, setActiveStep] = useState(0);
  const [bookedDates, setBookedDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const room = rooms && rooms.find((room) => room.id === selectedRoom?.id);

  const calculateNights = () => {
    const { startDate, endDate } = bookedDates;
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays >= 0 ? differenceInDays : 0;
  };

  const handleRoomSelect = (room: any) => {
    setSelectedRoom(room);
    dialog.handleOpen();
  };

  const handleConfirmBooking = () => {
    // handleNext();
  };
  const handleSelect = (ranges: any) => {
    setBookedDates(ranges.selection);
  };

  const handleCancel = () => {
    dialog.handleClose();
    setBookedDates({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    });
  };
  const handleBankChange = (event: { target: { value: SetStateAction<string> } }) => {
    setBank(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (hotelId) {
      dispatch(getHotel(hotelId));
      dispatch(getRoomsByHotelId(hotelId));
    }
  }, [hotelId, dispatch]);

  return (
    hotel && (
      <Stack spacing={4}>
        <Stack>
          <Typography
            variant="h4"
            gutterBottom
          >
            {hotel.name}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
          >
            {hotel.description}
          </Typography>
        </Stack>
        <Grid
          container
          spacing={2}
        >
          {rooms &&
            rooms.map((room) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={room.id}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={room.image_url}
                    alt={`Room ${room.name}`}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                    >
                      {room.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {room.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      ${room.price}/night
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                      onClick={() => handleRoomSelect(room)}
                    >
                      Select Room
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Dialog
          open={dialog.open}
          onClose={dialog.handleClose}
        >
          <DialogContent>
            <Stack
              spacing={2}
              position="relative"
            >
              <Stepper
                activeStep={activeStep}
                alternativeLabel
                sx={{ mb: 2, minWidth: 400 }}
              >
                {steps.map((label) => (
                  <Step
                    key={label}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === 0 && (
                <DateRange
                  ranges={[bookedDates]}
                  onChange={handleSelect}
                  locale={enGB}
                  minDate={new Date()}
                />
              )}

              {activeStep === 1 && (
                <Stack>
                  <PriceTypography variant="h4">{room?.price} VND / night</PriceTypography>
                  <Grid
                    container
                    spacing={2}
                  >
                    {roomItems.map((item, index) => (
                      <Grid
                        item
                        xs={6}
                        key={index}
                      >
                        <Tooltip title={item.text}>
                          <ListItem>
                            {item.icon}
                            <ListItemText
                              primary={item.text}
                              sx={{ ml: 1 }}
                            />
                          </ListItem>
                        </Tooltip>
                      </Grid>
                    ))}
                  </Grid>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Room Tax"
                        secondary="$30.00"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Service Fee"
                        secondary="$20.00"
                      />
                    </ListItem>
                  </List>
                  <Paper
                    component="div"
                    sx={{ padding: 2, display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant="h6"> Price: </Typography>
                    <Typography variant="h6">
                      {Number(room?.price) * calculateNights()} VND
                    </Typography>
                  </Paper>
                </Stack>
              )}
              {activeStep === 2 && (
                <Box sx={{ padding: 2 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                  >
                    Payment Information
                  </Typography>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6">Select Bank</Typography>
                      <FormControl
                        fullWidth
                        margin="normal"
                      >
                        <TextField
                          select
                          value={bank}
                          onChange={handleBankChange}
                          label="Bank"
                        >
                          <MenuItem value="vietinbank">VietinBank</MenuItem>
                        </TextField>
                      </FormControl>
                      <Typography variant="h6">QR Code</Typography>
                      <img
                        src={`https://img.vietqr.io/image/${bank}-106873868415-J6C2KDC.jpg?amount=${room?.price}&addInfo=THANH%20TOAN%20DAT%20PHONG`}
                        alt="QR Code"
                        style={{ width: '100%', marginTop: 10 }}
                      />
                    </CardContent>
                  </Card>
                </Box>
              )}
            </Stack>
          </DialogContent>
          <DialogActions>
            <Stack
              direction="row"
              justifyContent="space-between"
              width="100%"
              p={2}
            >
              <Stack
                direction="row"
                spacing={5}
              >
                {activeStep != 0 && (
                  <Button
                    onClick={handleBack}
                    variant="outlined"
                    color="secondary"
                  >
                    Back
                  </Button>
                )}
                {activeStep == 2 ? (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleConfirmBooking}
                  >
                    Confirm
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    variant="outlined"
                    color="primary"
                    disabled={calculateNights() === 0}
                  >
                    Next
                  </Button>
                )}
              </Stack>

              <Button
                variant="outlined"
                color="error"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </Stack>
    )
  );
};

export default RoomsBooking;
