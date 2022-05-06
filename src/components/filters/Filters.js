import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  // función para controlar el formulario y su submit AY
  const handleForm =(ev)=>{
    ev.preventDefault()
  }

  return (
    <section className='col2'>
      <form action='' onSubmit={handleForm}>
        <FilterMovie handleFilterMovie={props.handleFilterMovie}
        filterMovie={props.filterMovie}
        />

        <FilterYear years={props.years}
        handleFilterYear={props.handleFilterYear}
        filterYear={props.filterYear}
        />


      </form>
    </section>
  );
}
export default Filters;
