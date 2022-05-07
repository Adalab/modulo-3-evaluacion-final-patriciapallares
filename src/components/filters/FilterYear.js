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
    <>
      <label className= 'form__label display-block' htmlFor=''>Año</label>
      <select value={props.FilterYear} onChange={handleSelect}>
        <option value='0'>Selecciona</option> 
        {renderYears()}
      </select>
    </>
  );
};

export default FilterYear;
