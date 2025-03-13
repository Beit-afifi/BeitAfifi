import React from 'react';
import { motion } from 'framer-motion';
// Import image
import bannerImg from '../assets/img/house-banner.png';

// Import components
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-40'>
      <motion.div 
        className='flex flex-col lg:flex-row'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent</span> Your Dream House With Us.
          </h1>
          <p className='max-w-[480px] mb-8'>
          If you’re looking for a new home, an investment property or to explore the area we’ll help you find exactly what you’re looking for.
          </p>
        </motion.div>
        {/* Image */}
        <motion.div 
          className='hidden flex-1 lg:flex justify-end items-end'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={bannerImg} alt='House banner' />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Search />
      </motion.div>
    </section>
  );
};

export default Banner;
