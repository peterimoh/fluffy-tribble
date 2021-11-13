import {
  ACTIVATE_ACCOUNT,
  ACTIVATE_ACCOUNT_FAIL,
  ACTIVATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
} from '../actions/action.types';
import Cookie from 'js-cookie'
const initState = {
  loading: false,
  message: false,
  error: false,
  success: false,
  showButton: true,
  msg: '',
  response: '',
  isAuth: false,
};

const SignupReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
      return { loading: true };
    case CREATE_ACCOUNT_SUCCESS:
      return { loading: false, message: true, data: action.payload };
    case CREATE_ACCOUNT_FAIL:
      console.log(action.payload);
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const ActivateReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIVATE_ACCOUNT:
      return { ...state, loading: true, success: false, showButton: true };
    case ACTIVATE_ACCOUNT_SUCCESS:
      return {
        loading: false,
        success: true,
        msg: 'Account Activated Successfully, you can now log in',
        showButton: false,
      };
    case ACTIVATE_ACCOUNT_FAIL:
      return {
        loading: false,
        success: false,
        msg: '',
        error: action.payload,
        showButton: false,
      };
    default:
      return state;
  }
};

const LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { isAuth: false, loading: true };
    case LOGIN_SUCCESS:
      return { isAuth: true, loading: false, response: action.payload };
    case LOGIN_FAIL:
      return { isAuth: false, error: true, msg: action.payload };

    default:
      return state;
  }
};

const UpdateUser_reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST:
      return { loading: true };
    case UPDATE_PASSWORD_SUCCESS:
      return { loading: false, response: action.payload };
    case UPDATE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export { SignupReducer, ActivateReducer, LoginReducer, UpdateUser_reducer };
