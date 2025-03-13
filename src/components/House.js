import React from 'react';
import { motion } from 'framer-motion';
// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;

  return (
    <motion.div
  className='bg-white shadow-1 p-8 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer transition-all duration-200 hover:shadow-2xl hover:scale-105 hover:border hover:border-violet-400 hover:ring-2 hover:ring-violet-300 mb-10' // Added mb-10 for more spacing
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
  whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0,0,0,0.3)', transition: { duration: 0.2 } }}
>

  
      <motion.img 
        className='mb-8 rounded-lg' 
        src={image} 
        alt='' 
        whileHover={{ scale: 1.05, rotate: 0 }}
        transition={{ duration: 0.0 }}
      />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <motion.div className='bg-green-500 rounded-full text-white px-3' whileHover={{ scale: 1.15 }}>{type}</motion.div>
        <motion.div className='bg-violet-500 rounded-full text-white px-3' whileHover={{ scale: 1.15 }}>{country}</motion.div>
      </div>
      <motion.div className='text-lg font-semibold max-w-[260px]' whileHover={{ scale: 1.05, color: '#7c3aed' }}>{address}</motion.div>
      <div className='flex gap-x-4 my-4'>
        <motion.div className='flex items-center text-gray-600 gap-1' whileHover={{ scale: 1.1, color: '#7c3aed' }}>
          <div className='text-[20px]'><BiBed /></div>
          <div>{bedrooms}</div>
        </motion.div>
        <motion.div className='flex items-center text-gray-600 gap-1' whileHover={{ scale: 1.1, color: '#7c3aed' }}>
          <div className='text-[20px]'><BiBath /></div>
          <div>{bathrooms}</div>
        </motion.div>
        <motion.div className='flex items-center text-gray-600 gap-1' whileHover={{ scale: 1.1, color: '#7c3aed' }}>
          <div className='text-[20px]'><BiArea /></div>
          <div>{surface}</div>
        </motion.div>
      </div>
      <motion.div className='text-lg font-semibold text-violet-600 mb-4' whileHover={{ scale: 1.0, color: '#4c1d95' }}>{price}</motion.div>
    </motion.div>
  );
};

export default House;
