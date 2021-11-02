import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlan } from '../../actions/planAction';
import Paymentb from '../../components/payment/Paymentb';
import PlanDetail from '../../components/singleplan/PlanDetail';
import Footerr from '../../utility/footer/Footerr';
import Navbar from '../../utility/navbar/Navbar';
import './single.css'

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
      <div className='top-header'>
        <div className='container'>
          <div className='row flex'>
            <PlanDetail loading={loading} details={plan} error={error} />
            <Paymentb details={plan} package={id}/>
          </div>
        </div>
      </div>
      <Footerr />
    </React.Fragment>
  );
};

export default SinglePlan;
