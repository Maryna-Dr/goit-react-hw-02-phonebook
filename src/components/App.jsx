import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsList, Form, Filter } from 'components';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = ({ name, number }) => {
    const checkName = this.state.contacts.find(contact => {
      const nameFound = contact.name.toLowerCase().includes(name.toLowerCase());
      if (!!nameFound) {
        alert(`${name} is already in contacts`);
      }
      return nameFound;
    });

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: !!checkName
        ? [...prevState.contacts]
        : [newContact, ...prevState.contacts],
    }));
  };

  onDeleteContact = idx => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idx),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const { onAddContact, handleFilterChange, onDeleteContact } = this;
    const normalizedFilterValue = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form onSubmit={onAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactsList contacts={visibleContacts} onDelete={onDeleteContact} />
      </div>
    );
  }
}

export default App;
