import Scene from './Scene';
import styles from '../../styles/scene.scss';

/**
 * Devuelve una lista de escenas si hay escenas para mostrar, de lo contrario, devuelve un mensaje de loading. Si no hay escenas filtradas para mostrar, devuelve un mensaje de advertencia
 
  Queremos que el mensaje de advertencia se adapte a lo que la user está buscando. 
  Si filtra por movie y no hay coincidencias: No hay ningún nombre de película que coincida con la palabra: tal
  Si filtra por director y no hay coincidencias: No hay ninguna película dirigida por: tal

 */

function SceneList(props) {
  if (props.dataScenes.length === 0) {
    return <p className='scene__warning'>Cargando datos</p>;
  }

  if (props.movieSelectedIndex === -1) {
    return (
      <p className='scene__warning'>
        No hay ningún nombre de película que coincida con la palabra:
        <span className='scene__warning__italics'> "{props.filterMovie}"</span>
      </p>
    );
  }

  if (props.sortedScenes.length === 0 && props.directorSelectedIndex === -1) {
    return (
      <p className='scene__warning'>
        No hay ninguna película dirigida por
        <span className='scene__warning__italics'> {props.filterDirector}</span>
      </p>
    );
  }

  // if (props.sortedScenes.length === 0) {
  //   return (
  //     <p className='scene__warning'>
  //       No hay ningún nombre de película que coincida con la palabra:
  //       <span className='scene__warning__italics'>"{props.filterMovie}"</span>
  //     </p>
  //   );
  // }

  const sceneElements = props.sortedScenes.map((scene, index) => {
    return (
      <li className='scene__card' key={index}>
        <Scene scene={scene} />
      </li>
    );
  });

  return (
    <>
      <section className='scene__section'>
        <ul className='scene__cards'> {sceneElements}</ul>
      </section>
    </>
  );
}

export default SceneList;
