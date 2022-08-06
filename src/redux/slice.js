import { createSlice } from '@reduxjs/toolkit';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialItems = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  items: initialItems,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
      addContact: (state, action) => {
      state.items.unshift(action.payload);
    },
      removeContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, changeFilter } =
    contactsSlice.actions;

// Persist
const persistConfig = {
  key: 'contacts',
  storage,
}
export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

// Selectors

export const getItemsValue = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

// ****************   Actions and Reducers ****************

// import { createAction, createReducer, combineReducers  } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/add');
// export const removeContact = createAction('contacts/remove');
// export const changeFilter = createAction('filter/set');

// const initialItems = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const itemsReducer = createReducer(initialItems, {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [removeContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filterReducer = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export const contacts = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });
