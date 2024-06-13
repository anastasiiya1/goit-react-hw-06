import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({id, name, number}) => {
  const dispatch = useDispatch();

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
      <button className={css.button} onClick={()=> dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;