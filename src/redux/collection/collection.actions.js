import { CollectionActonsTypes } from "./collections.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

// export const fetchCollectionStart = () => ({
//   type: CollectionActonsTypes.FETCH_COLLECTIONS_START,
// });

export const fetchCollectonsSuccess = collectionsMap => ({
    type:CollectionActonsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionError = errorMessage => ({
    type:CollectionActonsTypes.FETCH_COLLECTIONS_ERROR,
    payload:errorMessage
})


// it uses redux thunk. I can dispatch multiple actions at different moment using it.
export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    
    
    // dispatch beginning of fetching  
    // dispatch(fetchCollectionStart());

    // gets everything in the collections
    collectionRef.get().then((snapshot) => {
    // transforms in an object (firebase.utils.js) 
        

    const objectMap = convertCollectionsSnapshotToMap(snapshot);

    // success or error dispatch

    dispatch(fetchCollectonsSuccess(objectMap))
    }).catch(err => dispatch(fetchCollectionError(err.message)))
  };
};
