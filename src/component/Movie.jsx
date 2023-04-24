// import axios from 'axios';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  API_ENDPOINT,
  allMovieSelector,
  showLoading,
  hideLoading,
  movies,
  errors,
} from '../feature/movieSlice';

console.log(API_ENDPOINT);

import { Link } from 'react-router-dom';

export const Movie = () => {
  const { isLoading, query, wholeMovie } = useSelector(allMovieSelector);
  const dispatch = useDispatch();

  // console.log(isLoading);

  const fetchData = async url => {
    dispatch(showLoading());
    try {
      // const res = await axios(url);
      // console.log(res);
      // return res.data;
      // const res = await fetch(url);
      // const data = await res.json();
      const response = await fetch(url);
      const data = await response.json();
      // console.log(res);
      console.log(data);

      if (data.Response === 'True') {
        dispatch(movies(data.Search));
        dispatch(errors({ Mes: '' }));
      } else {
        dispatch(errors({ Mes: data.Error }));
      }
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`${API_ENDPOINT}&s=${query}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <article className="movies">
      {wholeMovie.map(movie => {
        const {
          Title: title,
          Year: year,
          imdbID: id,
          Type: type,
          Poster: img,
        } = movie;

        // console.log(movie);
        return (
          <Link to={`/movie/${id}`} key={id} className="movie">
            {' '}
            <article>
              <img src={img === 'N/A' ? url : img} alt={title} />
              <section>
                <h4>
                  {title}
                  {type}
                </h4>
                <p>{year}</p>
              </section>
            </article>
          </Link>
        );
      })}
    </article>
  );
};

export default Movie;
