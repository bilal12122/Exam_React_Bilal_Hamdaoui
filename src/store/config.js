import { createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import favElementsReducer from './reducers/favElements';

const configPersist = {
    key: 'root',
    storage: AsyncStorage,
};

const reducerPersist = persistReducer(configPersist, favElementsReducer);

//export default createStore(favElementsReducer);
export const Store = createStore(reducerPersist);
export const Persistor = persistStore(Store);



