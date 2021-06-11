import { createSelector } from "reselect";

const selectCollections = (state) => state.collections;

export const selectCollectionData = createSelector(
  [selectCollections],
  (collections) => collections.collectionData
);
