import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (<>
    <header id='navbar'>
      <div className='logo'>
        <Link to='/'>Logo</Link>
      </div>
      <div className='nav__menu'>
        <ul className='nav__links'>
          {/* <div class='dropdown'>
            <li clasName='dropbtn'><Link to='/dedicated'>Dedicated &#9660;</Link></li>
            <div className='dropdown-content'>
              <Link to='/'>Cloud</Link>
              <Link to='/'>Support</Link>
             
            </div>
          </div> */}
          <li>
            <Link>Dedicated</Link>
          </li>
          <li>
            <Link>Cloud</Link>
          </li>
          <li>
            <Link>Client Area</Link>
          </li>
          <li>
            <Link>Support</Link>
          </li>
        </ul>
      </div>
          <div className='nav__btn'>
              <Link className='btn'>Reseller</Link>
              <Link className='btn'>Cart</Link>
              <Link to='/login' className='btn'>Login</Link>
        <Link to='/signup' className='btn btn__green'>Sign Up</Link>
          </div>
          
      </header>
      <hr />
 </> );
};

export default Nav;
