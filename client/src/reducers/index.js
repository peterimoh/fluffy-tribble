import { combineReducers } from 'redux';
import { SignupReducer, ActivateReducer, LoginReducer } from './signup.reducer';

export default combineReducers({
  signupReducer: SignupReducer,
  Activation: ActivateReducer,
  LoginAuth: LoginReducer,
});
