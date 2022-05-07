import Scene from './Scene';
import styles from '../../styles/main.scss'

function SceneList(props) {
  if (props.dataScenes.length === 0) {
    return <p>Cargando datos</p>;
  }

  if (props.sortedScenes.length === 0) {
    return (
      <p>
        No hay ningún nombre de película que coincida con la palabra: {props.filterMovie}
      </p>
    );
  }

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
