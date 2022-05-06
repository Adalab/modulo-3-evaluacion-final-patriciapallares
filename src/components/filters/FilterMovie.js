function FilterMovie(props){

  const handleInput =(ev)=>{
    const inputValue =  ev.target.value;
    props.handleFilterMovie(inputValue)
  }

  return(<>
  <label className='form__label display-block'>Película</label>
  <input 
  type='text'
  // creo que no me va a hacer falta
  // id={props.id}
  value={props.FilterMovie}
  onChange={handleInput}
  />
  </>)
}
export default FilterMovie;