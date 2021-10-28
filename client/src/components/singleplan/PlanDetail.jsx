import { data } from 'jquery';
import React from 'react';

const PlanDetail = (props) => {
  const { loading, details, error } = props;
  console.log(details);
//   if (details) {
//     const { msg, data } = details;
//   }

  const showLoading = () => {
    if (loading) return <div classNameName='alert alert-info'>Loading...</div>;
  };

  const showError = () => {
    if (error) {
      return <div classNameName='alert alert-danger'>{error}</div>;
    }
  };

  return (
    <div className='top-header'>
      <div className='container'>
        {showLoading()}
        {showError()}
        {details ? (
          <>
            <h5>
              <strong>Plan Details</strong>
            </h5>
            <ul>
                          <li>Name: {details.data.Name } Plan</li>
                          <li>Discount: {details.data.Discount }</li>
                          <li>Disk Sixe: {details.data.Disk }</li>
                          <li>Bandwith: {details.data.BandWidth }</li>
                          <li>Email: {details.data.Email }</li>
                          <li>Domains: {details.data.TLD }</li>
                          <li>CPU: {details.data.CPU }</li>
                          <li>Database: {details.data.My_sql_db }</li>
                          <li>Free SSL: {details.data.Free_ssl }</li>
                          <li>Duration: {details.data.Duration }</li>
                      </ul>
                      <button className='btn btn-primary'>Buy Now</button>
          </>
        ) : (
          <div>Plan does not exist</div>
        )}
      </div>
    </div>
  );
};

export default PlanDetail;
