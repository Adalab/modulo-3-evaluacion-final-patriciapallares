import { Link } from 'react-router-dom';
import LS from '../../services/localStorage'
import { useEffect } from 'react';
import styles from '../../styles/detail.scss'
import styles2 from '../../styles/main.scss'


function SceneDetail(props) {
  useEffect(()=>{
    LS.set(props.scene.timestamp, props.scene)
    LS.get(props.scene.timestamp, []);

    console.log('he ocurrido');
  })
  

  return (
    <section className='detail__section'>
      <article className='detail__article'>
        <div className='detail__divIMG'>
        <img className='detail__card__img' alt={props.scene.movie} src={props.scene.poster} />
        </div>
        <div className='detail__divINFO'>
        <h4 className='detail__card__title'>{props.scene.movie}</h4>
        <p className='detail__card__text'>"{props.scene.fullLine}"</p>
        <p className='detail__card__year'>Director: <span className='detail__card__year__bold'>{props.scene.director}</span></p>
        <p className='detail__card__year'>Año: <span className='detail__card__year__bold'>{props.scene.year}</span>  </p>
        <a className='detail__card__link' target='_blank' rel='noreferrer' href={props.scene.audio}>Escuchar audio</a>
        <Link to='/'><button className='detail__card__button'>Volver</button></Link>
        </div>
      </article>
    </section>
  );
}

export default SceneDetail;