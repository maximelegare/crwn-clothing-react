import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'


import rootReducer from './root-reducer'
import logger from 'redux-logger'

const middleWares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middleWares))

export const persistor = persistStore(store)

export default store