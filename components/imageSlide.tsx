import React,{useState } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

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
      <>
        <Slider {...settings}>
          <div>
            <Image src="/assets/images/nfts.png" height={697} width={1780} className='pr-0' alt='' />
          </div>
          <div>
            <Image src="/assets/images/nfts.png" height={697} width={1780} className='pr-0' alt='' />
          </div>
        </Slider>
      </>
    );
}

export default ImageSlide;