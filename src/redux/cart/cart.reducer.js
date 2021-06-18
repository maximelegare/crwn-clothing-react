import { cartActionTypes } from "./cart.types";
import { addItemToCart, clearCartItem, deleteCartItem } from "./cart.utils";
const INITIAL_STATE = {
  cartVisibility: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        cartVisibility: !state.cartVisibility,
      };
    case cartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, action.payload),
      };
    case cartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteCartItem(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_CART:
      return {
          ...state,
          cartItems:[]
      };
    default:
      return state;
  }
};

export default cartReducer;
