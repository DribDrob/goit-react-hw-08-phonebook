import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
// import { ToastContainer } from 'react-toastify';
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
      component="main"
      sx={{
        // my: 8,
        // mx: 4,
        mb: 'auto',
        px: 4,
        py: 12,
        display: 'flex',
        // justifyContent: 'space-around',
        // flexDirection: 'column',
        alignItems: 'top',
      }}
    >
      <Box
        maxWidth="360px"
        sx={{
          mx: 4,
        }}
      >
        <Typography
          variant="h5"
          component="p"
          // sx={{ flexGrow: 1 }}
        >
          Fill to add a contact
        </Typography>
        <ContactForm />
      </Box>
      <Box
        sx={{
          mx: 4,
          flexGrow: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" component="p" sx={{ mx: 3 }}>
            Contacts
          </Typography>
          <ContactFilter />
        </Box>
        {/* {isFetching && <Loader />} */}

        {contactsItems.length !== 0 && <ContactList contacts={contactsItems} />}

        {/* <ToastContainer autoClose={3000} /> */}
      </Box>
    </Box>
  );
};

export default Contacts;
