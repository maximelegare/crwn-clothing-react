import { CollectionActonsTypes } from './collections.types'

export const updateCollections = (collectionsMap) => ({
    type:CollectionActonsTypes.UPDATE_COLLECTIONS,
    payload:collectionsMap
})