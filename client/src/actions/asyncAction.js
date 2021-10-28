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
} from './action.types';
import axios from 'axios';
import Cookie from 'js-cookie';

const createAccount = (userObj) => async (dispatch) => {
  dispatch({
    type: CREATE_ACCOUNT_REQUEST,
    payload: userObj,
  });
  
  try {
    const { data } = await axios.post('/api/presignup', userObj, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
      payload: data,
    });
   
  } catch (error) {
    console.log(error.response);
     dispatch({
       type: CREATE_ACCOUNT_FAIL,
       payload: error.response.data.error,
     });
  }
};

const signUp = (user) => async (dispatch) => {
  dispatch({ type: ACTIVATE_ACCOUNT, payload: user });
  try {
    const response = await axios.post('/api/signup-redirect', { token: user });
    dispatch({ type: ACTIVATE_ACCOUNT_SUCCESS, token: response });
  } catch (error) {
    dispatch({ type: ACTIVATE_ACCOUNT_FAIL, error: error.response.data.error });
    console.log(error);
  }
};

const Login = (userObj) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST, payload: userObj });
  try {
    const data = await axios.post('/api/login', userObj);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data), {
      expires: 1,
    });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response.data.error });
    console.log(err);
  }
};

export { createAccount, signUp, Login };
