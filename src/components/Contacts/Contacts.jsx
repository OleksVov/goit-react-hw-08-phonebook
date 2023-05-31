import React from "react";
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useSelector } from "react-redux";
import {getContacts, getFilter} from 'redux/selectors';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "redux/contactOperations";
import { Modal } from "components/Modal/Modal";


const filteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
)}


const Contacts = ({onDelete}) => {
    
const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);
const filterOfContacts = filteredContacts(contacts, filter)

const dispatch = useDispatch();

const[showModal, setShowModal] = useState(false);
const[updateId, setUpdateId] = useState(null);
const[updateName, setUpdateName] = useState('');
const[updateNumber, setUpdateNumber] = useState('');




const openModal = (name, number, id) => {
  setShowModal(true);
  setUpdateId(id);
  setUpdateName(name);
  setUpdateNumber(number);
}

const closeModal = () => {
  setShowModal(false);
}

const handleNameUpdate = (event) => {
  setUpdateName(event.target.value);
}

const handleNumberUpdate = (event) => {
  setUpdateNumber(event.target.value);
}

const handleUpdateContact = (event) => {
  event.preventDefault();
  dispatch(updateContact({ id: updateId, name: updateName, number: updateNumber }));
  closeModal();
}


    return (
        <div>
          <ul className={css.list}>
        {filterOfContacts.map(({id, name, number}) => (
          <li
          className={css.contactItem}
          key={id}>
            <p className={css.nameContact}>{name}: {number}</p>
           <div className={css.buttonBox}>
           <button  className={css.button} type="button" onClick={() => openModal(name, number, id)}>Update</button>
            <button  className={css.button} type="button" onClick={() => onDelete(id)}>Delete</button>
           </div>
          </li>
        ))}
        
       </ul>
       {showModal && (<Modal onCloseModal={closeModal}>
        <div className={css.boxForm} >
        <form className={css.form} onSubmit={handleUpdateContact}>
             <input
         type="text"
         name="name"
         value={updateName}
         onChange={handleNameUpdate}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required
        />
            <input
        type="tel"
        name="number"
        value={updateNumber}
        onChange={handleNumberUpdate}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        />
        <button className={css.button} type="submit">Update</button>
            </form>
        </div>

        <button  className={css.button} type="button" onClick={closeModal}>Close</button>
       </Modal>)}
        </div>
        )
}


export default Contacts;

Contacts.propTypes = {
      onDelete: PropTypes.func.isRequired,
  };