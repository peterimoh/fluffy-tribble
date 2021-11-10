import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './counter.css';

const Counter = ({response}) => {

  return (
    <>
      <div class='col-xxl-4 col-md-6'>
        <div class='card info-card sales-card'>
          <div class='card-body'>
            <h5 class='card-title'>
              Running <span>| Plans</span>
            </h5>

            <div class='d-flex align-items-center'>
              <div class='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                <i class='bi bi-cart'></i>
              </div>
              <div class='ps-3'>
                              <h6>{ response && response.runningCounter}</h6>
                {/* <span class='text-success small pt-1 fw-bold'>12%</span>{' '} */}
                <span class='text-muted small pt-2 ps-1'>counts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class='col-xxl-4 col-md-6'>
        <div class='card info-card revenue-card'>
          <div class='card-body'>
            <h5 class='card-title'>
              Pending <span>| Plan</span>
            </h5>

            <div class='d-flex align-items-center'>
              <div class='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                <i class='bi bi-currency-dollar'></i>
              </div>
              <div class='ps-3'>
                              <h6>{ response && response.pendingCounter}</h6>
                {/* <span class='text-success small pt-1 fw-bold'>8%</span>{' '} */}
                <span class='text-muted small pt-2 ps-1'>count</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
