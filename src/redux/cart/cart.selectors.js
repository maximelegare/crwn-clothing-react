import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.cartVisibility
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0)
);
