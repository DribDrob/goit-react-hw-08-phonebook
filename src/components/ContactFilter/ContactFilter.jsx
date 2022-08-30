import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { FilterField } from './ContactFilter.styled';

export const ContactFilter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <FilterField>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </FilterField>
  );
};
