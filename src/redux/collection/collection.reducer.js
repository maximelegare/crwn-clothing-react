
import { CollectionActonsTypes } from './collections.types'
const INITIAL_STATE = {
    collectionsData : null
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case CollectionActonsTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collectionsData:action.payload
            }
        
        default:
            return state
    }
} 

export default collectionReducer








