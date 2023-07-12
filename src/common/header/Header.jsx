import React from 'react';
import Head from './Head';
import Search from './Search';
import Navbar from './Navbar';
import './Header.css'

const Header = () => {
  return (
    <>
    
      <Head/>
      <Navbar/>
      <Search/>
    </>
  );
};

export default Header;