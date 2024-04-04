const ContactForm = props => {
  const { handleSubmit, handleOnChange, number, name } = props;

  return (
    <>
      <h3>Name</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={e => handleOnChange(e, 'text')}
          // required
        />
        <h3>Phone</h3>
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={e => handleOnChange(e, 'tel')}
          required
        ></input>
        <br></br>
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};

export default ContactForm;
