
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header className='py-3 mb-20 border-b bg-gradient-to-r from-yellow-500 to-yellow-700 text-white top-0 z-50 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to='/'>
        <img
              src={logo} alt="Logo" className="w-52 h-auto transition-transform duration-300 hover:scale-110"
/>


        </Link>

        {/* Buttons */}
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/login'>
            Log in
          </Link>

          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/signup'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

