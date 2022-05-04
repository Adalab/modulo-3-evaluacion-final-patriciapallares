function Scene(props) {
  return (
    <>
      <img className='' alt={props.scene.movie} src={props.scene.poster} />
      <h4 className="card__title">{props.scene.movie}</h4>
      <p className="card__description">{props.scene.fullLine}</p>
      <p className="card__description">{props.scene.year}</p>
    </>
  );
}

export default Scene;
