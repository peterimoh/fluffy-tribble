import {
  GET_PLAN_FAIL,
  GET_PLAN_REQUEST,
  GET_PLAN_SUCCESS,
  GET_USER_TOKEN_FAIL,
  GET_USER_TOKEN_REQUEST,
  GET_USER_TOKEN_SUCCESS,
  HANDLE_PAYMENT_FAIL,
  HANDLE_PAYMENT_REQUEST,
  HANDLE_PAYMENT_SUCCESS,
} from './action.types';
import axios from 'axios';

const getPlan = (params) => async (dispatch) => {
  dispatch({ type: GET_PLAN_REQUEST, payload: params });
  try {
    const { data } = await axios.get(`/api/plan/subscription/${params}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: GET_PLAN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PLAN_FAIL,
      payload: error.response.data.error,
    });
  }
};

const getClientToken = (userId) => async (dispatch) => {
  dispatch({ type: GET_USER_TOKEN_REQUEST, payload: userId });

  try {
    const { data } = await axios.get(`/api/plan/payment/gettoken/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_USER_TOKEN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: GET_USER_TOKEN_FAIL, payload: error.response });
  }
};

const processPayment = (userId, token, paymentData) => async (dispatch) => {
  dispatch({ type: HANDLE_PAYMENT_REQUEST, payload: userId });
  try {
    const data = axios.post(`/api/plan/payment/braintree/${userId}`,  paymentData, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }})
    dispatch({ type: HANDLE_PAYMENT_SUCCESS, token: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: HANDLE_PAYMENT_FAIL, payload: error.response });
  }
};

export { getPlan, getClientToken, processPayment };