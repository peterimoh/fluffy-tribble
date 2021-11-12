const {
  GET_PLAN_REQUEST,
  GET_PLAN_SUCCESS,
  GET_PLAN_FAIL,
  GET_USER_TOKEN_REQUEST,
  GET_USER_TOKEN_SUCCESS,
  GET_USER_TOKEN_FAIL,
  HANDLE_PAYMENT_REQUEST,
  HANDLE_PAYMENT_SUCCESS,
  HANDLE_PAYMENT_FAIL,
  COUNT_FETCH,
  COUNT_FETCH_FAIL,
  RUNNING_PLAN,
  RUNNING_PLAN_FAIL,
  RUNNING_PLAN_REQUEST,
} = require('../actions/action.types');

const initState = {
  loading: false,
  plan: null,
  error: false,
  token: '',
  tokenLoading: false,
  tokenError: false,
  data: {},
  countData: {},
  plans: null
};

const get_plan_reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PLAN_REQUEST:
      return { loading: true };
    case GET_PLAN_SUCCESS:
      return { loading: false, plan: action.payload };
    case GET_PLAN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const get_token_reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_TOKEN_REQUEST:
      return { ...state, tokenLoading: true };
    case GET_USER_TOKEN_SUCCESS:
      return { tokenLoading: false, token: action.payload };

    case GET_USER_TOKEN_FAIL:
      return { tokenLoading: false, tokenError: action.payload };
    default:
      return state;
  }
};

const payment_init_reducer = (state = initState, action) => {
  switch (action.type) {
    case HANDLE_PAYMENT_REQUEST:
      return { loading: true };
    case HANDLE_PAYMENT_SUCCESS:
      return { loading: false, data: action.payload };
    case HANDLE_PAYMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const getPlanCount_reducer = (state = initState, action) => {
  switch (action.type) {
    case COUNT_FETCH:
      return { countData: action.payload }
    case COUNT_FETCH_FAIL:
      return {error: action.payload}
  
    default:
      return state;
  }
}

const running_plan_reducer = (state = initState, action) => {
  switch (action.type) {
    case RUNNING_PLAN_REQUEST:
      return{loading: true}
    case RUNNING_PLAN:
      return {loading: false, plans: action.payload}
    case RUNNING_PLAN_FAIL:
      return {error: action.payload}
  
    default:
      return state
  }
}

export {
  get_plan_reducer,
  get_token_reducer,
  payment_init_reducer,
  getPlanCount_reducer,
  running_plan_reducer,
};
