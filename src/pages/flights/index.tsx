import { useDispatch } from 'src/redux/store';
import { useEffect, useState } from 'react';
import { getDestinations } from 'src/redux/slices/flights';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import {
  Box, Typography, Button, Grid, TextField, MenuItem, FormControl, Select, InputLabel, Paper, Avatar,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel, 
  InputAdornment,
  IconButton,
  Menu,
  Checkbox,
  Slider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FlightsPage = () => {
  const locations = [
    {
      name: "Hà Nội",
      id: 1
    },
    {
      name: "Hồ Chí Minh",
      id: 2
    },
    {
      name: "Hà Tĩnh",
      id: 3
    }
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDestinations());
  }, []);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
    }
  };

  const handleDecrease = (type: string) => {
    if (type === 'Người lớn' && adults > 1) {
      setAdults(adults - 1);
    } else if (type === 'Trẻ em' && children > 0) {
      setChildren(children - 1);
    }
  };

  const [tripType, setTripType] = useState('return');
  const [minPrice, setMinPrice] = useState(3064144);
  const [maxPrice, setMaxPrice] = useState(89743682);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [departureTime, setDepartureTime] = useState([0, 23.59]);
  const [flightDuration, setFlightDuration] = useState([0, 47]);

  const handleTripTypeChange = (event: any) => {
    setTripType(event.target.value);
  };

  const handleAirlineChange = (event: any) => {
    const value = event.target.value;
    setSelectedAirlines((prev: any) =>
      prev.includes(value) ? prev.filter((airline: any) => airline !== value) : [...prev, value]
    );
  };

  const handlePriceChange = (event: any, newValue: any) => {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="trip-type-label">Loại chuyến</FormLabel>
              <RadioGroup
                row
                aria-labelledby="trip-type-label"
                value={tripType}
                onChange={handleTripTypeChange}
              >
                <FormControlLabel value="return" control={<Radio />} label="Khứ hồi" />
                <FormControlLabel value="one-way" control={<Radio />} label="Một chiều" />
                <FormControlLabel value="multi-city" control={<Radio />} label="Multi-City" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="destination-point"
              label="Điểm đi"
              select
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffIcon />
                  </InputAdornment>
                ),
              }}
            >
              {
                locations.map((location: any) => (
                  <MenuItem key={location.id} value={location.id}>
                    {location.name}
                  </MenuItem>
                ))
              }
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="destination-point"
              label="Điểm đến"
              select
              fullWidth
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightLandIcon />
                  </InputAdornment>
                ),
              }}
            >
              {
                locations.map((location: any) => (
                  <MenuItem key={location.id} value={location.id}>
                    {location.name}
                  </MenuItem>
                ))
              }
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Khởi hành"
              variant="outlined"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue="2024-10-01"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Khứ hồi"
              variant="outlined"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              disabled={tripType !== 'return'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Hạng</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={1}>Thương gia</MenuItem>
                <MenuItem value={2}>Phổ thông</MenuItem>
                <MenuItem value={2}>Đặc biệt</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <TextField
                id="guest-selector"
                label="Khách hàng"
                variant="outlined"
                value={`Người lớn: ${adults}${children !== 0 ? `, Trẻ em: ${children}` : ''}`}
                onClick={handleClick}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
              <Menu
                anchorEl={anchorEl}
                open={open}
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
                    width: '300px',
                  },
                }}
              >
                <Box>
                  <MenuItem
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                      sx={{
                        ".MuiButtonBase-root": {
                          padding: 0,
                        },
                      }}
                    >
                      <Typography>Người lớn</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <IconButton
                          onClick={() => handleDecrease('Người lớn')}
                          disabled={adults <= 1}
                          color={adults > 1 ? 'primary' : 'default'}
                          sx={{
                            border: '1px solid',
                            borderRadius: '50%',
                            padding: '5px',
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography display="inline">{adults}</Typography>
                        <IconButton
                          onClick={() => handleIncrease('Người lớn')}
                          color="primary"
                          sx={{
                            border: '1px solid',
                            borderRadius: '50%',
                            padding: '5px',
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </MenuItem>

                  {/* Trẻ em */}
                  <MenuItem
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                      sx={{
                        ".MuiButtonBase-root": {
                          padding: 0,
                        },
                      }}
                    >
                      <Typography>Trẻ em</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <IconButton
                          onClick={() => handleDecrease('Trẻ em')}
                          disabled={children <= 0}
                          color={children > 0 ? 'primary' : 'default'}
                          sx={{
                            border: '1px solid',
                            borderRadius: '50%',
                            padding: '5px',
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography display="inline">{children}</Typography>
                        <IconButton
                          onClick={() => handleIncrease('Trẻ em')}
                          color="primary" // Luôn luôn có thể tăng
                          sx={{
                            border: '1px solid', // Vòng tròn bao quanh
                            borderRadius: '50%', // Tạo hình tròn
                            padding: '5px',
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </MenuItem>
                </Box>
              </Menu>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControlLabel control={<Radio />} label="Chỉ chọn chuyến bay trực tiếp" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Tìm kiếm chuyến bay
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {/* Flight Results Section */}

      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Lọc
        </Typography>
        <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
          <FormLabel component="legend">Chuyến bay</FormLabel>
          <RadioGroup row value={tripType} onChange={handleTripTypeChange}>
            <FormControlLabel value="return" control={<Radio />} label="Khứ hồi" />
            <FormControlLabel value="one-way" control={<Radio />} label="Một chiều" />
            <FormControlLabel value="multi-city" control={<Radio />} label="Multi-City" />
          </RadioGroup>
        </FormControl>

        <Typography variant="subtitle1">Hãng hàng không</Typography>
        {['Air China', 'Cathay Pacific Airways', 'China Eastern Airlines', 'China Southern Airlines', 'FlexFlight', 'Sichuan Airlines', 'VietJet Aviation'].map((airline) => (
          <FormControlLabel
            control={<Checkbox checked={selectedAirlines.includes(airline)} onChange={handleAirlineChange} value={airline} />}
            label={airline}
            key={airline}
          />
        ))}

        <Typography variant="subtitle1">Giá</Typography>
        <Slider
          value={[minPrice, maxPrice]}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={3064144}
          max={89743682}
          step={100000}
        />

        <Typography variant="subtitle1">Khởi hành</Typography>
        <TextField
          type="time"
          value={departureTime[0]}
          onChange={(e: any) => setDepartureTime([e.target.value, departureTime[1]])}
        />
        <TextField
          type="time"
          value={departureTime[1]}
          onChange={(e: any) => setDepartureTime([departureTime[0], e.target.value])}
        />

        <Typography variant="subtitle1">Tổng thời gian đi</Typography>
        <Slider
          value={flightDuration}
          onChange={(e, newValue: any) => setFlightDuration(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={47}
          step={1}
        />

        <Button variant="contained" color="primary" fullWidth>
          Xong
        </Button>
      </Paper>

      {/* Filter Section */}
      <Typography variant="h6" gutterBottom>
        Lọc: 104 Các chuyến bay
      </Typography>

      <Paper elevation={3} sx={{ padding: '10px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Button variant="outlined" color="primary">Được khuyến cáo</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">Rẻ nhất</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">Ngắn nhất</Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Avatar
              alt="Sichuan Airlines"
              src="https://via.placeholder.com/60"
              sx={{ width: 60, height: 60 }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Sichuan Airlines</Typography>
            <Typography variant="body2">16:35 HAN Hà Nội - 11:10 ZUH Chu Hải (+1)</Typography>
            <Typography variant="body2">1 Thay đổi</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">3.064.144 ₫</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary">Đặt trước</Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={2}>
            <Avatar
              alt="China Southern Airlines"
              src="https://via.placeholder.com/60"
              sx={{ width: 60, height: 60 }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">China Southern Airlines</Typography>
            <Typography variant="body2">08:15 HAN Hà Nội - 19:10 ZUH Chu Hải</Typography>
            <Typography variant="body2">2 Thay đổi</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">30.900.828 ₫</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary">Đặt trước</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box >
  );
};

export default FlightsPage;
