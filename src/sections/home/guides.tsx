import React from 'react';
import { Grid, Box, Typography, IconButton, Avatar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

interface GuideProps {
  name: string;
  designation: string;
  image: string;
}

const guides = [
  { name: 'John Doe', designation: 'Tour Guide', image: '/assets/hcm.jpeg' },
  { name: 'Jane Smith', designation: 'Adventure Specialist', image: '/assets/hcm.jpeg' },
  { name: 'Alice Johnson', designation: 'Cultural Guide', image: '/assets/hcm.jpeg' },
  { name: 'Michael Brown', designation: 'Wildlife Expert', image: '/assets/hcm.jpeg' },
];

const GuideCard: React.FC<GuideProps> = ({ name, designation, image }) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={3}
  >
    <Box sx={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: 3 }}>
      <Avatar
        alt={name}
        src={image}
        variant="square"
        sx={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: -2 }}>
        <IconButton
          color="primary"
          href="#"
          size="small"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="primary"
          href="#"
          size="small"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="primary"
          href="#"
          size="small"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Typography
          variant="h6"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {designation}
        </Typography>
      </Box>
    </Box>
  </Grid>
);

export const MeetOurGuides: React.FC = () => (
  <Box sx={{ py: 5, backgroundColor: (theme) => theme.palette.background.paper }}>
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Typography
        variant="h6"
        component="div"
        color="primary"
        sx={{ mb: 1, display: 'inline-block', backgroundColor: '#fff', px: 3 }}
      >
        Travel Guide
      </Typography>
      <Typography
        variant="h4"
        component="div"
      >
        Meet Our Guide
      </Typography>
    </Box>
    <Grid
      container
      spacing={4}
    >
      {guides.map((guide, index) => (
        <GuideCard
          key={index}
          name={guide.name}
          designation={guide.designation}
          image={guide.image}
        />
      ))}
    </Grid>
  </Box>
);
