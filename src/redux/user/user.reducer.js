import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser :null,
    error:null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER :
            return{
                ...state, 
                currentUser:action.payload
            }

        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:    
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser:action.payload,
                error:null
            }
        case UserActionTypes.EMAIL_SIGN_IN_ERROR:    
        case UserActionTypes.GOOGLE_SIGN_IN_ERROR:    
            return{
                ...state,
                error:action.payload
            }




        default: 
            return state
    }
}

export default userReducer