import React from 'react'
import Banner from '../../components/Banner'
import Control from '../../components/filter/Control'
import Footerr from '../../utility/footer/Footerr'
import Navbar from '../../utility/navbar/Navbar'

const Dedicated = () => {
    return (
      <React.Fragment>
        <Navbar />
        <Banner />
        <Control />
        <Footerr />
      </React.Fragment>
    );
}

export default Dedicated
