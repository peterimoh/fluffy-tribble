import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { data } from './data';
import { navLinks } from '../../../utility/data';
import './sidebar.css';

const Sidebar = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const LoginAuth = useSelector((state) => state.LoginAuth);
   const { isAuth, response } = LoginAuth;

  const { sidebarState } = sidebar;

  return (
    <aside
      //   id='sidebar'
      className={sidebarState ? 'sidebar' : 'sidebar toggle-sidebar '}
    >
      <ul className='sidebar-nav' id='sidebar-nav'>
        {data.map((x) => {
          const { id, screen, icon, parent, path } = x;
          return (
            <li className='nav-item' key={id}>
              <Link
                className='nav-link '
                to={`${parent}${response.data.user._id}${path}`}
              >
                {icon}
                <span></span>
                <span>{screen}</span>
              </Link>
            </li>
          );
        })}

       
        <li className='nav-heading'>Pages</li>
        {navLinks.map((z) => {
          const { id, path, name } = z;
          return (
            <li className='nav-item' key={id}>
              <Link className='nav-link collapsed' to={path}>
                <i className='bi bi-person'></i>
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
