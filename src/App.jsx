import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import SearchBox from 'components/SearchBox/SearchBox';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';
import initialContacts from './contacts.json';

const App = () => {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });

  const [search, setSearch] = useState("");


  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const removeContact = (contactId) => {
    setContacts(prevContacts => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  const searchedContact = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch}/>
      <ContactList contacts={searchedContact} onDelete={removeContact}/>
    </div>
  );
};

export default App;
