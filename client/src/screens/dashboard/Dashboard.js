import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../../components/dashboard/nav/Nav';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import Counter from '../../components/dashboard/counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { planCounter } from '../../actions/planAction';

const Dashboard = (props) => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const { id } = props.match.params;
  // console.log(id);
  const {countData} = counter
  
  useEffect(() => {
    dispatch(planCounter(id));
  }, [])

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
                <Link to='/'>Home</Link>
              </li>
              <li class='breadcrumb-item active'>Dashboard</li>
            </ol>
          </nav>
        </div>
        <DashboardWrapper>
          <div className='row'>
            {/* <!-- Left side columns --> */}
            <div class='col-lg-8'>
              <div class='row'>
                <Counter response={countData }/>
              </div>
            </div>
          </div>
        </DashboardWrapper>
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

const DashboardWrapper = styled.section`
  .dashboard .filter {
    position: absolute;
    right: 0px;
    top: 15px;
  }
  .dashboard .filter .icon {
    color: #aab7cf;
    padding-right: 20px;
    padding-bottom: 5px;
    transition: 0.3s;
    font-size: 16px;
  }
  .dashboard .filter .icon:hover,
  .dashboard .filter .icon:focus {
    color: #4154f1;
  }
  .dashboard .filter .dropdown-header {
    padding: 8px 15px;
  }
  .dashboard .filter .dropdown-header h6 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #aab7cf;
    margin-bottom: 0;
    padding: 0;
  }
  .dashboard .filter .dropdown-item {
    padding: 8px 15px;
  }

  /* Info Cards */
  .dashboard .info-card {
    padding-bottom: 10px;
  }
  .dashboard .info-card h6 {
    font-size: 28px;
    color: #012970;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  .dashboard .card-icon {
    font-size: 32px;
    line-height: 0;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    flex-grow: 0;
  }
  .dashboard .sales-card .card-icon {
    color: #4154f1;
    background: #f6f6fe;
  }
  .dashboard .revenue-card .card-icon {
    color: #2eca6a;
    background: #e0f8e9;
  }
  .dashboard .customers-card .card-icon {
    color: #ff771d;
    background: #ffecdf;
  }

  /* Activity */
  .dashboard .activity {
    font-size: 14px;
  }
  .dashboard .activity .activity-item .activite-label {
    color: #888;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    min-width: 64px;
  }
  .dashboard .activity .activity-item .activite-label::before {
    content: '';
    position: absolute;
    right: -11px;
    width: 4px;
    top: 0;
    bottom: 0;
    background-color: #eceefe;
  }
  .dashboard .activity .activity-item .activity-badge {
    margin-top: 3px;
    z-index: 1;
    font-size: 11px;
    line-height: 0;
    border-radius: 50%;
    flex-shrink: 0;
    border: 3px solid #fff;
    flex-grow: 0;
  }
  .dashboard .activity .activity-item .activity-content {
    padding-left: 10px;
    padding-bottom: 20px;
  }
  .dashboard .activity .activity-item:first-child .activite-label::before {
    top: 5px;
  }
  .dashboard .activity .activity-item:last-child .activity-content {
    padding-bottom: 0;
  }

  /* News & Updates */
  .dashboard .news .post-item + .post-item {
    margin-top: 15px;
  }
  .dashboard .news img {
    width: 80px;
    float: left;
    border-radius: 5px;
  }
  .dashboard .news h4 {
    font-size: 15px;
    margin-left: 95px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .dashboard .news h4 a {
    color: #012970;
    transition: 0.3s;
  }
  .dashboard .news h4 a:hover {
    color: #4154f1;
  }
  .dashboard .news p {
    font-size: 14px;
    color: #777777;
    margin-left: 95px;
  }

  /* Recent Sales */
  .dashboard .recent-sales {
    font-size: 14px;
  }
  .dashboard .recent-sales .table thead {
    background: #f6f6fe;
  }
  .dashboard .recent-sales .table thead th {
    border: 0;
  }
  .dashboard .recent-sales .dataTable-top {
    padding: 0 0 10px 0;
  }
  .dashboard .recent-sales .dataTable-bottom {
    padding: 10px 0 0 0;
  }

  /* Top Selling */
  .dashboard .top-selling {
    font-size: 14px;
  }
  .dashboard .top-selling .table thead {
    background: #f6f6fe;
  }
  .dashboard .top-selling .table thead th {
    border: 0;
  }
  .dashboard .top-selling .table tbody td {
    vertical-align: middle;
  }
  .dashboard .top-selling img {
    border-radius: 5px;
    max-width: 60px;
  }
`;

export default Dashboard;
