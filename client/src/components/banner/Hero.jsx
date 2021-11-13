import React from 'react'
import { BiFilterAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './hero.css'

const Hero = () => {
    return (
      <div
        className='top-header item7 overlay scrollme animateme'
        data-when='span'
        data-from='0'
        data-to='0.75'
        data-opacity='1'
        data-translatey='-50'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-12'>
              <div className='wrapper'>
                <h1 className='heading'>IT Infrastructure as-﻿a-﻿Service</h1>
                <h3 className='subheading'>
                  Worldstream is an Infrastructure-as-a-Service provider. From
                  exact server configurations to IT infrastructures set up
                  entirely according to your wishes. Worldstream's dedicated
                  servers and IT solutions offer everything you need for a
                  future-proof IT infrastructure. Custom-made and at a fixed
                  monthly price. Deploy various cloud, security and backup
                  services that fit your IT strategy. With an average response
                  time of 7 minutes, we are always there for you, 24/7, 365 days
                  a year.
                  <br />
                  {/* <Link to='#features' className='golink gocheck'>
                    {' '}
                    <small>Features</small>{' '}
                  </Link>{' '}
                  <small className='c-white'>&#9679;</small>
                  <Link to='#addons' className='golink gocheck'>
                    {' '}
                    <small>Add-Ons</small>{' '}
                  </Link>{' '}
                  <small className='c-white'>&#9679;</small>
                  <Link to='#highlights' className='golink gocheck'>
                    {' '}
                    <small>Highlights</small>
                  </Link> */}
                </h3>
                {/* <Link to='#' className='btnnn btn-default-pink-fill cd-filter-trigger wow animated shake delay-2s'>
                  <BiFilterAlt/> Show Filter
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero
