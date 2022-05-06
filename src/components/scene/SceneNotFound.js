function SceneNotFound(props) {
  if (props.sceneFilters.length === 0) {
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
