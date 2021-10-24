import React from 'react';
import $ from 'jquery';
import { Link} from 'react-router-dom';
import { navLinks } from '../data';
import { useSelector } from 'react-redux';
import '../navbar/navbar.css'

const MobileNav = () => {
  const LoginAuth = useSelector((state) => state.LoginAuth);
  const { isAuth } = LoginAuth;
  $(document).on('click', '#nav-toggle', function () {
    $('.menu-wrap.mobile, .menu-toggle').toggleClass('active');
  });

  return (
    <div className='menu-wrap mobile'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <Link to='/' style={{ color: `#4CAF50` }}>
              <h5 className=' logo-menu'>WorldStream</h5>
            </Link>
          </div>
          <div className='col-6'>
            <nav className='nav-menu'>
              <button id='nav-toggle' className='menu-toggle'>
                <span className='icon'></span>
                <span className='icon'></span>
                <span className='icon'></span>
              </button>
              <div className='main-menu'>
                {navLinks.map((x) => {
                  const { id, path, name, badge } = x;
                  return (
                    <div className='menu-item' key={id}>
                      <Link to={path}>
                        {name}
                        {badge ? (
                          <div className='badge bg-purple'>{badge}</div>
                        ) : null}
                      </Link>
                    </div>
                  );
                })}

                <div className='float-start w-100 mt-3'>
                  <p className='c-grey-light'>
                    <small>
                      <a href='tel:+4407983573457' style={{ color: '#afafaf' }}>
                        Phone: + (440) 7983-573-457
                      </a>
                    </small>
                    <br />
                    <small>
                      {' '}
                      <a href='tel:+201069555516' style={{ color: '#afafaf' }}>
                        Phone: + (201) 069-555-516
                      </a>
                    </small>
                  </p>
                  <p className='c-grey-light'>
                    <small>Email: antler@mail.com</small>{' '}
                  </p>
                </div>
                <div>
                  {isAuth ? (
                    <Link to='/dashboard'>
                      <div className='btn btn-default-yellow-fill mt-3'>
                        CLIENT AREA
                      </div>
                    </Link>
                  ) : (
                    <Link to='/login'>
                      <div className='btn btn-default-yellow-fill mt-3'>
                        CLIENT AREA
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
