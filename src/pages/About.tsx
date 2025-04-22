import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Box>
        <Typography variant="body1" paragraph>
          We are a team of passionate developers creating beautiful web experiences.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to build responsive, modern websites using the best technologies.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
