import { combineReducers } from 'redux';
// import Cookie from 'js-cookie'
import { cart_reducer } from './cart.reducer';
import {
  getPlanCount_reducer,
  get_plan_reducer,
  get_token_reducer,
  payment_init_reducer,
  running_plan_reducer,
} from './plan.reducer';
import { get_product_reducer, get_single_product_reducer } from './product.reducer';
import { sidebar_reducer } from './sidebar.reducer';
import {
  SignupReducer,
  ActivateReducer,
  LoginReducer,
  UpdateUser_reducer,
} from './signup.reducer';

// const userInfo = Cookie.get('userInfo');
// const initialState = { LoginReducer: userInfo };

export default combineReducers({
  signupReducer: SignupReducer,
  Activation: ActivateReducer,
  LoginAuth: LoginReducer,
  GetPlan: get_plan_reducer,
  GetToken: get_token_reducer,
  PaymentInit: payment_init_reducer,
  products: get_product_reducer,
  productDetail: get_single_product_reducer,
  cart: cart_reducer,
  sidebar: sidebar_reducer,
  counter: getPlanCount_reducer,
  RunningPlans: running_plan_reducer,
  updatePassword: UpdateUser_reducer
});
