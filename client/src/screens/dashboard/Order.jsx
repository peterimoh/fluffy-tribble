import React from 'react'
import {DashboardParent} from './DashboardParent';

const Order = () => {
    return (
      <DashboardParent
        title='Orders'
        fromLink='Home'
        currentLink='Orders'
      >
        order component
      </DashboardParent>
    );
}

export default Order
