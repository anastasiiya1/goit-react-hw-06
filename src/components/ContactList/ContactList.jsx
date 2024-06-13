import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css'

function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} onDelete={onDelete}/>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
