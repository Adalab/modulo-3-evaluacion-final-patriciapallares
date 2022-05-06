function SceneDetail(props) {
  return (
    <article>
      <img className='' alt={props.scene.movie} src={props.scene.poster} />
      <h4 className='card__title'>{props.scene.movie}</h4>
      <p className='card__description'>"{props.scene.fullLine}"</p>
      <p className='card__description'>{props.scene.year}</p>
      <p className='card__description'>{props.scene.director}</p>
      <a href={props.scene.audio}>Escuchar audio</a>
    </article>
  );
}

export default SceneDetail;