import PropTypes from 'prop-types';
import { Item, ContactName, ContactNumber, Button } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number, id } = contact;
  return (
    <Item>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
