export const getContacts = state => state.contacts.items;
export const isContactsLoading = state => state.contacts.isLoading;
export const getFilterValue = state => state.contacts.filter;
export const getError = state => state.contacts.error;

const contactsSelectors = {
  getContacts,
  isContactsLoading,
  getFilterValue,
  getError,
};
export default contactsSelectors;
