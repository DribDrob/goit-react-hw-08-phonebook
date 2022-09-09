import { IconButton, InputBase, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/contactsSlice';
import SearchIcon from '@mui/icons-material/Search';
// import { FilterField } from './ContactFilter.styled';

export const ContactFilter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search ..."
        value={filter}
        inputProps={{ 'aria-label': 'search' }}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Paper>
  );
};
