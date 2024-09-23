import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

export const Booking: React.FC = () => {
  const [destination, setDestination] = useState('');

  const handleDestinationChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setDestination(event.target.value);
  };

  return (
    <Box sx={{ py: 5, backgroundColor: 'primary.main', borderRadius: 2 }}>
      <Box sx={{ px: 2 }}>
        <Grid
          container
          spacing={5}
          alignItems="center"
        >
          {/* Left Section */}
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{ color: 'white', textTransform: 'uppercase' }}
            >
              Booking
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{ color: 'white', mb: 4 }}
            >
              Online Booking
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'white', mb: 4 }}
            >
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
              eos. Clita erat ipsum et lorem et sit.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'white', mb: 4 }}
            >
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
              eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
              erat amet.
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ py: 1.5, px: 5 }}
            >
              Read More
            </Button>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{ color: 'white', mb: 4 }}
            >
              Book A Tour
            </Typography>
            <form>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <TextField
                    fullWidth
                    id="name"
                    label="Your Name"
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ backgroundColor: 'transparent', color: 'white' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <TextField
                    fullWidth
                    id="email"
                    label="Your Email"
                    type="email"
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ backgroundColor: 'transparent', color: 'white' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <TextField
                    fullWidth
                    id="datetime"
                    label="Date & Time"
                    type="datetime-local"
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ backgroundColor: 'transparent', color: 'white' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                  <FormControl
                    fullWidth
                    variant="filled"
                  >
                    <InputLabel
                      shrink
                      id="destination-label"
                    >
                      Destination
                    </InputLabel>
                    <Select
                      id="destination"
                      value={destination}
                      onChange={handleDestinationChange}
                      displayEmpty
                      sx={{ backgroundColor: 'transparent', color: 'white' }}
                    >
                      <MenuItem value="1">Destination 1</MenuItem>
                      <MenuItem value="2">Destination 2</MenuItem>
                      <MenuItem value="3">Destination 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <TextField
                    fullWidth
                    id="message"
                    label="Special Request"
                    multiline
                    rows={4}
                    variant="filled"
                    InputProps={{ disableUnderline: true }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ backgroundColor: 'transparent', color: 'white' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
