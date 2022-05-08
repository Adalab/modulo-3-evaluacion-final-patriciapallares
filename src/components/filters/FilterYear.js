/**
 * Es una función que devuelve un div con un label y un select.
 * Cuando se hace un cambio, llama a la función handleFilterYear con el valor del input seleccionado.
 */

function FilterYear(props) {
  const handleSelect = (ev) => {
    const selectValue = parseInt(ev.target.value);
    props.handleFilterYear(selectValue);
  };

  const renderYears = () => {
    return props.years.sort().map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };

  return (
    <div className='form__div'>
      <label className='form__text' htmlFor=''>
        Año
      </label>
      <select
        className='form__input'
        value={props.FilterYear}
        onChange={handleSelect}
      >
        <option value='0'>Selecciona</option>
        {renderYears()}
      </select>
    </div>
  );
}

export default FilterYear;
