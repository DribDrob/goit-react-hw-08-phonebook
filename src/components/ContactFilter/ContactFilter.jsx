import { FilterField } from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <FilterField>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange} />
    </FilterField>
  );
};
