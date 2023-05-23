import { configureStore } from '@reduxjs/toolkit';
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
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';


const presistConfig = {
    key: 'contacts',
    storage,
};

const presistedContacts = persistReducer(presistConfig, contactsSlice.reducer);

export const store = configureStore({
    reducer: {
        phonebook: presistedContacts,
        filter: filterSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const filterValue = state => state.filter;
export const contactValue = state => state.phonebook.contacts;
export const persistor = persistStore(store);

