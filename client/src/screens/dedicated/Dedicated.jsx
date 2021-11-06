import React from 'react';
import Banner from '../../components/banner/Banner';
import Control from '../../components/filter/Control';
import { Product } from '../../components/product/Product';
import Footerr from '../../utility/footer/Footerr';
import Navbar from '../../utility/navbar/Navbar';

const Dedicated = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      {/* <Control /> */}
      <Product/>
      <Footerr />
    </React.Fragment>
  );
};

export default Dedicated;
