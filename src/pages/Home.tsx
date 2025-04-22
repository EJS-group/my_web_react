import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My Website
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
        A simple React + Material UI website with routing and responsive layout.
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Explore Our Features
            </Typography>
            <Typography>
              Learn more about what we offer by visiting the About and Contact pages.
            </Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary" href="/about">
                Learn More
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Home;
