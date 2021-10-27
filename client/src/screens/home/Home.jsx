import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/banner/Hero';
import Control from '../../components/filter/Control';
import Filter from '../../components/filter/Filter';
import Plan from '../../components/plan/Plan';
import Footerr from '../../utility/footer/Footerr';
import Navbar from '../../utility/navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Plan />
      <Footerr />
    </>
  );
};

export default Home;
