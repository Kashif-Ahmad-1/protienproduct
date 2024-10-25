import React from 'react'
import { Container, Box, Typography, Button, Grid, Card, CardMedia, Paper, Avatar, Switch } from '@mui/material';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
function ProductDetails() {
  return (
   <>
   <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Flame Punch Flavor
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Our unique formula delivers extreme energy, focus, and stamina for your toughest workouts.
          </Typography>

          <Grid container spacing={2} sx={{ mt: 3, justifyContent: 'center' }}>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <FitnessCenterIcon fontSize="large" sx={{ color: 'primary.main' }} />
                <Typography variant="body1" sx={{ mt: 1 }}>Boosts energy levels</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <FitnessCenterIcon fontSize="large" sx={{ color: 'primary.main' }} />
                <Typography variant="body1" sx={{ mt: 1 }}>Enhances muscle endurance</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <FitnessCenterIcon fontSize="large" sx={{ color: 'primary.main' }} />
                <Typography variant="body1" sx={{ mt: 1 }}>Promotes fat burning</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                <FitnessCenterIcon fontSize="large" sx={{ color: 'primary.main' }} />
                <Typography variant="body1" sx={{ mt: 1 }}>Improves focus and mental clarity</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" sx={{ mt: 5, px: 5, py: 1.5 }}>
            Buy Now
          </Button>
        </Box>
   </>
  )
}

export default ProductDetails