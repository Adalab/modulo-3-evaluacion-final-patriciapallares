import Scene from './Scene';
import styles from '../../styles/scene.scss'


function SceneList(props) {
  if (props.dataScenes.length === 0) {
    return <p className='scene__warning'>Cargando datos</p>;
  }

  if (props.sortedScenes.length === 0) {
    return (
      <p className='scene__warning'>
        No hay ningún nombre de película que coincida con la palabra: <span className='scene__warning__italics'>{props.filterMovie}</span>
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
