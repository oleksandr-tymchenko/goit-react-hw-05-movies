import { Container } from 'components/App.styled';
import { Link, useLocation } from 'react-router-dom';
import { MoviesList, MoviesWrap } from './MovisContainer.styled';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useState } from 'react';

export const MoviesContainer = ({ movies }) => {
  const location = useLocation();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState('');
  return (
    <MoviesWrap>
      {isEmpty && (
        <ErrorMessage>
          There are no such images ... Try again {isError}
        </ErrorMessage>
      )}
      <MoviesList>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {/* <img src={poster_path} alt=""></img> */}
                {name || title}
              </Link>
            </li>
          );
        })}
      </MoviesList>
    </MoviesWrap>
  );
};
