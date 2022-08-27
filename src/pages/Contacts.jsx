import { Box } from '../components/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
// import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import { contactsOperations } from 'redux/contacts';
import { useEffect } from 'react';
// import { Title, Subtitle } from './Titles.styled';
// import { Loader } from './Loader/Loader';
import { useContacts } from 'hooks/useContacts';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

const Contacts = () => {
  const { filteredContacts } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.get());
  }, [dispatch]);

  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <ContactFilter />
      {/* {isFetching && <Loader />} */}
      {filteredContacts.length !== 0 && (
        <ContactList contacts={filteredContacts} />
      )}
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

export default Contacts;
