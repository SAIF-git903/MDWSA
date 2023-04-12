import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { persistReducer, persistStore } from "redux-persist"
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';


const sagaMiddleWare = createSagaMiddleware()

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export const persistor = persistStore(store)

// https://api.themoviedb.org/3/movie/677179?api_key=583d43563d202f1e6dd6e28704ca9624&language=en-US
