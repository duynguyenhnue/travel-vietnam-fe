import { Typography, Grid, Card, Button, CardContent, CardMedia } from '@mui/material';
import { Stack } from '@mui/system';
import { RoomType } from 'src/types/redux/hotels';

type RoomsBookingProps = {
  rooms: RoomType[] | null;
};

const RoomsBooking = (props: RoomsBookingProps) => {
  const { rooms } = props;

  return (
    <Stack spacing={4}>
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
              key={room._id}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={room.images[0]}
                  alt={`Room ${room.roomNumber}`}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    Room Number: {room.roomNumber} ({room?.roomType})
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Max Occupancy: {room.maxOccupancy}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Amenities: {room.amenities.join(', ')}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    // onClick={() => handleRoomSelect(room)}
                  >
                    Select Room
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {/* <Dialog
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
        </Dialog> */}
    </Stack>
  );
};

export default RoomsBooking;
