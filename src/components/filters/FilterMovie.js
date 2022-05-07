function FilterMovie(props) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    props.handleFilterMovie(inputValue);
  };

  return (
    <div className='form__div'>
      <label className='form__text'>Película</label>
      <input
        className=''
        type='text'
        value={`${props.filterMovie}`}
        onChange={handleInput}
        placeholder="Shanghai Knights"
      />
    </div>
  );
}
export default FilterMovie;
