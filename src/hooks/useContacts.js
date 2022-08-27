import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {  contactsSelectors } from 'redux/contacts';

export const useContacts = () => {
   const contacts = useSelector(contactsSelectors.getContacts);
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
  };
};