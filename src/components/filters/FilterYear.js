function FilterYear(props) {
  const handleSelect = (ev) => {
    const selectValue = parseInt(ev.target.value);
    props.handleFilterYear(selectValue)
  }
  
  // creo que me tocará cambiar el value para controlar el estado...
  const renderYears = () => {
    return props.years.sort().map((year, index) => {
      return <option key={index} value={year}>{year}</option>;
    });
  };


  return (
    <div className='form__div'>
      <label className= 'form__text' htmlFor=''>Año</label>
      <select className='form__input' value={props.FilterYear} onChange={handleSelect}>
        <option value='0'>Selecciona</option> 
        {renderYears()}
      </select>
    </div>
  );
};

export default FilterYear;
