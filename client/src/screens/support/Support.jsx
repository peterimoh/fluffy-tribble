import React from 'react';
import Features from '../../components/support/Features';

import Hero from '../../components/support/Hero';
import Footerr from '../../utility/footer/Footerr';
import Navbar from '../../utility/navbar/Navbar';
import './support.css';

const Support = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div id='support'>
        <Hero />
        <Features />
      </div>

      <Footerr />
    </React.Fragment>
  );
};

export default Support;
