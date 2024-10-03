import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Col } from 'reactstrap'
import ServiceCard from './serviceCard'

const ServicesSection = () => {
    const servicesData = [
        {
            imgUrl: "./assets/home/service/weather.png",
            title: `Calculate Weather`,
            desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        },
        {
            imgUrl: './assets/home/service/guide.png',
            title: `Best Tour Guide`,
            desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        },
        {
            imgUrl: './assets/home/service/customization.png',
            title: 'Customization',
            desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        },
    ]
    return (
        <section>
            <Container maxWidth='xl'>
                <Grid container spacing={4}>
                    <Grid item lg={3}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: '2rem',
                                fontWeight: 500,
                                color: '#ee6e6e',
                                fontFamily: '"Island Moments", cursive'
                            }}
                        >
                            What we serve
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: '2rem',
                                fontWeight: 500
                            }}
                        >
                            We offer our best services
                        </Typography>
                    </Grid>
                    <Grid item lg={9}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3
                            }}
                        >
                            {
                                servicesData.map((item, index) => (
                                    <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
                                        <ServiceCard item={item} />
                                    </Col>))
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default ServicesSection