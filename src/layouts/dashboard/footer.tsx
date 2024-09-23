import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  styled,
} from '@mui/material';
import { FaPlane, FaHotel, FaCar, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';
import { MdExpandMore, MdBeachAccess, MdHiking, MdRestaurant } from 'react-icons/md';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.secondary.light,
  },
}));

const BackToTopButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.grey[700],
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState<boolean | string>(false);

  const handleAccordionChange =
    (panel: string | boolean | ((prevState: string | boolean) => string | boolean)) =>
    (event: unknown, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const travelServices = [
    { name: 'Flights', icon: <FaPlane /> },
    { name: 'Hotels', icon: <FaHotel /> },
    { name: 'Car Rentals', icon: <FaCar /> },
    { name: 'Attractions', icon: <FaMapMarkerAlt /> },
  ];

  const popularDestinations = [
    { name: 'Beach Resorts', icon: <MdBeachAccess /> },
    { name: 'Mountain Retreats', icon: <MdHiking /> },
    { name: 'City Breaks', icon: <FaMapMarkerAlt /> },
    { name: 'Culinary Tours', icon: <MdRestaurant /> },
  ];

  const renderTravelServices = () => {
    if (isMobile) {
      return (
        <Accordion
          expanded={expanded === 'services'}
          onChange={handleAccordionChange('services')}
          sx={{ backgroundColor: 'transparent', color: 'inherit' }}
        >
          <AccordionSummary expandIcon={<MdExpandMore color="white" />}>
            <Typography variant="h6">Travel Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              spacing={2}
            >
              {travelServices.map((service) => (
                <Grid
                  item
                  xs={6}
                  key={service.name}
                >
                  <FooterLink
                    href="#"
                    display="flex"
                    alignItems="center"
                  >
                    {service.icon}
                    <Box ml={1}>{service.name}</Box>
                  </FooterLink>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      );
    }
    return (
      <Box>
        <Typography
          variant="h6"
          gutterBottom
        >
          Travel Services
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {travelServices.map((service) => (
            <Grid
              item
              xs={6}
              key={service.name}
            >
              <FooterLink
                href="#"
                display="flex"
                alignItems="center"
              >
                {service.icon}
                <Box ml={1}>{service.name}</Box>
              </FooterLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  return (
    <FooterWrapper component="footer">
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={4}
          >
            {renderTravelServices()}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Typography
              variant="h6"
              gutterBottom
            >
              Popular Destinations
            </Typography>
            <Grid
              container
              spacing={2}
            >
              {popularDestinations.map((destination) => (
                <Grid
                  item
                  xs={6}
                  key={destination.name}
                >
                  <FooterLink
                    href="#"
                    display="flex"
                    alignItems="center"
                  >
                    {destination.icon}
                    <Box ml={1}>{destination.name}</Box>
                  </FooterLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Typography
              variant="h6"
              gutterBottom
            >
              Travel Resources
            </Typography>
            <FooterLink
              href="#"
              display="block"
              mb={1}
            >
              Travel Guide
            </FooterLink>
            <FooterLink
              href="#"
              display="block"
              mb={1}
            >
              Travel Insurance
            </FooterLink>
            <FooterLink
              href="#"
              display="block"
              mb={1}
            >
              Travel Tips
            </FooterLink>
            <FooterLink
              href="#"
              display="block"
            >
              FAQs
            </FooterLink>
          </Grid>
        </Grid>
        <Box
          mt={6}
          textAlign="center"
        >
          <Typography
            variant="body2"
            color="text.secondary"
          >
            © {new Date().getFullYear()} Your Travel Agency. All rights reserved.
          </Typography>
          <FooterLink
            href="#"
            mr={2}
          >
            Terms of Service
          </FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </Box>
      </Container>
      <BackToTopButton
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaChevronUp />
      </BackToTopButton>
    </FooterWrapper>
  );
};

export default Footer;
