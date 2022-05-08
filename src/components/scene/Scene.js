import { Link } from 'react-router-dom';

/**
 * Devuelve un enlace (a la página de la escena con la marca de tiempo como parámetro) que contiene una imagen, un título, un texto y un año
 */

function Scene(props) {
  return (
    <Link className='scene__card__link' to={`/scene/${props.scene.timestamp}`}>
      <img
        className='scene__card__img'
        alt={props.scene.movie}
        src={props.scene.poster}
      />
      <h4 className='scene__card__title'>{props.scene.movie}</h4>
      <p className='scene__card__text'>"{props.scene.fullLine}"</p>
      <p className='scene__card__year'>Año: {props.scene.year}</p>
    </Link>
  );
}

export default Scene;
