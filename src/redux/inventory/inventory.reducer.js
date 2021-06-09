import COLLECTIONS_DATA from './inventory.data'

const INITIAL_STATE = {
    COLLECTIONS_DATA:COLLECTIONS_DATA
}


const InventoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state
    }
}
export default InventoryReducer