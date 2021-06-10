import { cartActionTypes } from './cart.types'
import { addItemToCart, deleteItemFromCart } from './cart.utils'
const INITIAL_STATE = {
    cartVisibility:false,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                cartVisibility: !state.cartVisibility
            }
        case cartActionTypes.ADD_CART_ITEM:
            
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload) 
            }   
        case cartActionTypes.DELETE_CART_ITEM:
            return{
                ...state,
                cartItems:deleteItemFromCart(state.cartItems, action.payload)
            } 
            default:
                return state
    }
}

export default cartReducer