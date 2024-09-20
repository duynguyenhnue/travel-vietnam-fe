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
  FormControl,
  MenuItem,
  IconButton,
  Popover,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { tokens } from 'src/locales/tokens';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const HotelBooking = () => {
  const { t } = useTranslation();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

  const open = Boolean(anchorEl);
  const id = open ? 'guest-popover' : undefined;
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
          sx={{ width: '15%', minWidth: '140px', minHeight: '56px' }}
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
