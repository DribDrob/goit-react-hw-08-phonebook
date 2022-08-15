import { FilterField } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterField>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange} />
    </FilterField>
  );
};
