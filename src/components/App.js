import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import getWowApi from '../services/wowsApi';
import Filters from './filters/Filters';
import SceneList from './scene/SceneList';
import SceneDetail from './scene/SceneDetail';
import SceneNotFound from './scene/SceneNotFound';

function App() {
  const [dataScenes, setDataScenes] = useState([]);

  const [filterMovie, setFilterMovie] = useState('');

  const [filterYear, setFilterYear] = useState(0);

  useEffect(() => {
    getWowApi().then((dataFromApi) => {
      setDataScenes(dataFromApi);
    });
  }, []);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  /*

  const handleFilterYear = (value) => {
    if (filterYear.includes(value)) {
      const newYears = filterYear.filter((year) => year !== value);
      setFilterYear(newYears);
      console.log('cumple el if');

    } else {
      setFilterYear([value]);
      console.log('cumple el else');
    }
  };

 */

  const sceneFilters = dataScenes
    .filter((scene) => {
      if (filterMovie === '') {
        return true;
      } else {
        return scene.movie.toLowerCase().includes(filterMovie);
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

  // filter para input película

  // función para obtener los años una única vez
  const getYears = () => {
    const sceneYears = dataScenes.map((scene) => scene.year);
    const uniqueYears = sceneYears.filter((year, index) => {
      return sceneYears.indexOf(year) === index;
    });
    return uniqueYears;
  };

  // código para crear la ruta al timestamp de cada escena
  const { pathname } =useLocation();
  const dataPath = matchPath('/scene/:scenetimestamp', pathname);

  const scenetimestamp = dataPath !== null ? dataPath.params.scenetimestamp : null;

  const sceneFound = dataScenes.find((item) => item.timestamp === scenetimestamp)

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
                />
                <SceneNotFound filterMovie={filterMovie} sceneFilters={sceneFilters}/>
                <SceneList scenes={sceneFilters} />
              </>
            }
          />
          <Route
            path='/scene/:scenetimestamp'
            element={<SceneDetail scene={sceneFound}/>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
