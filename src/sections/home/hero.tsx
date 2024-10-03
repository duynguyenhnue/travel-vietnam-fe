import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import SearchBar from './searchBar';

// Styled components for custom styles
const HeroSubtitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const HeroImgBox = styled(Box)({
  paddingTop: '2rem',
  img: {
    width: '100%',
    height: '350px',
    borderRadius: '20px',
    border: '1px solid #faa935',
    objectFit: 'cover',
  },
  video: {
    width: '100%',
    height: '350px',
    borderRadius: '20px',
    border: '1px solid #faa935',
    objectFit: 'cover',
  },
});

const Highlight = styled('span')({
  color: '#faa935',
});

const HeroContent = styled(Box)({
  paddingTop: '3.5rem',
  h1: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginTop: '1rem',
    marginBottom: '2rem',
  },
  p: {
    fontSize: '1rem',
    color: '#6e7074',
    lineHeight: '1.4rem',
  },
});

const HeroSection = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <HeroContent>
            <HeroSubtitle>
              <Typography variant="subtitle1" sx={{
                background: '#faa935',
                fontFamily: `"Island Moments", cursive`,
                width: 'max-content',
                padding: '0px 0.5rem',
                paddingRight: '1rem',
                borderRadius: '50px',
                fontWeight: '500',
                color: '#0b2727',
                fontSize: '1.3rem'
              }}>Know Before You Go</Typography>
              <img src="assets/home/hero/world.png" alt="World" style={{ width: '2.3rem', height: '2.3rem' }} />
            </HeroSubtitle>
            <Typography variant="h1">
              Traveling opens the door to creating <Highlight>memories</Highlight>
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
              Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.
            </Typography>
          </HeroContent>
        </Grid>

        <Grid item lg={2}>
          <HeroImgBox>
            <img src="assets/home/hero/hero-img01.jpg" alt="Hero" />
          </HeroImgBox>
        </Grid>

        <Grid item lg={2} sx={{marginTop: 2.5}}>
          <HeroImgBox className="hero__video-box mt-4">
            <video src="assets/home/hero/hero-video.mp4" controls />
          </HeroImgBox>
        </Grid>

        <Grid item lg={2} sx={{marginTop: 5}}>
          <HeroImgBox className="mt-5">
            <img src="assets/home/hero/hero-img02.jpg" alt="Hero 2" />
          </HeroImgBox>
        </Grid>
      </Grid>
      <SearchBar />

    </Container>
  );
};

export default HeroSection;