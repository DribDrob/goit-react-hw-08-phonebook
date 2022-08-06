import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/slice';
import { Item, ContactName, ContactNumber, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  return (
    <Item>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
