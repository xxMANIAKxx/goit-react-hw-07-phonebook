import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './App.module.css';


const App = () => {

  return (
      
    <div className={style.container} >
        <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={style.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
      </div>
  );
};


export default App;
