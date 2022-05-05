function FilterMovie(props){
  const handleInput =(ev)=>{
    ev.preventDefault()
    const inputValue = ev.target.value;
    props.handleFilterMovie(inputValue)
    console.log(inputValue);
  }

  return(<>
  <label>Película</label>
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