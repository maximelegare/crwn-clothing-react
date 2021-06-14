import { createSelector } from "reselect";
import memoize from "lodash.memoize";


// select the collections in rootReduer
const selectCollections = (state) => state.collections;


// select the CollectionsData from the state to access the object
export const selectCollectionsData = createSelector(
  [selectCollections],
  (collections) => collections.collectionsData
);


// select collection for [collectionPage.component] based on the given [match.params] 
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollectionsData],
    (collectionsData) => { 
        console.log(collectionsData)
        return collectionsData[collectionUrlParam]}
  )
);

// create array with the collections object to render in Collection Overview using .map()
export const selectCollectionsForPreview = createSelector([selectCollectionsData],
  (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []

  )