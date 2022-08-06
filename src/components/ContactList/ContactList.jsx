import { useSelector } from 'react-redux';
import { getItemsValue, getFilterValue } from 'redux/slice';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getItemsValue);
  const filter = useSelector(getFilterValue);

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactsItems = showFilteredContacts();

  return (
    <List>
      {contactsItems.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
