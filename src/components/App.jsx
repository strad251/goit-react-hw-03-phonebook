import { Component } from "react";
import { nanoid } from 'nanoid'

import { ContactForm } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

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
  
  
addContact = (data) => {
    const newContact = {
      ...data,
      id: nanoid()
    };

  const isExist = this.state.contacts.find(contact => {
    return contact.name === data.name;
  });
  if (isExist) {
    alert('contact already exists');
    return
  }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }))
  };

    deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
    };
  
    filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().trim().includes(filter);
    });
    };
  
  filterChange = input => {
    this.setState({ filter: input})
  }
  

  render() {
 
    const contacts = this.filterContacts();

    return (

      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterInput={ this.filterChange} />
        <Contacts
          contacts={contacts}
          deleteContact={this.deleteContact} />
      </div>
    )
  }
}
