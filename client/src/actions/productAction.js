import axios from 'axios';
import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from './action.types';

const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  try {
    const { data } = await axios.get('https://pure-bayou-81849.herokuapp.com/product/get-product', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.response.data.error,
    });
  }
};


export {getProduct}