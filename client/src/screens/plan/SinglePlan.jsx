import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlan } from '../../actions/planAction';
import PlanDetail from '../../components/singleplan/PlanDetail';
import Footerr from '../../utility/footer/Footerr';
import Navbar from '../../utility/navbar/Navbar';

const SinglePlan = (props) => {
  const GetPlan = useSelector((state) => state.GetPlan);
  const { loading, plan, error } = GetPlan;
  console.log(GetPlan);

  const dispatch = useDispatch();
  const { id } = props.match.params;
  console.log(id);

  useEffect(() => {
    dispatch(getPlan(id));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <PlanDetail loading={loading} details={plan} error={error} />
      <Footerr/>
    </React.Fragment>
  );
};

export default SinglePlan;
