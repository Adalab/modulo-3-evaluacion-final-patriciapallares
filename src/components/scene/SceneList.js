import Scene from './Scene';

function SceneList(props) {
  const sceneElements = props.scenes.map((scene, index) => {
    return (
      <li className='card' key={index}>
        <Scene scene={scene} />
      </li>
    );
  });

  return (
    <>
      <section>
        <ul className='cards'> {sceneElements}</ul>
      </section>
    </>
  );
}

export default SceneList;
