import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/system';
import Testimonials from 'src/sections/common/testimonials';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

const StyledContainer = styled(Container)({
  marginTop: '4rem',
  textAlign: 'center',
});

const relatedTeam = () => {
  const { t } = useTranslation();
  const team = [
    {
      name: t(tokens.about.team.members.chung.name),
      image: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/454352570_1021518722683191_3340843354482863502_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHSB6ot_fH5gK_QkfUh-ZAb8_xouXvuYZ3z_Gi5e-5hnV5xHYlhKKXzp1wx4wdi6_IcmEjf-sS1FeFXIk_8nFai&_nc_ohc=wSYIroclYSkQ7kNvgH8vfNg&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=ABVSHx0c4hHUMyyiSLX-plk&oh=00_AYD5YjV0pw-p2NznILZFTjKWtk8-FezwP55Wk4rEoVZskA&oe=672EDCF9',
      description: t(tokens.about.team.members.chung.description),
    },
    {
      name: t(tokens.about.team.members.duy.name),
      image: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/440748415_1893292917776645_5960821697220423027_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFNDSZTYa8Zkq_AeoCmXrgqhU3pNdDST2uFTek10NJPa8kNS_F7rgbOIJntffT_UQ-P-9_gwDuMmE59xz38FN_T&_nc_ohc=yyidaxzaPOkQ7kNvgF7e5Sv&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=ASGJmQseEulTpkC41lo1QBU&oh=00_AYBN4ctVGZFOrRk-PKXf6-AjeBgpJ2MheYfEDmsf_glzUQ&oe=672EB5D0',
      description: t(tokens.about.team.members.duy.description),
    },
    {
      name: t(tokens.about.team.members.chinh.name),
      image: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/460041178_2220076215018005_861567611400213216_n.jpg?stp=dst-jpg_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHHROx3_YSt3Bne-7NieixOveo4kgSK1b-96jiSBIrVvwQD2QTO9JlKAqCMhZ3ByccM0oXEN-ftN2MVDbYIgwYy&_nc_ohc=woAppT2m_6EQ7kNvgGsCS3y&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AFoNKlSexeJtqgXc3LcihPo&oh=00_AYAwfbqsCu4gP9fGlLrJaZHZDBYsHUteAiypoBhnhR4ScQ&oe=672EE0A5',
      description: t(tokens.about.team.members.chinh.description),
    },
    {
      name: t(tokens.about.team.members.cuong.name),
      image: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/173934059_1051788482300727_1300059999021673614_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHw9gMJXDKpURwWr36AyUnQhSCXmRuI17SFIJeZG4jXtBqcp-SbeuTSX3m91W6r_d8huW0UGrnexU_xbA-mbWoQ&_nc_ohc=NdLuBWhdj88Q7kNvgEFxn-y&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ALxS12pwSHQin-8nBZ7ABJw&oh=00_AYDVmP6GUsmfOhP7e32JXQ-2yu1Lnwi6zfW_8q4sG5VLxA&oe=67507BD5',
      description: t(tokens.about.team.members.cuong.description),
    },
    {
      name: t(tokens.about.team.members.duyen.name),
      image: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/461404074_562448949537112_6642337214357582889_n.jpg?stp=dst-jpg_s480x480&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeE9n-K1qOtvNCw8X3mauu0KUZob0hNKM-tRmhvSE0oz6wJAD5L5zRyxbIg4NI7Gaxp-ipdkSMsaukKKv40y_whO&_nc_ohc=YIfK5k4JwkAQ7kNvgGrMl8H&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AoAW94CyTftLKtTaILWvEi7&oh=00_AYAYq-wZk96pQs1gax4Qurt4bcfdLp3doH9Uiut9U8m5dA&oe=672EBF24',
      description: t(tokens.about.team.members.duyen.description),
    },
  ];
  
  return team.map((member, index) => (
    <Card sx={{ boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={index}>
      <CardMedia
        component="img"
        height="200"
        image={member.image}
        alt={member.name}
      />
      <CardContent>
        <Typography variant="h6">{member.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {member.description}
        </Typography>
      </CardContent>
    </Card>
  ));
};

const AboutUs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <StyledContainer maxWidth="xl">
      <Typography variant="h3" gutterBottom>
        {t(tokens.about.title)}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {t(tokens.about.welcome)}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {t(tokens.about.description)}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image="/assets/about/hotels.png"
              alt="Our Hotels"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {t(tokens.about.hotels.title)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t(tokens.about.hotels.description)}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/hotels')}>
                {t(tokens.about.hotels.learnMore)}
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image="/assets/about/tours.png"
              alt="Our Tours"
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {t(tokens.about.tours.title)}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {t(tokens.about.tours.description)}
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/tours')}>
                {t(tokens.about.tours.learnMore)}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, backgroundColor: '#f5f5f5', p: 4, borderRadius: 2 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#003366' }}>
          {t(tokens.about.mission.title)}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#333333', mb: 4 }}>
          {t(tokens.about.mission.description)}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333333', mt: 2 }}>
          {t(tokens.about.mission.details)}
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          {t(tokens.about.team.title)}
        </Typography>
        <Testimonials Html={relatedTeam()} />
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          {t(tokens.about.contact.title)}
        </Typography>
        <Typography variant="body1">
          {t(tokens.about.contact.description)}
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default AboutUs;