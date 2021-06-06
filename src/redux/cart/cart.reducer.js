import { cartActionTypes } from './cart.types'
const INITIAL_STATE = {cartVisibility:false}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_VISIBILITY:
            return {
                ...state,
                cartVisibility: !state.cartVisibility
            }
            default:
                return state
    }
}

export default cartReducer