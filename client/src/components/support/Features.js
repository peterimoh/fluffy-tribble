import React from 'react';
import data from './data';

const Features = () => {
  return (
    <div className='container'>
      <div className='row align-items-center mb-4'>
        {data.map((x) => {
          const { id, title, desc, icon } = x;
          return (
            <div className='col-sm-4 d-flex flex-direct' key={id}>
              {icon} <br />
              <h3>{title}</h3>
              <br />
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
