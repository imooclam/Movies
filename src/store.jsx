import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './feature/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
});
