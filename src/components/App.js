import { Wrap, AppTitle, SecondTitle } from 'App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {

  return (
    <Wrap>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm />
        <SecondTitle>Contacts</SecondTitle>
        <Filter />
        <ContactList/>
    </Wrap>
  );
};
