import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  BsTwitter,
  AiFillInstagram,
  BsLinkedin,
} from 'react-icons/all';
import { footer } from './data';
import './footer.css';

const Footerr = () => {
  return (
    <footer className='footer'>
      <img className='logo-bg logo-footer' src='img/symbol.svg' alt='logo' />
      <div className='container'>
        <div className='footer-top'>
          <div className='row'>
            <div className='col-sm-6 col-md-3'>
              <div className='heading'>Hosting</div>
              <ul className='footer-menu'>
                {footer.map((x) => {
                  const { id, path, name } = x;
                  return (
                    <li className='menu-item' key={id}>
                      <Link to={path}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='col-sm-6 col-md-3'>
              <div className='heading'>Support</div>
              <ul className='footer-menu'>
                <li className='menu-item'>
                  <Link to='/'>WorldStream</Link>
                </li>{' '}
                <li className='menu-item'>
                  <Link to='/support'>Support</Link>
                </li>
              </ul>
            </div>
            <div className='col-sm-6 col-md-3'>
              <div className='heading'>Company</div>
              <ul className='footer-menu'>
                <li className='menu-item'>
                  <a href='about'>About Us</a>{' '}
                </li>
                <li className='menu-item'>
                  <a href='elements'>Features</a>
                </li>
                <li className='menu-item'>
                  <a href='blog-details'>Blog</a>
                </li>
                <li className='menu-item'>
                  <a href='legal'>Legal</a>
                </li>
              </ul>
            </div>
            <div className='col-sm-6 col-md-3'>
              <a>
                {/* <img
                  className='svg logo-footer'
                  src='img/logo.svg'
                  alt='logo'
                /> */}
              </a>
              <div className='copyrigh'>
                ©{new Date().getFullYear()} WorldStream - All rights reserved
              </div>
              <div className='soc-icons'>
                <Link to=''>
                  <FaFacebookF className='' />
                </Link>
                <Link to=''>
                  <BsTwitter className='' />
                </Link>
                <Link to=''>
                  <AiFillInstagram className='' />
                </Link>
                <Link to=''>
                  <BsLinkedin className='' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='subcribe news'>
        <div className='container'>
          <div className='row'>
            <form action='#' className='w-100'>
              <div className='col-md-6 offset-md-3'>
                <div className='general-input'>
                  <input
                    className='fill-input'
                    type='email'
                    name='email'
                    data-i18n='[placeholder]header.login'
                  />
                  <input
                    type='submit'
                    value='SUBSCRIBE'
                    className='btn btn-default-yellow-fill'
                  />
                </div>
              </div>
              <div className='col-md-6 offset-md-3 text-center pt-4'>
                <p style={{ color: '#aaaaaa' }}>
                  Subscribe to our newsletter to receive news and updates
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <ul className='footer-menu'>
                <li id='drop-lng' className='btn-group btn-group-toggle'>
                  <label
                    data-lng='en-US'
                    for='option1'
                    className='btn btn-secondary'
                  >
                    <input type='radio' name='options' id='option1' /> EN
                  </label>
                  <label
                    data-lng='pt-PT'
                    for='option2'
                    className='btn btn-secondary'
                  >
                    <input type='radio' name='options' id='option2' /> PT
                  </label>
                </li>
                <li className='menu-item by'>
                  Hybrid Design With <span className='c-pink'>♥</span> by
                  <a href='http://inebur.com/' target='_blank'>
                    Inebur
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-6'>
              <ul className='payment-list'>
                <li>
                  <p>Payments We Accept</p>
                </li>
                <li>
                  <i className='fab fa-cc-paypal'></i>
                </li>
                <li>
                  <i className='fab fa-cc-visa'></i>
                </li>
                <li>
                  <i className='fab fa-cc-mastercard'></i>
                </li>
                <li>
                  <i className='fab fa-cc-apple-pay'></i>
                </li>
                <li>
                  <i className='fab fa-cc-discover'></i>
                </li>
                <li>
                  <i className='fab fa-cc-amazon-pay'></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerr;
