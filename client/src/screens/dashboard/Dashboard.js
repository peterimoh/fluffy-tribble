import React, { useEffect } from 'react';
import Counter from '../../components/dashboard/counter/Counter';
import { DashboardParent } from './DashboardParent';
import { useDispatch, useSelector } from 'react-redux';
import { planCounter } from '../../actions/planAction';

const Dashboard = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const { id } = props.match.params;
  const { countData } = counter;

  useEffect(() => {
    dispatch(planCounter(id));
  }, []);

  return (
    <DashboardParent title='Dashboard' fromLink='Home' currentLink='Dashboard'>
      <Counter response={countData} />
    </DashboardParent>
  );
};

export default Dashboard;
