import React from 'react';
import { Link } from 'react-router-dom';
import { plans } from '../../utility/planData';
import {
  GrDomain,
  BsDisc,
  BsSpeedometer,
  FcDataProtection,
  FaWpbeginner,
  FaBusinessTime,
  FaMailBulk,
  AiFillDatabase,
  FaExpeditedssl,
  BsFillCpuFill,
} from 'react-icons/all';
import './plan.css';

const Plan = () => {
  return (
    <section className='pricing special  sec-up-slider'>
      <div className='container'>
        <div className='randomline'>
          <div className='bigline'></div>
          <div className='smallline'></div>
          <h2>Subscription Plans</h2> <hr />
        </div>
        <div className='row justify-content-end scrollme'>
          {plans.map((x) => {
            const {
              id,
              pkg,
              plan_name,
              Discount,
              Regular_price,
              Sale_price,
              BandWidth,
              Disk,
              TLD,
              My_sql_db,
              Email,
              Free_ssl,
              CPU,
            } = x;

            return (
              <div
                className='col-sm-12 col-md-6 col-lg-4 animateme'
                data-when='enter'
                data-from='0'
                data-to='1'
                data-opacity='1'
                data-translatey='-20'
                key={id}
              >
                <div className='wrapper price-container text-start wow animated fadeInUp fast'>
                  <div className='plans badge feat bg-pink'>{Discount}</div>
                  <div className='top-content'>
                    {id === 1 ? (
                      <FaWpbeginner className='svg mb-3' />
                    ) : id === 2 ? (
                      <FaBusinessTime className='svg mb-3' />
                    ) : (
                      <FcDataProtection className='svg mb-3' />
                    )}

                    <div className='title'>{plan_name}</div>
                    <div className='fromer'>annually get ({Discount})</div>
                    <div className='price-content d-flex'>
                      <div className='price'>
                        <del className='c-grey'>
                          <small>
                            <sup className='coin'>$</sup>{' '}
                            <span className='value'>{Regular_price}</span>
                          </small>
                        </del>
                        <sup className='coin'>$</sup>
                      </div>
                      <div className='price'>
                        <span className='discount'>{Sale_price}</span>
                        <small>/</small>
                        <span className='period annually'>year</span>
                      </div>
                    </div>
                    <Link
                      to={`/plans/${pkg}`}
                      className='btn btn-default-yellow-fill '
                    >
                      Buy now
                    </Link>
                  </div>
                  <ul className='list-info'>
                    <li>
                      <BsDisc className='icon-price' />
                      <span className='c-purple'>DISK</span>
                      <br /> <span>{Disk}</span>
                    </li>
                    <li>
                      <BsSpeedometer className='icon-price' />
                      <span className='c-purple'>DATA</span>
                      <br /> <span>{BandWidth}</span>
                    </li>
                    <li>
                      <FaMailBulk className='icon-price' />
                      <span className='c-purple'>EMAIL</span>
                      <br /> <span>{Email}</span>
                    </li>
                    <li>
                      <GrDomain className='icon-price' />
                      <span className='c-purple'>TLD</span>
                      <br /> <span>{TLD}</span>
                    </li>
                    <li>
                      <AiFillDatabase className='icon-price' />
                      <span className='c-purple'>Database</span>
                      <br /> <span>{My_sql_db}</span>
                    </li>
                    <li>
                      <FaExpeditedssl className='icon-price' />
                      <span className='c-purple'>Free SSL</span>
                      <br /> <span>{Free_ssl}</span>
                    </li>
                    <li>
                      <BsFillCpuFill className='icon-price' />
                      <span className='c-purple'>CPU</span>
                      <br /> <span>{CPU}</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plan;
