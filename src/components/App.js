import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getWowApi from '../services/wowsApi';
import Filters from './filters/Filters';
import SceneList from './scene/SceneList';
import SceneDetail from './scene/SceneDetail';

import LS from '../services/localStorage';

import styles from '../styles/page.scss';

function App() {
  // 3 variables de estado
  const [dataScenes, setDataScenes] = useState([]);

  const [filterMovie, setFilterMovie] = useState(LS.get('filterMovie', []));

  const [filterYear, setFilterYear] = useState(0);

  const [filterDirector, setFilterDirector] = useState('all');

  // 2 useEffect
  /* Un gancho que se llama cuando se monta el componente. */
  useEffect(() => {
    if (dataScenes.length === 0) {
      getWowApi().then((dataFromApi) => {
        setDataScenes(dataFromApi);
      });
    }
  }, []);

  /* Guardando el valor de filterMovie en el almacenamiento local. */
  useEffect(() => {
    LS.set('filterMovie', filterMovie);
  }, [filterMovie]);

  // 6 funciones

  // funciones manejadoras de las variables de estado
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  const handleFilterReset = () => {
    setFilterMovie('');
    setFilterYear(0);
    setFilterDirector('all');
  };

  const handleFilterDirector = (value) => {
    setFilterDirector(value);
  };

  // función para filtrar los datos de la API
  const sceneFilters = dataScenes
    .filter((scene) => {
      if (filterMovie === '') {
        return true;
      } else {
        return scene.movie
          .toLowerCase()
          .includes(filterMovie.toString().toLowerCase().trim());
      }
    })
    .filter((scene) => {
      if (filterYear === 0) {
        return true;
      } else if (filterYear === scene.year) {
        return true;
        // return filterYear.includes(scene.year);
      } else {
        return false;
      }
    })
    .filter((scene) => {
      if (filterDirector === 'all') {
        return true;
      } else {
        return scene.director
          .toLowerCase()
          .includes(filterDirector.toString().toLowerCase());
      }
    });

  // función para comparar el orden alfabético:
  const compareByName = (sceneA, sceneB) => {
    if (sceneA.movie > sceneB.movie) {
      return 1;
    }
    if (sceneA.movie < sceneB.movie) {
      return -1;
    }
    return 0;
  };

  const sortedScenes = sceneFilters.sort(compareByName);

  // función para obtener los años una única vez
  const getYears = () => {
    const sceneYears = dataScenes.map((scene) => scene.year);
    const uniqueYears = sceneYears.filter((year, index) => {
      return sceneYears.indexOf(year) === index;
    });
    return uniqueYears;
  };

  // código para crear la ruta al timestamp de cada escena
  const { pathname } = useLocation();
  const dataPath = matchPath('/scene/:scenetimestamp', pathname);
  const scenetimestamp =
    dataPath !== null ? dataPath.params.scenetimestamp : null;
  const sceneFound = dataScenes.find(
    (item) => item.timestamp === scenetimestamp
  );

  // función para comprobar si un director está o no entre el array de sorted ¿?

  const directorSelectedIndex = sortedScenes.findIndex(
    (item) => item.director === filterDirector
  );

  console.log('director' + directorSelectedIndex);

  // función para comprobar si un movie está o no entre el array de sorted ¿?

  const movieSelectedIndex = dataScenes.findIndex((item) =>
    item.movie.toLowerCase().includes(filterMovie.toLowerCase())
  );

  return (
    <>
      <h1 className='page__header'>Wowen Wilson's WOW scenes</h1>
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  filterMovie={filterMovie}
                  handleFilterYear={handleFilterYear}
                  filterYear={filterYear}
                  years={getYears()}
                  handleFilterReset={handleFilterReset}
                  handleFilterDirector={handleFilterDirector}
                  filterDirector={filterDirector}
                />
                <SceneList
                  filterMovie={filterMovie}
                  sortedScenes={sortedScenes}
                  dataScenes={dataScenes}
                  movieSelectedIndex={movieSelectedIndex}
                  directorSelectedIndex={directorSelectedIndex}
                  filterDirector={filterDirector}
                />
              </>
            }
          />
          <Route
            path='/scene/:scenetimestamp'
            element={<SceneDetail scene={sceneFound} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
