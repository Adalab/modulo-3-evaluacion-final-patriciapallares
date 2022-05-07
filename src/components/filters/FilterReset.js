function FilterReset(props) {

  const handleClick = () =>{
    props.handleFilterReset()

  }
  // queremos que borre el LS, el valor del input, del select del año y de la búsqueda.
  return (<>
    <button onClick={handleClick}>Borrar</button>
  </>)
}

export default FilterReset;