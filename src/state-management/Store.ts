import storage from 'redux-persist/lib/storage';
import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./RootReducer";
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const persistConfig = {
    whiteList: ['userReducer', ''],
    blacklist: ['', ''],
    key: 'demo',
    debug: __DEV__,
    storage: AsyncStorageLib
}

const reducer = persistReducer(persistConfig, rootReducer)
const store = createStore(reducer)
const persistor = persistStore(store)

export { store, persistor }


