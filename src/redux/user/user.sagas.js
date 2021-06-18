import { put, takeLatest, all, call } from "@redux-saga/core/effects";
import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signInSuccess,
  signInError,
  signOutError,
  signOutSucess,
  signUpSuccess,
  signUpError
} from "./user.actions";

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignInWithEmailAndPasswordStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

// get snapshot from firebase.utils
export function* getSnapshotFromUserAuth(user, displayName) {
  try {
    const userRef = yield call(createUserProfileDocument, user, {displayName:displayName});
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInError(err));
  }
}

// sign in with google
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInError(err));
  }
}

// sign in email and password
export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  console.log(`email: ${email}, password: ${password}`);
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInError(err));
  }
}

// user sign out
export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSucess());
  } catch (err) {
    yield put(signOutError(err));
  }
}

// user Sign up
export function* onSignUpStart(){
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
  yield console.log('onSignUpStart')
}

export function* signUp({payload:{email, password, displayName}}){
  try{
    const {user} = yield  auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess(user))
    
    yield getSnapshotFromUserAuth(user, displayName)

  }catch(err){
    yield put(signUpError(err))
  }

}



// checks if a user is authenticated, which create session persistance.
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signInError(err));
  }
}





export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignInWithEmailAndPasswordStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart)
  ]);
}
