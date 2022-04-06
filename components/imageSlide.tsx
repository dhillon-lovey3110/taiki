import {useState } from 'react';
import { motion } from 'framer-motion';

const ImageSlide = () => {
    const marqueeVariants = {
        animate: {
          x: [0, -1290],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 100,
              ease: "linear",
            },
          },
        },
    };

    return <>
        <div className='overflow-hidden'>
          <motion.div variants={marqueeVariants} animate="animate">
            <div className='flex flex-row gap-10'>
                <img src="/assets/images/nfts.png" className='object-contain mx-auto' alt='' />
                <img src="/assets/images/nfts.png" className='object-contain mx-auto' alt='' />
                <img src="/assets/images/nfts.png" className='object-contain mx-auto' alt='' />
                <img src="/assets/images/nfts.png" className='object-contain mx-auto' alt='' />
                <img src="/assets/images/nfts.png" className='object-contain mx-auto' alt='' />
            </div>
          </motion.div>
        </div>
    </>;
}

export default ImageSlide;