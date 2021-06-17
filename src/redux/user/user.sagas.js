import { put, takeLatest, all, call } from "@redux-saga/core/effects";
import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInError,
  
} from "./user.actions";

// google sign in sagas
export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}


export function* getSnapshotFromUserAuth(user){
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (err) {
    yield put(signInError(err));
  }
}




export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user)
  } catch (err) {
    yield put(signInError(err));
  }
}

// email and password sagas
export function* onSignInWithEmailAndPasswordStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  console.log(`email: ${email}, password: ${password}` )
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user) 
  } catch (err) {
    yield put(signInError(err));
  }
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onSignInWithEmailAndPasswordStart)]);
}
