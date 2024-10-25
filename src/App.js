import React, { useState } from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardMedia, Paper, Avatar, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CheckIcon from '@mui/icons-material/Check';
import { CssBaseline } from '@mui/material';
import Features from './components/Features';
import Testimonials from './components/Testimonial';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import ProductDetails from './components/ProductDetails';
import ProductLanding from './components/ProductLanding'
import CarouselComponent from './components/CarouselComponent';
import ProductImage from './components/ProductImage';
const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#ff4d30' },
      background: { default: '#f5f5f5', paper: '#fff' },
      text: { primary: '#000' },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#ff4d30' },
      background: { default: '#121212', paper: '#1e1e1e' },
      text: { primary: '#fff' },
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ textAlign: 'right', my: 2 }}>
          <Typography component="div">
            <Switch checked={darkMode} onChange={handleThemeChange} />
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </Typography>
         
      </Box>

      
        <CarouselComponent />
       

      <Container maxWidth="lg">
        {/* Dark Mode Switch */}
        

  {/* Header Section */}
  <Box sx={{ textAlign: 'center', my: 5 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            GRIFFIN: King of the Beast Pre-Workout
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mt: 2 }}>
            Unleash your inner beast with our powerful pre-workout formula designed to boost energy, endurance, and performance!
          </Typography>
        </Box>

        {/* <ProductImage /> */}
        <ProductLanding />
        <ProductDetails />

       
 
        {/* <Box sx={{ textAlign: 'center', my: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Pricing
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
            Get your hands on the most powerful pre-workout for only $49.99.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ px: 4, py: 1.5 }}>
            Order Now for $49.99
          </Button>
        </Box> */}

        <Features />
        <Testimonials />
        <FAQ />
        
        <CallToAction />

        {/* Footer */}
        <Box sx={{ textAlign: 'center', my: 5, py: 3, backgroundColor: 'primary.main', color: 'white' }}>
          <Typography variant="body2">
            © 2024 Griffin Supplements. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
