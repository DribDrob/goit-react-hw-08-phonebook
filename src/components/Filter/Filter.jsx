import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilterValue } from 'redux/slice';
import { FilterField } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const setFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <FilterField>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={setFilter} />
    </FilterField>
  );
};
