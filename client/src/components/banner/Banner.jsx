import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BiFilterAlt } from 'react-icons/bi';


const Banner = () => {
    return (
      <div
        className='top-header item7 overlay scrollme animateme'
        data-when='span'
        data-from='0'
        data-to='0.75'
        data-opacity='1'
        data-translatey='-50'
        style={{
          background: `linear-gradient(270deg,rgb(34 90 37 / 65%), rgb(44 0 116 / 82%)),url('http://inebur.com/antler/template/patterns/cloud3d.svg')`,
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-12'>
              <div className='wrapper'>
                <h1 className='heading'>Dedicated Servers</h1>
                <h3 className='subheading'>
                  Worldstream offers top-brand dedicated servers. Fully
                  customizable. Deployed in company-owned data centers in the
                  Netherlands or at PoP location in Frankfurt. These servers are
                  backed by Worldstream’s 10 Tbit/s global backbone and 24/7/365
                  technical engineering support. Guaranteed speeds and 40 Gbit/s
                  Anti-DDoS as standard.
                  <br />
                </h3>
                <Link className='btnnn btn-default-pink-fill cd-filter-trigger wow animated shake delay-2s'>
                  <BiFilterAlt /> Show Filter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}



export default Banner
