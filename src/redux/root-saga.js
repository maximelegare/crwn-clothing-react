import { call, all } from "@redux-saga/core/effects";

import { fetchCollectionsStart } from "./collections/collections.sagas";

export default function* rootSaga(){
    yield all([call(fetchCollectionsStart)])
}