import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  API_ENDPOINT,
  allMovieSelector,
  showLoading,
  hideLoading,
  single,
  errors,
} from '../feature/movieSlice';
import { Link, useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams();
  const { isLoading, error, singleMovie } = useSelector(allMovieSelector);
  const dispatch = useDispatch();

  const fetchSingleMovie = async url => {
    dispatch(showLoading());
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      if (data.Response === 'True') {
        dispatch(single(data));
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
    fetchSingleMovie(`${API_ENDPOINT}&i=${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="error">
        <h1>{error.Mes.Mes}</h1>
        <Link to="/" className="btn">
          {' '}
          Back to home
        </Link>
      </div>
    );
  }
  // console.log(singleMovie);
  const { Poster: poster, Title: title, Plot: plot, Year: year } = singleMovie;

  return (
    <article className="single-movie">
      <img src={poster} alt={title} />
      <section className="single-movie-info">
        <h3>{title}</h3>
        <h3>{plot}</h3>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          {' '}
          Back to home
        </Link>
      </section>
    </article>
  );
};
export default Movie;
