import { useState, useEffect } from 'react';
import directorsApi from '../../services/directorApi';

function FilterDirector(props) {

  const [directors, setDirectors] = useState([]);

  useEffect(() => {
      directorsApi().then((data) => {
        setDirectors(data);
      });
  }, []);


  const handleSelect =(ev) => {
    const selectValue = (ev.target.value)
    props.handleFilterDirector(selectValue)
  }

  const renderDirectors = () => {
    return  directors.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        );
      });
  };

  return (
    <div className='form__div'>
      <label className='form__text'> Director</label>
      <select 
      className='form__input'
      value={props.filterDirector}
      onChange={handleSelect}
      >
        <option value='all'>Selecciona</option>
        {renderDirectors()}
      </select>
    </div>
  );
}

export default FilterDirector;
