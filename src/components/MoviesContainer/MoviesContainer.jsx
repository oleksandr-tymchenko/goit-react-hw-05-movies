import { Link, useLocation } from 'react-router-dom';
import { MoviesList, MoviesWrap } from './MovisContainer.styled';

export const MoviesContainer = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesWrap>
      <MoviesList>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {name || title}
              </Link>
            </li>
          );
        })}
      </MoviesList>
    </MoviesWrap>
  );
};
