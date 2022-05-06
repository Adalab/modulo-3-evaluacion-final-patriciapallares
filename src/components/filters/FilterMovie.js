function FilterMovie(props){

  const handleInput =(ev)=>{
    const inputValue =  ev.target.value;
    props.handleFilterMovie(inputValue)
  }

  return(<>
  <label className='form__label display-block'>Película</label>
  <input 
  type='text'
  value={`${props.filterMovie}`}
  onChange={handleInput}
  />
  </>)
}
export default FilterMovie;