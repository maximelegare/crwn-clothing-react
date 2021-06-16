import { call, all } from "@redux-saga/core/effects";

import { fetchCollectionsStart } from "./collections/collections.sagas";
import { userSagas } from './user/user.sagas'
export default function* rootSaga(){
    yield all([call(fetchCollectionsStart), call(userSagas)])
}