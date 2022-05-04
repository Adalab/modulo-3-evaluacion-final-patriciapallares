import Scene from './Scene';

function SceneList(props) {
  const sceneElements = props.scenes.map((scene) => {
    return (
      <li className='card' key={scene.timeStamp}>
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
