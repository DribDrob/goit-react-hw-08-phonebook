// import { useSelector } from 'react-redux';
// import { getItemsValue, getFilterValue } from 'redux/slice';
// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, filter }) => {
  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactsItems = showFilteredContacts();

  return (
    <List>
      {contactsItems.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//       createdAt: PropTypes.string.isRequired,
//     })
//   ),
// };
