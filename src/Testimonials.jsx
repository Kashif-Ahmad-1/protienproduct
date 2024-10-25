import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Griffin has completely changed my workout game. The energy boost is unreal!',
      occupation: 'Fitness Trainer',
    },
    {
      name: 'Sarah Miller',
      feedback: 'I feel stronger and more focused during every session. Highly recommend!',
      occupation: 'Athlete',
    },
    {
      name: 'Mike Johnson',
      feedback: 'The muscle pump and energy are amazing! Best pre-workout I have ever used.',
      occupation: 'Bodybuilder',
    },
  ];

  return (
    <Box sx={{ py: 5, bgcolor: 'secondary.main', color: 'white', textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, color: 'black' }}>
                <Typography variant="body1">{`"${testimonial.feedback}"`}</Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                  - {testimonial.name}, {testimonial.occupation}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
