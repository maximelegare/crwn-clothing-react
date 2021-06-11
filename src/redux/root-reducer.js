import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  directoryReducer  from './directory/directory.reducer'
import collectionReducer from './collection/collection.reducer'


const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}
const rootReduer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory: directoryReducer,
    collections:collectionReducer
})

export default persistReducer(persistConfig, rootReduer)