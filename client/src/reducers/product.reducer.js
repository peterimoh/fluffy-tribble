import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_SUCCESS,
} from '../actions/action.types';

const initState = {
  loading: false,
  data:[],
  error: '',
};

const get_product_reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true };
    case GET_PRODUCT_SUCCESS:
      return { loading: false, data: action.payload };
    case GET_PRODUCT_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

const get_single_product_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return { loading: true }
    case GET_SINGLE_PRODUCT_SUCCESS:
      return { loading: false, response: action.payload.data }
    case GET_SINGLE_PRODUCT_FAIL:
      return{error: action.payload}
    default:
      return state
  }
}

export {get_product_reducer, get_single_product_reducer}