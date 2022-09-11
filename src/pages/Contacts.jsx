import { ContactForm } from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { contactsOperations } from 'redux/contacts';
import { useEffect } from 'react';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import contactsSelectors, {
  getContacts,
  getFilterValue,
} from 'redux/contacts/contactsSelectors';
import { Box, Typography } from '@mui/material';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const isLoading = useSelector(contactsSelectors.isContactsLoading);
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
        mb: 'auto',
        px: 4,
        py: 12,
        display: 'flex',
        alignItems: 'top',
      }}
    >
      <Box
        maxWidth="360px"
        sx={{
          mx: 4,
        }}
      >
        <Typography variant="h5" component="p">
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
        {isLoading ? (
          <Loader />
        ) : (
          contactsItems.length !== 0 && <ContactList contacts={contactsItems} />
        )}
      </Box>
    </Box>
  );
};

export default Contacts;
