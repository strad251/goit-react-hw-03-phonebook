import PropTypes from 'prop-types';

import { Component } from 'react';


import css from './Form.module.css'

export class ContactForm extends Component {
    state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.addContact({ ...this.state })
    this.setState({ name: '', number: '' })
  }

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.Form} onSubmit={this.handleSubmit}>
        <label 
        className={css.Label}>
          Name:
          <input 
            className={css.Input}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label 
        className={css.Label}>
          Number:
          <input
            className={css.Input}
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.AddBtn} type='submit'>Add contact</button>
      </form>
    )
  }
}

ContactForm.ropTypes = {
  addContact: PropTypes.func.isRequired,
}