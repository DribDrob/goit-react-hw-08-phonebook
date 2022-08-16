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
    }),
    filterContacts: builder.query({
      query: (filter) => `/contacts?filter=${filter}`,
      invalidatesTags: ['Contacts'],
    }),
  })
});
  
// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation, useFilterContactsQuery } = contactsApi;

  