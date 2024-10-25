import React from 'react';
import Slider from "react-slick";
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import layout from './../images/layout.jpeg'
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  const images = [
    `${layout}`,
  //   `${layout}`,
  //  `${layout}`,
   "https://img5.hkrtcdn.com/26492/bnr_2649134_o.png",
    "https://img7.hkrtcdn.com/22852/bnr_2285166_o.jpg",
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} component="img" src={src} alt={`carousel image ${index}`} sx={{ width: '100%', borderRadius: 2 ,height: '380px'}} />
        ))}
      </Slider>
    </Box>
  );
}

export default CarouselComponent;
