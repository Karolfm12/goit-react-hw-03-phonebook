const FilteredList = props => {
  const { filter, contacts, handleDelete } = props;
  return (
    filter && (
      <>
        <ul>
          {contacts
            .filter(value =>
              value.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((value, index) => (
              <li key={index}>
                {value.name}: {value.tel}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
        </ul>
      </>
    )
  );
};
export default FilteredList;
