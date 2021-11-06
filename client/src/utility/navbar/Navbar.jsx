import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import Topbar from '../topbar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileNav from './MobileNav';
import { useSelector } from 'react-redux';
import './navbar.css';

const Navbar = () => {
  const LoginAuth = useSelector((state) => state.LoginAuth);
  const cart = useSelector((state) => state.cart);
  const { isAuth } = LoginAuth;
  const {cartItem} = cart
  const [classs, setClasss] = useState(false);

  return (
    <header id='header'>
      <Topbar />
      {/* <!-- ***** NAV MENU DESKTOP ****** --> */}
      <div className={classs ? 'menu-wrap fixed sticky' : 'menu-wrap'}>
        <div className='nav-menu'>
          <div className='container'>
            <div className='row'>
              <div className='col-2 col-md-2'>
                <Link to='/' style={{ color: `#4CAF50` }}>
                  <h5 className=' logo-menu'>WorldStream</h5>
                </Link>
              </div>
              <nav id='menu' className='col-lg-10 ml-auto'>
                {/* //col-10 */}
                <div className='navigation float-end'>
                  <button className='menu-toggle'>
                    <span className='icon'></span>
                    <span className='icon'></span>
                    <span className='icon'></span>
                  </button>
                  <ul className='main-menu nav navbar-nav navbar-right'>
                    <li className='menu-item menu-item-has-children me-2'>
                      <Link
                        className='m-0 pe-1 v-stroke'
                        to='/dedicated-servers'
                        data-i18n='[html]header.home'
                      >
                        Dedicated Servers{' '}
                      </Link>
                      <div className='badge bg-pink me-4 wow animated shake delay-1s visible'>
                        NEW
                      </div>
                    </li>
                    <li className='menu-item menu-item-has-children me-2'>
                      <Link
                        className='m-0 pe-1 v-stroke'
                        to='/cloud'
                        data-i18n='[html]header.services'
                      >
                        Private Cloud{' '}
                      </Link>
                      <div className='badge bg-pink me-4'>NEW</div>
                    </li>
                    <li className='menu-item menu-item-has-children'>
                      <Link
                        className='v-stroke'
                        to='/reseller'
                        data-i18n='[html]header.pages'
                      >
                        Reseller{' '}
                      </Link>
                    </li>
                    <li className='menu-item'>
                      {/* menu-item-has-children */}
                      <Link
                        className='v-stroke'
                        to='/support'
                        data-i18n='[html]header.features'
                      >
                        Support
                      </Link>
                    </li>
                    <li className='menu-item  mb-3'>
                      {isAuth ? (
                        <Link className='pe-0 me-0 ' to='/dashboard'>
                          <div className='btn btn-default-yellow-fill question mb-3'>
                            <span data-i18n='[html]header.login'>
                              Client Area
                            </span>{' '}
                            <FaLock />
                          </div>
                        </Link>
                      ) : (
                        <Link className='pe-0 me-0' to='/login'>
                          <div className='btn btn-default-yellow-fill question'>
                            <span data-i18n='[html]header.login'>
                              Client Area
                            </span>{' '}
                            <FaLock />
                          </div>
                        </Link>
                      )}
                      <Link className='pe-0 me-0 m-4' to='/cart'>
                        Cart <span className='badge bg-pink'>{cartItem.length }</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </header>
  );
};

export default Navbar;
