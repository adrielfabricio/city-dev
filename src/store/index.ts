import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import appReducer from './rootReducer';

const store = createStore(appReducer);
const persistor = persistStore(store);

export { store, persistor };
