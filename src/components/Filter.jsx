const Filter = props => {
  const { filter, handleOnChange } = props;
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="filter"
        value={filter}
        onChange={e => handleOnChange(e, 'filter')}
      />
    </>
  );
};
export default Filter;
