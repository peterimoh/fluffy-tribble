import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/action.types';

const initState = {
  cartItem: [],
};
const cart_reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const product = state.cartItem.find((x) => x.product === item.product);
      if (product) {
        cartItems: state.cartItem.map((x) =>
          x.product === product.product ? item : x
        );
      }
          return{ cartItem: [...state.cartItem, item]}

      case REMOVE_FROM_CART:
          return{cartItem: state.cartItem.filter(x=>x.product !==action.payload)}
    default:
      return state
  }
};


export {cart_reducer}