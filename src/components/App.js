import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getWowApi from '../services/wowsApi';
import Filters from './filters/Filters';
import SceneList from './scene/SceneList';
import SceneDetail from './scene/SceneDetail';

import LS from '../services/localStorage';

function App() {
  const [dataScenes, setDataScenes] = useState([]);

  const [filterMovie, setFilterMovie] = useState(LS.get('filterMovie', []));

  const [filterYear, setFilterYear] = useState(0);

  useEffect(() => {
    if (dataScenes.length === 0) {
      getWowApi().then((dataFromApi) => {
        setDataScenes(dataFromApi);
      });
    }
  }, []);

  //Debemos guardar los datos en el local storage en un useEffect para que después de cambiar el local storage esté actualizado.
  //Lee del local storage los datos y guárdalos en el useState para que estén disponibles al arrancar la página.
  useEffect(() => {
    LS.set('filterMovie', filterMovie);
  }, [filterMovie]);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  // reset button function
  /**
   * Establece las variables de estado filterMovie y filterYear en cadenas vacías y 0 respectivamente
   */

  const handleFilterReset = () => {
    setFilterMovie('');
    setFilterYear(0);
  };

  console.log(filterYear);

  const sceneFilters = dataScenes
    // filter para input película
    .filter((scene) => {
      if (filterMovie === '') {
        return true;
      } else {
        return scene.movie
          .toLowerCase()
          .includes(filterMovie.toString().toLowerCase().trim());
      }
    })
    //filter para select año (solución ev intermedia)
    .filter((scene) => {
      if (filterYear === 0) {
        return true;
      } else if (filterYear === scene.year) {
        return true;
        // return filterYear.includes(scene.year);
      } else {
        return false;
      }
    });

  // orden alfabético:

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

  return (
    <>
      <h1 className='title--big'>Escenas wow de Wowen Wilson</h1>
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
                />
                <SceneList
                  filterMovie={filterMovie}
                  sortedScenes={sortedScenes}
                  dataScenes={dataScenes}
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
