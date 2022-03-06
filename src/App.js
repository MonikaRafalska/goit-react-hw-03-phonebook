import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactFrom";
import ContactList from "./components/ContactList/ContactList";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = { id: nanoid(), name, number };
    contacts.some((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  filterChange = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const getContacts = this.getContacts();
    const { filter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <ContactForm onSubmit={this.addContact} />
          <Filter value={filter} onChange={this.filterChange}></Filter>
          <ContactList
            contacts={getContacts}
            onDeleteContact={this.deleteContact}
          />
        </header>
      </div>
    );
  }
}
App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
export default App;
