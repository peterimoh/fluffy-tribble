import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './topbar.css'


const Topbar = () => {
  const LoginAuth = useSelector((state) => state.LoginAuth);
  const { isAuth } = LoginAuth;
  return (
    <div id='topbar'>
      <div className='sec-bg3 p-2 pe-3 infonews'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 news'>
              <div className='m-0 h6'>
                <div className='badge bg-purple me-2'>
                  <span className='align-text-top'>news</span>
                </div>
                <small className='text-light'>
                  Welcome to the renewed Worldstream.
                  <Link className='c-yellow' to='/dashboard'>
                    Configure your server now <BiRightArrowAlt className='' />
                  </Link>
                </small>
              </div>
            </div>
            <div className='col-md-6 link'>
              <div className='infonews-nav float-end'>
                <Link to='/support'>Support</Link>
                {isAuth ? (
                  <Link to='/dashboard'>DashBoard</Link>
                ) : (
                  <Link to='/login'>DashBoard</Link>
                )}
                <Link to='tel:#'>+ (440) 7983-573-457</Link>
                <Link to='tel:#'>+ (201) 069-555-516</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
