import UserActionTypes from './user.types'


export const googleSignInStart = () => ({
    type:UserActionTypes.GOOGLE_SIGN_IN_START
})

export const checkUserSession = () => ({
    type:UserActionTypes.CHECK_USER_SESSION,
})

export const emailSignInStart = (emailAndPassword) => ({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
})

export const signInSuccess = (user) => ({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const signInError = (err) => ({
    type:UserActionTypes.SIGN_IN_ERROR,
    payload:err
})

export const signOutStart = () => ({
    type:UserActionTypes.SIGN_OUT_START
})

export const signOutSucess = () => ({
    type:UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutError = (err) => ({
    type:UserActionTypes.SIGN_OUT_ERROR,
    payload:err
})

export const signUpStart = (userInfos) => ({
    type:UserActionTypes.SIGN_UP_START,
    payload:userInfos
})

export const signUpSuccess = (user) => ({
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload:user
})

export const signUpError = (err) => ({
    type:UserActionTypes.SIGN_UP_ERROR,
    payload:err
})

