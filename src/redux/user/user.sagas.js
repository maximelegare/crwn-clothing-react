import { put, takeLatest, all, call } from "@redux-saga/core/effects";
import UserActionTypes  from "./user.types";

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils'

import {
  googleSignInSuccess,
  googleSignInError,
  // emailSignInSuccess,
  // emailSignInError,
} from "./user.actions";


export function* onGoogleSignInStart(){
   yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)  
}

export function* signInWithGoogle(){
    try{
    const {user} = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user) 
    const userSnapshot = yield userRef.get()
    yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    

    }catch(err){
      yield put(googleSignInError(err))
    }
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart)])
}
