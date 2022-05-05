import { useEffect, useState } from 'react';
import getWowApi from '../services/wowsApi';
import Filters from './filters/Filters';
import SceneList from './scene/SceneList';

function App() {
  const [dataScenes, setDataScenes] = useState([]);

  const [filterMovie, setFilterMovie] = useState('');

  useEffect(() => {
    getWowApi().then((dataFromApi) => {
      setDataScenes(dataFromApi);
      console.log(dataFromApi);
    });
  }, []);

  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };

  const sceneFilters = dataScenes.filter((scene) => {
    // return filterMovie === '' ? true : scene.movie === filterMovie;

    if (filterMovie === ''){
      return true
    } else {
      return scene.movie.toLowerCase().includes(filterMovie)
    }
  });


  return (
    <>
      <h1 className='title--big'>Escenas wow de Wowen Wilson</h1>
      <div>
        <Filters
          handleFilterMovie={handleFilterMovie}
          filterMovie={filterMovie}
        />

        <SceneList scenes={sceneFilters} />
      </div>
    </>
  );
}

export default App;
