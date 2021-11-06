import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

const Hero = () => {
  return (
    <div className='container top-header'>
      <div className='row d-flex custom-flex'>
        <div className=' col-6'>
          <h1 className='info--header'>Service and support</h1>
        </div>
        <div className=' col-lg-6 '>
          <p className='info--text'>
            Technical issues? E-mail us at support@worldstream.com or call +
            (440) 7983-573-457, + (201) 069-555-516. Worldstream’s Technical
            Support Engineers are known for their fast support response times
            24/7/365. With experienced engineers and an average response time
            track record of 7 minutes, you can expect a solid technical support
            solution in next to no time.
          </p>
          <a className='call-btn'>
            Contact us{' '}
            <span>
              <BiRightArrowAlt />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
