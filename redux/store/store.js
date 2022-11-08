import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/counterSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["counterState"]
  }

const rootReducer=combineReducers({
    counterState:counterReducer
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: {
    counter: persistedReducer,
    middleware:[thunk]
  },
})