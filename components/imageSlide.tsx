import React,{useState } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlide = () => {
    let settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 50000,
      pauseOnHover: false,
      cssEase: 'linear',
      infinite: true,
      prevArrow: null,
      arrows : false,
    };
    return (
      <div className='bg-black'>
        <Slider {...settings}>
          <div>
            <img src="/assets/images/nfts.png" className='pr-0' alt='' />
          </div>
          <div>
            <img src="/assets/images/nfts.png" className='pr-0' alt='' />
          </div>
        </Slider>
      </div>
    );
}

export default ImageSlide;