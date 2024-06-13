import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contacts.module.css';

function Contact({ name, number, id, onDelete }) {
  return (
    <li className={css.li}>
      <div>
      <h3 className={css.h3}>
        <FaUser className={css.icon} />
        {name}
      </h3>
      <p className={css.p}>
        <FaPhoneAlt className={css.icon} />
        {number}
      </p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default Contact;
