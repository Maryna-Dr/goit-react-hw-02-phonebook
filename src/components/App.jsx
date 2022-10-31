import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsList, Form } from 'components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSumbit={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
