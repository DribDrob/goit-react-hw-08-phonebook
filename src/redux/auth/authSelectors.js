const getUserEmail = state => state.auth.user.email;
const isLoggedIn = state => state.auth.isLoggedIn;
const isFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
 
const authSelectors = {
  getUserEmail,
  isLoggedIn,
  isFetchingCurrentUser,
};
export default authSelectors;