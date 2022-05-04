import { useEffect, useState } from 'react';
import getWowApi from '../services/wowsApi';
import SceneList from './scene/SceneList';

function App() {

  const [dataScenes, setDataScenes] = useState([])


  useEffect(()=>{
    getWowApi().then((dataFromApi) => {
      setDataScenes(dataFromApi);
      console.log(dataFromApi);
    })
  }, []);



  return (<>
  
  <h1 className="title--big">Escenas wow de Wowen Wilson</h1>
  <div>
    <SceneList scenes={dataScenes}/>
  </div>

  </>);
}

export default App;
