// import { createSlice } from '@reduxjs/toolkit';
// import {  persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const initialItems = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const initialState = {
//   items: initialItems,
//   filter: '',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//       addContact: (state, action) => {
//       state.items.unshift(action.payload);
//     },
//       removeContact: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     changeFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContact, removeContact, changeFilter } =
//     contactsSlice.actions;

// // Persist
// const persistConfig = {
//   key: 'contacts',
//   storage,
// }
// export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

// // Selectors

// export const getItemsValue = state => state.contacts.items;
// export const getFilterValue = state => state.contacts.filter;

// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62fa92dbffd7197707ef5c66.mockapi.io/' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts?sortBy=name`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: { ...newContact },
      }),
      invalidatesTags: ['Contacts'],
    }),
    removeContact: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    })
  })
});
  
  
// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi;

    //   // Pick out data and prevent nested properties in a hook or selector
    //   transformResponse: (response, meta, arg) => response.data,
    //   invalidatesTags: ['Post'],
    //   // onQueryStarted is useful for optimistic updates
    //   // The 2nd parameter is the destructured `MutationLifecycleApi`
    //   async onQueryStarted(
    //     arg,
    //     { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
    //   ) {},
    //   // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
    //   async onCacheEntryAdded(
    //     arg,
    //     {
    //       dispatch,
    //       getState,
    //       extra,
    //       requestId,
    //       cacheEntryRemoved,
    //       cacheDataLoaded,
    //       getCacheEntry,
    //     }
    //   ) {},
    // }),


