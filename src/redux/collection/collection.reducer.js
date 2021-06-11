import COLLECTIONS_DATA from './collections.Data' 

const INITIAL_STATE = {
    collectionsData : COLLECTIONS_DATA
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        default:
            return state
    }
} 

export default collectionReducer








