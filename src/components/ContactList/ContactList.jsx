import React from "react";
import Contacts from "../Contacts/Contacts";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        <Contacts contacts={contacts} onDeleteContact={onDeleteContact} />
      </ul>
    </>
  );
};
export default ContactList;
