export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearCartItem = (cartItems, cartItemToDelete) => {
  const cartItemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDelete.id
  );

  if (cartItemExist) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
  }
};

export const deleteCartItem = (cartItems, cartItemToDelete) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDelete.id
  );
  console.log(existingCartItem)

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
