const getUserEmail = state => state.auth.user.email;
const isLoggedIn = state => state.auth.isLoggedIn;
const isCurrentUserLoading = state => state.auth.isCurrentUserLoading;
 
const authSelectors = {
  getUserEmail,
  isLoggedIn,
  isCurrentUserLoading,
};
export default authSelectors;