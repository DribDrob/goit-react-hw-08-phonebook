export const getContacts = state => state.contacts.items;
export const isContactsLoading = state => state.contacts.isLoading;
export const getFilterValue = state => state.contacts.filter;
// export const isContactEditing = state => state.contacts.isEdit;

const contactsSelectors = {
  getContacts,
  isContactsLoading,
  getFilterValue,
  // isContactEditing,
};
export default contactsSelectors;