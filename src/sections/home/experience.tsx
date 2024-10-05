import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { StyledTitleComponent } from 'src/styles/common';

const ExperienceSection = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={5}>
                <Grid item lg={6}>
                    <Box>
                        <StyledTitleComponent>Experience</StyledTitleComponent>
                        <Typography variant="h3" sx={{ fontSize: '2rem', fontWeight: 500, mt: 2 }}>
                            With our all experience <br /> we will serve you
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#6e7074', mt: 1 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            <br /> Quas aliquam, hic tempora inventore suscipit unde.
                        </Typography>

                        <Box sx={{ mt: 2, display: 'flex', gap: 8 }}>
                            <Box>
                                <Typography variant="h6" sx={{
                                    width: '70px',
                                    height: '70px',
                                    margin: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    borderRadius: '10px 5px 10px 5px', bgcolor: '#ff7e01',
                                }}>12k+</Typography>
                                <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#6e7074', mt: 0.5 }}>Successful trip</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{
                                    width: '70px',
                                    height: '70px',
                                    margin: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    borderRadius: '10px 5px 10px 5px', bgcolor: '#ff7e01',
                                }}>2k+</Typography>
                                <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#6e7074', mt: 0.5 }}>Regular clients</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{
                                    width: '70px',
                                    height: '70px',
                                    margin: 'auto',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    borderRadius: '10px 5px 10px 5px', bgcolor: '#ff7e01',
                                }}>15</Typography>
                                <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#6e7074', mt: 0.5 }}>Year experience</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Box sx={{ mt: 4 }}>
                        <img src="./assets/home/experience/experience.png" alt="Experience" style={{ width: '90%', borderRadius: '10px' }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ExperienceSection;
