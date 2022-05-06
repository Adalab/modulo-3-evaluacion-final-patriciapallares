function SceneNotFound(props) {
  if (props.sceneFilters.length === 0) {
  return (
    <p>
      No hay ningún nombre de película que coincida con la palabra
      {props.filterMovie}
    </p>
  );
}}
export default SceneNotFound;
