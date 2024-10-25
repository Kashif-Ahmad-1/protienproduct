import React from 'react'
import { Container, Box, Typography, Button, Grid, Card, CardMedia, Paper, Avatar, Switch } from '@mui/material';
function Testimonial() {
  return (
    <>
    <Box sx={{ my: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
            What Our Customers Say
          </Typography>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Avatar src="https://dummyimage.com/100x100/000/fff" alt="Customer 1" sx={{ width: 100, height: 100, mx: 'auto' }} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  "This pre-workout is a game changer! My workouts have never been more intense."
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                  - John D.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Avatar src="https://dummyimage.com/100x100/000/fff" alt="Customer 2" sx={{ width: 100, height: 100, mx: 'auto' }} />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  "Love the energy boost and flavor! Definitely my go-to supplement."
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                  - Sarah K.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
    </>
  )
}

export default Testimonial