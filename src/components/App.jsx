import { Box } from './Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Title, Subtitle } from './Titles.styled';

export const App = () => {
  return (
    <Box color="black" pl={3} pr={3} m="32px auto" width={1}>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </Box>
  );
};
