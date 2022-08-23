import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.get.pending](state, _) {
            state.isLoading = true;
    },
    [contactsOperations.get.fulfilled](state, {payload}) {
      state.items = payload;
      state.isLoading = false;
    },
    [contactsOperations.get.rejected](state, _) {
            state.isLoading = false;
    },
    }
  },
);
export default contactsSlice.reducer;

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [authOperations.register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [authOperations.fetchCurrentUser.pending](state) {
//       state.isFetchingCurrentUser = true;
//     },
//     [authOperations.fetchCurrentUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//     },
//     [authOperations.fetchCurrentUser.rejected](state) {
//       state.isFetchingCurrentUser = false;
//     },
//   },
// });

// export default authSlice.reducer;