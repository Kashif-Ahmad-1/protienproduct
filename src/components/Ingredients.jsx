import React from 'react'
import { Container, Box, Typography, Button, Grid, Card, CardMedia, Paper, Avatar, Switch } from '@mui/material';
function Ingredients() {
  return (
   <>
    <Box sx={{ my: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
            Key Ingredients
          </Typography>
          <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} md={3}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Beta-Alanine
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Enhances muscular endurance and delays fatigue.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Caffeine Anhydrous
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Boosts energy, mental focus, and alertness.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  L-Citrulline
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Supports blood flow and increases muscle pumps.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
   </>
  )
}

export default Ingredients