import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import Hero from '../../components/banner/Hero';
import Control from '../../components/filter/Control';
import Filter from '../../components/filter/Filter';
import Footerr from '../../utility/footer/Footerr';
import Navbar from '../../utility/navbar/Navbar';

const Home = () => {
  return (
      <>
        <Navbar/>
      <Hero />
      {/* <Control /> */}
      {/* <Filter /> */}
      <Footerr />
    </>
  );
};

export default Home;
