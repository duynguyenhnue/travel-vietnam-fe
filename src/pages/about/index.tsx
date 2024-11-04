import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/system';
import Testimonials from 'src/sections/common/testimonials';
import { useNavigate } from 'react-router';

const StyledContainer = styled(Container)({
  marginTop: '4rem',
  textAlign: 'center',
});

const relatedTeam = () => {
  const team = [
    {
      name: 'Nguyen Quoc Chung',
      image: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/454352570_1021518722683191_3340843354482863502_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHSB6ot_fH5gK_QkfUh-ZAb8_xouXvuYZ3z_Gi5e-5hnV5xHYlhKKXzp1wx4wdi6_IcmEjf-sS1FeFXIk_8nFai&_nc_ohc=wSYIroclYSkQ7kNvgH8vfNg&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=ABVSHx0c4hHUMyyiSLX-plk&oh=00_AYD5YjV0pw-p2NznILZFTjKWtk8-FezwP55Wk4rEoVZskA&oe=672EDCF9',
      description: 'A creative Front-end Developer with a keen eye for design. Chung combines technical expertise with aesthetic sensibility to build engaging user experiences.'
    },
    {
      name: 'Nguyen Van Duy',
      image: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/440748415_1893292917776645_5960821697220423027_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFNDSZTYa8Zkq_AeoCmXrgqhU3pNdDST2uFTek10NJPa8kNS_F7rgbOIJntffT_UQ-P-9_gwDuMmE59xz38FN_T&_nc_ohc=yyidaxzaPOkQ7kNvgF7e5Sv&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=ASGJmQseEulTpkC41lo1QBU&oh=00_AYBN4ctVGZFOrRk-PKXf6-AjeBgpJ2MheYfEDmsf_glzUQ&oe=672EB5D0',
      description: 'A versatile developer skilled in both front-end and back-end technologies. Duy brings a balanced approach to development, ensuring seamless integration between user interface and server logic.'
    },
    {
      name: 'Pham Thi Chinh',
      image: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/460041178_2220076215018005_861567611400213216_n.jpg?stp=dst-jpg_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHHROx3_YSt3Bne-7NieixOveo4kgSK1b-96jiSBIrVvwQD2QTO9JlKAqCMhZ3ByccM0oXEN-ftN2MVDbYIgwYy&_nc_ohc=woAppT2m_6EQ7kNvgGsCS3y&_nc_zt=24&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AFoNKlSexeJtqgXc3LcihPo&oh=00_AYAwfbqsCu4gP9fGlLrJaZHZDBYsHUteAiypoBhnhR4ScQ&oe=672EE0A5',
      description: 'A dedicated Business Analyst with an eye for details and user needs. Chinh translates complex requirements into actionable insights, guiding the project towards user-centered solutions.'
    },
    {
      name: 'Dang Quoc Cuong',
      image: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/173934059_1051788482300727_1300059999021673614_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeHw9gMJXDKpURwWr36AyUnQhSCXmRuI17SFIJeZG4jXtBqcp-SbeuTSX3m91W6r_d8huW0UGrnexU_xbA-mbWoQ&_nc_ohc=NdLuBWhdj88Q7kNvgEFxn-y&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=ALxS12pwSHQin-8nBZ7ABJw&oh=00_AYDVmP6GUsmfOhP7e32JXQ-2yu1Lnwi6zfW_8q4sG5VLxA&oe=67507BD5',
      description: 'An experienced Business Manager with a strategic mindset. Cuong leads the team with vision and precision, focusing on sustainable growth and operational efficiency.'
    },
    {
      name: 'Duong Thi Anh Duyen',
      image: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/461404074_562448949537112_6642337214357582889_n.jpg?stp=dst-jpg_s480x480&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeE9n-K1qOtvNCw8X3mauu0KUZob0hNKM-tRmhvSE0oz6wJAD5L5zRyxbIg4NI7Gaxp-ipdkSMsaukKKv40y_whO&_nc_ohc=YIfK5k4JwkAQ7kNvgGrMl8H&_nc_zt=24&_nc_ht=scontent.fhan2-3.fna&_nc_gid=AoAW94CyTftLKtTaILWvEi7&oh=00_AYAYq-wZk96pQs1gax4Qurt4bcfdLp3doH9Uiut9U8m5dA&oe=672EBF24',
      description: 'A meticulous Tester dedicated to quality assurance. Duyen ensures that every product release meets the highest standards, finding and resolving issues before they reach the user.'
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
  return (
    <StyledContainer maxWidth="xl">
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Welcome to our travel website! We are dedicated to crafting unforgettable travel experiences by offering exceptional hotel accommodations and thrilling tours tailored to your unique desires. Whether you're seeking a peaceful getaway, an adventurous expedition, or an immersive cultural journey, we’re here to make every moment of your trip extraordinary.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Our team of travel experts brings extensive knowledge and passion for exploring the world’s most remarkable destinations. We partner with trusted providers to offer you high-quality services, personalized itineraries, and support throughout your journey. Let us be your guide as you discover new horizons and create memories that last a lifetime.
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
                Our Hotels
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Discover a wide range of hotels that cater to all your needs, from luxury resorts to budget-friendly accommodations.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/hotels')}>
                Learn More
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
                Our Tours
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Explore exciting tours that take you to the most beautiful and adventurous places around the world.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/tours')}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, backgroundColor: '#f5f5f5', p: 4, borderRadius: 2 }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#003366' }}>
          Explore the World with Us
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#333333', mb: 4 }}>
          We believe that every journey is an opportunity to explore and broaden new horizons. With a team of travel experts, we are committed to providing unique travel experiences that exceed expectations, from relaxing tours to challenging adventures.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#003366', mt: 4 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333333' }}>
          Our mission is to create unforgettable memories for our customers by providing dedicated service and personalized itineraries tailored to individual preferences and styles. With a wide network of partners and extensive knowledge of destinations, we are ready to take you anywhere you want.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#333333', mt: 2 }}>
          Whether it's an adventurous exploration, a relaxing vacation, or a cultural experience, we are always by your side, ensuring that every detail is meticulously taken care of, so you can focus on enjoying your dream trip.
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Meet Our Team
        </Typography>
        <Testimonials Html={relatedTeam()} />
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Have questions? Feel free to reach out to us at stu715105031@hnue.edu.vn | (+84) 708-200-334 or stu715105064@hnue.edu.vn | (+84) 869-133-621.
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default AboutUs;