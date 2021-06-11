import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectCollections = (state) => state.collections;

export const selectCollectionData = createSelector(
  [selectCollections],
  (collections) => collections.collectionsData
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollectionData],
    (collectionsData) => { 
        console.log(collectionsData)
        return collectionsData[collectionUrlParam]}

  )
);
