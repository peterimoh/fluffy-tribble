import { combineReducers } from 'redux';
import {
  get_plan_reducer,
  get_token_reducer,
  payment_init_reducer,
} from './plan.reducer';
import { get_product_reducer } from './product.reducer';
import { SignupReducer, ActivateReducer, LoginReducer } from './signup.reducer';

export default combineReducers({
  signupReducer: SignupReducer,
  Activation: ActivateReducer,
  LoginAuth: LoginReducer,
  GetPlan: get_plan_reducer,
  GetToken: get_token_reducer,
  PaymentInit: payment_init_reducer,
  products: get_product_reducer,
});
