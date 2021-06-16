import { CollectionsActionsTypes } from "./collections.types";
import { takeLatest, put, call } from "@redux-saga/core/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectonsSuccess,
  fetchCollectionError,
} from "./collections.actions";


export function* fetchCollectionsStart() {
  yield takeLatest(
    CollectionsActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}


export function* fetchCollectionsAsync() {
  try {
    const collectionRef = yield firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectonsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionError(err.message));
  }
}

