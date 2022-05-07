function SceneNotFound(props) {
  if (props.sortedScenes.length === 0) {
    return (
      <div>
        <p>
          No hay ningún nombre de película que coincida con la palabra:{' '}
          {props.filterMovie}
        </p>
      </div>
    );
  }
}
export default SceneNotFound;
