import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/dashboard/nav/Nav';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import Counter from '../../components/dashboard/counter/Counter';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Nav />
      <Sidebar />
      <Wrapper id='main'>
        <div class='pagetitle'>
          <h1>Dashboard</h1>
          <nav>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <a href='index.html'>Home</a>
              </li>
              <li class='breadcrumb-item active'>Dashboard</li>
            </ol>
          </nav>
        </div>
        <Counter />
      </Wrapper>
    </React.Fragment>
  );
};
const Wrapper = styled.main`
  #main {
    margin-top: 60px;
    padding: 20px 30px;
    transition: all 0.3s;
  }
  @media (max-width: 1199px) {
    #main {
      padding: 20px;
    }
  }
  .pagetitle {
      padding-top: 80px;
    margin-bottom: 0px;
  }
  .pagetitle h1 {
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 600;
    color: #012970;
  }
  .breadcrumb {
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
    color: #899bbd;
    font-weight: 600;
  }
  .breadcrumb a {
    color: #899bbd;
    transition: 0.3s;
  }
  .breadcrumb a:hover {
    color: #51678f;
  }
  .breadcrumb .breadcrumb-item::before {
    color: #899bbd;
  }
  .breadcrumb .active {
    color: #51678f;
    font-weight: 600;
  }
`;

export default Dashboard;
