import React from "react";
import styles from "./Contacts.module.css";
const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            {name}: {number}
            <button
              className={styles.button}
              type="button"
              onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Contacts;