import { all, call, put, takeLatest } from "@redux-saga/core/effects";

import  UserActionTypes  from '../user/user.types'
import { clearCart } from '../cart/cart.actions'

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOUt)
}

export function* clearCartOnSignOUt(){
    yield put(clearCart())
}





export function* cartSagas(){
    yield all([call(onSignOutSuccess)])
}