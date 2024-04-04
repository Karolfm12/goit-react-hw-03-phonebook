const ContactList = props => {
  const { contacts, handleDelete } = props;
  return (
    <>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((value, index) => (
          <li key={index}>
            {value.name}: {value.tel}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactList;
