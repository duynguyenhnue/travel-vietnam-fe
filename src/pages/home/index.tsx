import React, { useState } from 'react';
import { Typography, Tabs, Tab, Container } from '@mui/material';
import { styled } from '@mui/system';
import { FaHotel, FaPlane, FaShuttleVan } from 'react-icons/fa';
import { HotelBooking } from 'src/sections/dashboard/user/home/hotel-booking';
import { AirlineBooking } from 'src/sections/dashboard/user/home/flights-booking';
import { ShuttleBooking } from 'src/sections/dashboard/user/home/shuttle-booking';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

const TravelHomePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container
      component="div"
      maxWidth="xl"
    >
      <Typography
        variant="h4"
        gutterBottom
      >
        Travel Booking
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{ mb: 4 }}
      >
        <StyledTab
          icon={<FaHotel />}
          label={t(tokens.common.hotels)}
        />
        <StyledTab
          icon={<FaPlane />}
          label={t(tokens.common.flights)}
        />
        <StyledTab
          icon={<FaShuttleVan />}
          label={t(tokens.common.airportTransfer)}
        />
      </Tabs>
      {activeTab === 0 && <HotelBooking />}
      {activeTab === 1 && <AirlineBooking />}
      {activeTab === 2 && <ShuttleBooking />}
    </Container>
  );
};

export default TravelHomePage;
