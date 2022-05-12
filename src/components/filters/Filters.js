import FilterMovie from './FilterMovie';
import FilterReset from './FilterReset';
import FilterYear from './FilterYear';
import FilterDirector from './FilterDirector';

import styles from '../../styles/form.scss';

/**
 * Es una función que devuelve una sección con un formulario que tiene una filtro de película, filtro de año y un restablecimiento de filtro.
 */

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className='form__section'>
      <form className='form__form' action='' onSubmit={handleForm}>
       
        <div className='form__form__part'>
          <FilterMovie
            handleFilterMovie={props.handleFilterMovie}
            filterMovie={props.filterMovie}
          />
          <FilterYear
            years={props.years}
            handleFilterYear={props.handleFilterYear}
            filterYear={props.filterYear}
          />
        </div>
        
        <FilterDirector
          handleFilterDirector={props.handleFilterDirector}
          filterDirector={props.filterDirector}
        />

        <FilterReset handleFilterReset={props.handleFilterReset} />
      </form>
    </section>
  );
}
export default Filters;
