import { CollectionActonsTypes } from "./collections.types";
const INITIAL_STATE = {
  collectionsData: null,
  isFetching: true,
  errorMessage: undefined,
};
// different cases for handling the fetch
const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case CollectionActonsTypes.FETCH_COLLECTIONS_START:
    //   return {
    //     ...state,
    //     isFetching: true,
    //   };
    case CollectionActonsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collectionsData: action.payload,
      };
    case CollectionActonsTypes.FETCH_COLLECTIONS_ERROR:
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
