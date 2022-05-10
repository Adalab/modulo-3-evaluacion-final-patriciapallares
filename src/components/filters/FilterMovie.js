/**
 * Es una función que devuelve un div con un label y un input.
 * Cuando se hace un cambio, llama a la función handleFilterMovie con el valor del input seleccionado.
 */

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
        placeholder='Por ejemplo: Cars'
      />
    </div>
  );
}
export default FilterMovie;
