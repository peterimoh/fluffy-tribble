import React from 'react';

import './counter.css';

const Counter = ({ response }) => {
  return (
    <>
      <div className='col-xxl-4 col-md-6'>
        <div className='card info-card sales-card'>
          <div className='card-body'>
            <h5 className='card-title'>
              Running <span>| Plans</span>
            </h5>

            <div className='d-flex align-items-center'>
              <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                <i className='bi bi-cart'></i>
              </div>
              <div className='ps-3'>
                <h6>{response && response.runningCounter}</h6>

                <span className='text-muted small pt-2 ps-1'>counts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-xxl-4 col-md-6'>
        <div className='card info-card revenue-card'>
          <div className='card-body'>
            <h5 className='card-title'>
              Pending <span>| Plan</span>
            </h5>

            <div className='d-flex align-items-center'>
              <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                <i className='bi bi-currency-dollar'></i>
              </div>
              <div className='ps-3'>
                <h6>{response && response.pendingCounter}</h6>

                <span className='text-muted small pt-2 ps-1'>count</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
