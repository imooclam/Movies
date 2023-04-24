export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.MOVIE_API_KEY
}`;
console.log(API_ENDPOINT);

// https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}
