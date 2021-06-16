import { CollectionsActionsTypes } from "./collections.types";
const INITIAL_STATE = {
  collectionsData: null,
  isFetching: false,
  errorMessage: undefined,
};
// different cases for handling the fetch
const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionsActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case CollectionsActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collectionsData: action.payload,
      };
    case CollectionsActionsTypes.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
