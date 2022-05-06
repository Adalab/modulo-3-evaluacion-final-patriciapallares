import { Link } from 'react-router-dom';

function SceneDetail(props) {
  return (
    <article>
      <img className='' alt={props.scene.movie} src={props.scene.poster} />
      <h4 className='card__title'>{props.scene.movie}</h4>
      <p className='card__description'>"{props.scene.fullLine}"</p>
      <p className='card__description'>{props.scene.year}</p>
      <p className='card__description'>{props.scene.director}</p>
      <a target='_blank' rel='noreferrer' href={props.scene.audio}>Escuchar audio</a>
      <Link to='/'><button>Volver</button></Link>
    </article>
  );
}

export default SceneDetail;