import {
  GET_PLAN_FAIL,
  GET_PLAN_REQUEST,
  GET_PLAN_SUCCESS,
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

export {getPlan}