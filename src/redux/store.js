import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReduser } from './contactsSlice';
import { filterReducer } from './filterSlice';


const presistConfig = {
    key: 'contacts',
    storage,
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});

const persistedReducer = persistReducer(presistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

