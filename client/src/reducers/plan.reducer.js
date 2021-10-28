const {
  GET_PLAN_REQUEST,
  GET_PLAN_SUCCESS,
  GET_PLAN_FAIL,
} = require('../actions/action.types');

const initState = {
  loading: false,
  plan: null,
  error: false,
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

export { get_plan_reducer };
