//
// https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50

const getWowApi = () => {
  
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((scene) => {
        return {
          movie: scene.movie,
          year: scene.year,
          poster: scene.poster,
          fullLine: scene.full_line,
          //ID potencial:
          timeStamp: scene.timestamp,
        };
      });
      return dataClean;
    });
};

export default getWowApi;
