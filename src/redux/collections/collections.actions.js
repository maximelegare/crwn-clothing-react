import { CollectionsActionsTypes } from "./collections.types";


export const fetchCollectionsStart = () => ({
  type: CollectionsActionsTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectonsSuccess = collectionsMap => ({
    type:CollectionsActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectionError = errorMessage => ({
    type:CollectionsActionsTypes.FETCH_COLLECTIONS_ERROR,
    payload:errorMessage
})


// it uses redux thunk. I can dispatch multiple actions at different moment using it.
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
  
  };
};
