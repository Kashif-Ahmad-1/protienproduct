import React from 'react';
import { Box, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';

// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';
import layout from './../images/layout.jpeg'

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    layout,
    "https://img5.hkrtcdn.com/26492/bnr_2649134_o.png",
    "https://img7.hkrtcdn.com/22852/bnr_2285166_o.jpg",
    // "https://img9.hkrtcdn.com/26554/bnr_2655378_o.jpg",
    // "https://img9.hkrtcdn.com/25888/bnr_2588778_o.jpg",
    // "https://img5.hkrtcdn.com/26479/bnr_2647814_o.jpg",
    // "https://img1.hkrtcdn.com/26096/bnr_2609550_o.jpg"

  ];

  return (
    <Box 
      position={'relative'}
      height={'500px'}
      width="98vw"
      margin={"auto"}
      textAlign={"center"}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="gray"
        bg={'white'}
        Radius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        {/* <BiLeftArrowAlt /> */}
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="gray"
        bg={'white'}
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      <Text p={2}>India's Largest D2C Nutrition Platform</Text>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box width={"sm"}  
            key={index}
            height={'sm'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}