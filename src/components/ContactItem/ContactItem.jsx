// import PropTypes from 'prop-types';
import { useRemoveContactMutation } from 'redux/slice';
// import { useDispatch } from 'react-redux';
// import { removeContact } from 'redux/slice';
import { Item, ContactName, ContactNumber, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const [removeContact, { isLoading: isRemoving }] = useRemoveContactMutation();

  return (
    <Item>
      <ContactName>{name}</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <Button
        disabled={isRemoving}
        type="button"
        onClick={() => removeContact(id)}
      >
        Delete
      </Button>
    </Item>
  );
};

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };
