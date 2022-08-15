import { Box } from './Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Title, Subtitle } from './Titles.styled';
import { useGetContactsQuery } from 'redux/slice';
import { Loader } from './Loader/Loader';
import { useState } from 'react';

export const App = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={e => setFilter(e.currentTarget.value)} />
      {isFetching && <Loader />}
      {contacts && <ContactList contacts={contacts} filter={filter} />}
    </Box>
  );
};
