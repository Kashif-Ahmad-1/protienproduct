import React from 'react'
import { Container, Box, Typography, Button, Grid, Card, CardMedia, Paper, Avatar, Switch } from '@mui/material';
import logo from './GriffinImage.jpeg'
function ProductImage() {
  return (
    <>

      {/* Product Image Section */}
      <Grid container spacing={4} sx={{ justifyContent: 'center', my: 5 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                alt="Griffin Protein Product"
                height="500"
                image={logo} // Replace with actual product image
                title="Griffin Protein Product"
              />
            </Card>
          </Grid>
        </Grid>
        

    </>
  )
}

export default ProductImage