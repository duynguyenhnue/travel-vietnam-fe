import {
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  Box,
  FormControl,
  MenuItem,
  IconButton,
  Popover,
  CardContent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { tokens } from 'src/locales/tokens';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'src/redux/store';
import { usePathname } from 'src/hooks/use-pathname';
import { getFlightByDestinationId } from 'src/redux/slices/flights';

const FlightBooking = () => {
  const { t } = useTranslation();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { flights } = useSelector((state) => state.flights);
  const open = Boolean(anchorEl);
  const id = open ? 'guest-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIncrease = (type: string) => {
    if (type === 'Người lớn') {
      setAdults(adults + 1);
    } else if (type === 'Trẻ em') {
      setChildren(children + 1);
    } else if (type === 'Phòng') {
      setRooms(rooms + 1);
    }
  };

  const handleDecrease = (type: string) => {
    if (type === 'Người lớn' && adults > 1) {
      setAdults(adults - 1);
    } else if (type === 'Trẻ em' && children > 0) {
      setChildren(children - 1);
    } else if (type === 'Phòng' && rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  useEffect(() => {
    dispatch(getFlightByDestinationId(Number(pathname.split('/').pop())));
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
        <TextField
          label={t(tokens.hotels.destination)}
          sx={{ width: '30%', minWidth: '280px', minHeight: '56px' }}
        />
        <TextField
          label={t(tokens.hotels.checkIn)}
          type="date"
          InputLabelProps={{ shrink: true }}
          sx={{ width: '15%', minWidth: '140px', minHeight: '56px' }}
        />
        <TextField
          label={t(tokens.hotels.checkOut)}
          type="date"
          InputLabelProps={{ shrink: true }}
          sx={{
            width: '15%',
            minWidth: '140px',
            minHeight: '56px',
          }}
        />
        <FormControl sx={{ width: '30%', minWidth: '280px', minHeight: '56px' }}>
          <Button
            aria-describedby={id}
            variant="outlined"
            onClick={handleClick}
            sx={{ textTransform: 'none', height: '100%', minHeight: '56px' }}
            fullWidth
          >
            {`Người lớn: ${adults}, Trẻ em: ${children}, Phòng: ${rooms}`}
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{
              sx: {
                width: anchorEl ? anchorEl.clientWidth : 'auto',
              },
            }}
          >
            <Box p={2}>
              <MenuItem>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography>Người lớn</Typography>
                  <Box>
                    <IconButton onClick={() => handleDecrease('Người lớn')}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography display="inline">{adults}</Typography>
                    <IconButton onClick={() => handleIncrease('Người lớn')}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography>Trẻ em</Typography>
                  <Box>
                    <IconButton onClick={() => handleDecrease('Trẻ em')}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography display="inline">{children}</Typography>
                    <IconButton onClick={() => handleIncrease('Trẻ em')}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </MenuItem>
              <MenuItem>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography>Phòng</Typography>
                  <Box>
                    <IconButton onClick={() => handleDecrease('Phòng')}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography display="inline">{rooms}</Typography>
                    <IconButton onClick={() => handleIncrease('Phòng')}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </MenuItem>
            </Box>
          </Popover>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          sx={{ height: '56px' }}
        >
          <SearchMdIcon />
        </Button>
      </Box>
      <Grid
        container
        spacing={3}
      >
        {flights &&
          flights.map((flight) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={flight.id}
            >
              <Card>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <Box>
                    <Typography variant="h6">{flight.airline}</Typography>
                    <Typography variant="body2">From: {flight.departureLocation}</Typography>
                    <Typography variant="body2">To: {flight.arrivalLocation}</Typography>
                    <Typography variant="body2">Departure: {flight.departureTime}</Typography>
                    <Typography variant="body2">Duration: {flight.duration}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 'auto',
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="primary"
                    >
                      ${flight.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                    >
                      Select
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default FlightBooking;
