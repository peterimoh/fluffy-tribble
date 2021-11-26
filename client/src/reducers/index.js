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
import {
  get_product_reducer,
  get_single_product_reducer,
} from './product.reducer';
import { sidebar_reducer } from './sidebar.reducer';
import {
  SignupReducer,
  ActivateReducer,
  LoginReducer,
  UpdateUser_reducer,
} from './signup.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';

const authPersist = {
  key: 'isAuth',
  storage: storageSession,
};

const cartPersist = {
  key: 'cart',
  storage,
};

export default combineReducers({
  signupReducer: SignupReducer,
  Activation: ActivateReducer,
  LoginAuth: persistReducer(authPersist, LoginReducer),
  GetPlan: get_plan_reducer,
  GetToken: get_token_reducer,
  PaymentInit: payment_init_reducer,
  products: get_product_reducer,
  productDetail: get_single_product_reducer,
  cart: persistReducer(cartPersist, cart_reducer),
  sidebar: sidebar_reducer,
  counter: getPlanCount_reducer,
  RunningPlans: running_plan_reducer,
  updatePassword: UpdateUser_reducer,
});
