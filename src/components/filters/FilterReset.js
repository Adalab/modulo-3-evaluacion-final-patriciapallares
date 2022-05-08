/**
 * Representa un botón que, cuando se hace clic, llama a la función handleFilterReset.
 * 
 */

function FilterReset(props) {
  const handleClick = () => {
    props.handleFilterReset();
  };
  return (
    <div className='form__div'>
      <button className='form__button' onClick={handleClick}>
        Borrar
      </button>
    </div>
  );
}

export default FilterReset;
