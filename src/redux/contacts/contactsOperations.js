import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'services/contactsApi';

const get = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
const add = createAsyncThunk(
  'contacts/add',
  async (_, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.addContact();
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const remove = createAsyncThunk(
  'contacts/remove',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.removeContact();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const update = createAsyncThunk(
  'contacts/update',
  async (_, { rejectWithValue }) => {
    try {
      const contact = await contactsApi.updateContact();
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);


const operations = {
  get,
  add,
  remove,
  update,
};
export default operations;