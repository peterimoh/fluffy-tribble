import { combineReducers } from 'redux';
import { get_plan_reducer } from './plan.reducer';
import { SignupReducer, ActivateReducer, LoginReducer } from './signup.reducer';

export default combineReducers({
  signupReducer: SignupReducer,
  Activation: ActivateReducer,
  LoginAuth: LoginReducer,
  GetPlan: get_plan_reducer,
});
