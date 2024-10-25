import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const CallToAction = () => {
  return (
    <Box sx={{ py: 5, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Ready to Unleash Your Inner Beast?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Get your Griffin Pre-Workout supplement today and dominate your workouts!
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Buy Now
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
