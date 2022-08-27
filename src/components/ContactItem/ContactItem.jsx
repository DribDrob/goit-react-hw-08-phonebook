import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { Item, ContactName, ContactNumber, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const isContactsLoading = useSelector(contactsSelectors.isContactsLoading);
  const dispatch = useDispatch();
  return (
    <Item>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button
        disabled={isContactsLoading}
        type="button"
        onClick={() => dispatch(contactsOperations.remove(id))}
      >
        Delete
      </Button>
    </Item>
  );
};
