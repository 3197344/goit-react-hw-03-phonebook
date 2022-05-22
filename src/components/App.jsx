import React, { Component } from 'react';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

delContact = contactId => {
    const state = this.state;
    const visibleContacts = state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({ contacts: visibleContacts });
    return visibleContacts;
  };


submitHandler = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));
  };

handleChange = event => {
const { name, value } = event.target;
this.setState({ [name]: value });
};

onFilter = filter => {
    console.log('filter', filter);
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div >
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.submitHandler} contacts={contacts}/>
        </Section>

        <Section title="Contacts">
          <Filter
            options={this.state}
            filter={filter} onChange={this.onFilter}
            onChangeInput={this.handleChange}
          />

          <ContactList
          contacts={visibleContacts}
          delContact={this.delContact}/>
        </Section>
      </div>
    );
  }
}

export default App;