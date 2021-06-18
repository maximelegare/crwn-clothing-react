import {cartActionTypes} from './cart.types'

export const toggleCartVisibility = () => ({
    type: cartActionTypes.TOGGLE_CART_VISIBILITY
})
export const addCartItem = (item) => ({
    type:cartActionTypes.ADD_CART_ITEM,
    payload:item
})

export const clearCartItem = (item) => ({
    type:cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item   
})

export const deleteCartItem = (item) => ({
    type:cartActionTypes.DELETE_ITEM,
    payload:item
})

export const clearCart = () => ({
    type:cartActionTypes.CLEAR_CART
})

