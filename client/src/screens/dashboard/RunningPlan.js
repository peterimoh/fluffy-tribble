import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Plans from './Plans';
import { runningPlan } from '../../actions/planAction';
import { DashboardParent } from './DashboardParent';

const RunningPlan = (props) => {
  const RunningPlans = useSelector((state) => state.RunningPlans);
  const dispatch = useDispatch();

  const { id } = props.match.params;

  const { plans, error } = RunningPlans;

  const showError = () => {
    if (error) {
      return (
        <div classNameName='alert alert-dangetext-danger'>
          <p className='text-danger'>{error}</p>
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(runningPlan(id));
  }, []);

  return (
    <DashboardParent title='Running Plans' fromLink='Home' currentLink='Plans'>
      {showError()}
      {plans && <Plans plans={plans} />}
    </DashboardParent>
  );
};

export default RunningPlan;
