import { Box } from '../components/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import { contactsOperations } from 'redux/contacts';
import { useEffect } from 'react';
// import { Title, Subtitle } from './Titles.styled';
// import { Loader } from './Loader/Loader';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { getContacts, getFilterValue } from 'redux/contacts/contactsSelectors';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.get());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactsItems = showFilteredContacts();

  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <ContactFilter />
      {/* {isFetching && <Loader />} */}
      {contactsItems.length !== 0 && <ContactList contacts={contactsItems} />}
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

export default Contacts;
