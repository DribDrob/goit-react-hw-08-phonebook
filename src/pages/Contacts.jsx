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
import { Box, Typography } from '@mui/material';

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
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'top',
      }}
    >
      <Box
        sx={{
          mx: 4,
        }}
      >
        <Typography variant="h5" component="p" sx={{ flexGrow: 1 }}>
          Fill to add a contact
        </Typography>
        <ContactForm />
      </Box>
      <Box
        sx={{
          mx: 4,
        }}
      >
        <Typography variant="h5" component="p" sx={{ flexGrow: 1 }}>
          Contacts
        </Typography>
        <ContactFilter />
        {/* {isFetching && <Loader />} */}
        {contactsItems.length !== 0 && <ContactList contacts={contactsItems} />}
        <ToastContainer autoClose={3000} />
      </Box>
    </Box>
  );
};

export default Contacts;
