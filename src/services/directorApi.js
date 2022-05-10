const directorsApi = () => {
  
  return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/directors')
    .then((response) => response.json())
    .then((data) => {
      const directors = data;
      return directors;
    });
};

export default directorsApi;