import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import FilteredList from './FilteredList';

class App extends Component {
  state = { contacts: [], filter: '', name: '', number: '' };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = this.state.contacts.some(
      contact => contact.name === this.state.name
    );
    if (!isDuplicate) {
      this.setState(
        prevState => ({
          contacts: [
            ...prevState.contacts,
            { name: this.state.name, tel: this.state.number },
          ],
          name: '',
          number: '',
          filter: '',
        }),
        () => {
          localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
      );
    } else {
      alert('Ten kontakt już istnieje');
    }
    e.target.reset();
  };

  handleOnChange = (e, type) => {
    if (type === 'text') {
      this.setState({ name: e.target.value });
    }
    if (type === 'tel') {
      this.setState({ number: e.target.value });
    }
    if (type === 'filter') {
      this.setState({ filter: e.target.value });
    }
  };

  handleDelete = index => {
    const updatedContacts = [...this.state.contacts];
    updatedContacts.splice(index, 1);

    // Update the state with the new contacts array
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          phone={this.state.number}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
        />
        <ContactList
          contacts={this.state.contacts}
          handleDelete={this.handleDelete}
        />
        <Filter
          filter={this.state.filter}
          handleOnChange={this.handleOnChange}
        />
        <FilteredList
          filter={this.state.filter}
          contacts={this.state.contacts}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
