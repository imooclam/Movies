import { useSelector, useDispatch } from 'react-redux';

import { allMovieSelector, changeQuery } from '../feature/movieSlice';

const SearchForm = () => {
  const { query, error } = useSelector(allMovieSelector);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    dispatch(changeQuery(e.target.value));
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <section className="form-row">
        <label htmlFor="search">Search to favorite Movie</label>
        <input
          type="text"
          className="form-input"
          name="search"
          value={query}
          id="search"
          onChange={handleChange}
        />
        {/* {error.show && <div className="error">{error.Mes}</div>} */}
        {/* {error.show && <div className="error">Movie not found!</div>} */}
        {error.show && (
          // <div className="error">{JSON.stringify(error.Mes.Mes)}</div>
          <div className="error">{error.Mes.Mes}</div>
        )}
      </section>
    </form>
  );
};
export default SearchForm;
