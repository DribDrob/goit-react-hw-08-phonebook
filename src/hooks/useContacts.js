import { useState, useMemo } from 'react';
import { useGetContactsQuery } from 'redux/slice';

export const useContacts = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [contacts, filter]);
  return {
    filter,
    setFilter,
    filteredContacts,
    isFetching,
  };
};