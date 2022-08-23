import { Box } from './Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import { Title, Subtitle } from './Titles.styled';
import { Loader } from './Loader/Loader';
import { useContacts } from 'hooks/useContacts';

const Contacts = () => {
  const { filter, setFilter, filteredContacts, isFetching } = useContacts();

  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <ContactFilter
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      />
      {isFetching && <Loader />}
      {filteredContacts.length !== 0 && (
        <ContactList contacts={filteredContacts} />
      )}
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

export default Contacts;
