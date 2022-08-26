import { Box } from '../components/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
// import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';
// import { Title, Subtitle } from './Titles.styled';
// import { Loader } from './Loader/Loader';
// import { useContacts } from 'hooks/useContacts';

const Contacts = () => {
  // const { filter, setFilter, filteredContacts, isFetching } = useContacts();
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.get());
  }, [dispatch]);

  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      {/* <ContactFilter
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      /> */}
      {/* {isFetching && <Loader />}
      {filteredContacts.length !== 0 && (
        <ContactList contacts={filteredContacts} />
      )} */}
      {contacts && <ContactList contacts={contacts} />}
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

export default Contacts;
