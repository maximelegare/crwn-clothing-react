import {cartActionTypes} from './cart.types'

export const toggleCartVisibility = () => ({
    type: cartActionTypes.TOGGLE_CART_VISIBILITY
})
export const addCartItem = (item) => ({
    type:cartActionTypes.ADD_CART_ITEM,
    payload:item
})
