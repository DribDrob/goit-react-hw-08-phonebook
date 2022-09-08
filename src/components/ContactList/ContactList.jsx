import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from '@mui/material';
// import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
