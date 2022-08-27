import { useContacts } from 'hooks/useContacts';
import { FilterField } from './ContactFilter.styled';

export const ContactFilter = () => {
  const { filter, setFilter } = useContacts();

  return (
    <FilterField>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      />
    </FilterField>
  );
};
