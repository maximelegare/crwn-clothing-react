import {cartActionTypes} from './cart.types'

export const toggleCartVisibility = () => ({
    type: cartActionTypes.TOGGLE_CART_VISIBILITY
})
export const addCartItem = (item) => ({
    type:cartActionTypes.ADD_CART_ITEM,
    payload:item
})

export const clearCartItem = (item) => ({
    type:cartActionTypes.CLEAR_CART_ITEM,
    payload:item   
})

export const deleteCartItem = (item) => ({
    type:cartActionTypes.DELETE_CART_ITEM,
    payload:item
})


