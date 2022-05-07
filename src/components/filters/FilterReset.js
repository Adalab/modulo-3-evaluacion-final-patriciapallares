function FilterReset(props) {

  const handleClick = () =>{
    props.handleFilterReset()

  }
  // queremos que borre el LS, el valor del input, del select del año y de la búsqueda.
  return (<div className='form__div'>
    <button className='form__button' onClick={handleClick}>Borrar</button>
  </div>)
}

export default FilterReset;