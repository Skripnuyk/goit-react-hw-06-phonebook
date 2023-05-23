import { Wrap } from 'App.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { contactValue, filterValue } from 'redux/store';
import { add } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactValue);
  const filter = useSelector(filterValue);

  const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const addContact = name => {
    contacts.find(contact => contact.name.toLowerCase() === name.name.toLowerCase()) ? alert(`${name.name} is already in contacts`)
      : dispatch(add(name));
  };
  
  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    addContact(values);
    resetForm();
  };

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm handleSubmit={handleSubmit} />
      <Section title={`Contacts`}>
        <Filter />
        <ContactList contacts={filtredContacts} />
      </Section>
    </Wrap>
  );
};
