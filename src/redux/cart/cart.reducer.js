import { cartActionTypes } from "./cart.types";
import { addItemToCart, decreaseItemQuantity } from "./cart.utils";
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
    case cartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems:decreaseItemQuantity(state.cartItems, action.payload)
      };
    case cartActionTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
