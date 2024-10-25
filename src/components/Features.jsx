import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Features = () => {
  const features = [
    { title: 'Explosive Energy', description: 'Feel the rush of energy with every workout.' },
    { title: 'Laser-Like Focus', description: 'Stay focused on your goals and crush every session.' },
    { title: 'Advanced Muscle Pump', description: 'Achieve the ultimate pump and enhance muscle growth.' },
    { title: 'No Crash Formula', description: 'No post-workout crash, just clean energy all day.' },
  ];

  return (
    <Box sx={{ py: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Why Choose Griffin?
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h6">{feature.title}</Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
