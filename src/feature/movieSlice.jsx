import { createSlice } from '@reduxjs/toolkit';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.MOVIE_API_KEY
}`;
console.log(API_ENDPOINT);
// # test URL
// # http://www.omdbapi.com/?apikey=a9451bb7&s=batman
const initialState = {
  isLoading: true,
  error: { show: false, Mes: '' },
  query: 'click',
  wholeMovie: [],
  singleMovie: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    showLoading: state => {
      state.isLoading = true;
    },
    hideLoading: state => {
      state.isLoading = false;
    },
    movies: (state, action) => {
      state.wholeMovie = action.payload;
    },
    single: (state, action) => {
      state.singleMovie = action.payload;
    },
    errors: (state, action) => {
      state.error = {
        show: true,
        Mes: action.payload,
      };
    },
    changeQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const allMovieSelector = store => store.movie;

export const { showLoading, hideLoading, movies, errors, changeQuery, single } =
  movieSlice.actions;
export default movieSlice.reducer;
