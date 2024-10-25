import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const otherProducts = [
  {
    name: 'Hydra - BCAA Formula',
    description: 'Hydra BCAA is designed to fuel muscle recovery and hydration.',
    image: 'https://via.placeholder.com/150',
    price: '$35.99',
  },
  {
    name: 'Titan - Creatine Monohydrate',
    description: 'Titan helps boost strength and muscle mass with pure creatine.',
    image: 'https://via.placeholder.com/150',
    price: '$29.99',
  },
  {
    name: 'Phoenix - Fat Burner',
    description: 'Phoenix supports fat loss and metabolic boosting for shredding.',
    image: 'https://via.placeholder.com/150',
    price: '$39.99',
  },
];

const OtherProducts = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Explore Other Products
      </Typography>
      <Grid container spacing={4}>
        {otherProducts.map((product, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {product.price}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OtherProducts;
