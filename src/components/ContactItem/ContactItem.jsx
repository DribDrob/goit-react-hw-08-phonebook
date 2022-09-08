import { Fab, ListItem, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
// import { Item, ContactName, ContactNumber, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const isContactsLoading = useSelector(contactsSelectors.isContactsLoading);
  const dispatch = useDispatch();
  return (
    <ListItem>
      <PhoneAndroidRoundedIcon
        color="primary"
        fontSize="large"
        sx={{ mr: 2 }}
      />
      <ListItemText primary={name} />
      <ListItemText primary={number} />
      <Fab color="primary" aria-label="edit" size="small" sx={{ mr: 2 }}>
        <EditIcon />
      </Fab>
      <Fab aria-label="delete" size="small">
        <DeleteIcon
          disabled={isContactsLoading}
          type="button"
          onClick={() => dispatch(contactsOperations.remove(id))}
        />
      </Fab>
    </ListItem>
  );
};
