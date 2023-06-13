import { Container } from 'components/App.styled';
import { Link } from 'react-router-dom';
import { MoviesList, MoviesWrap } from './MovisContainer.styled';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useState } from 'react';

export const MoviesContainer = ({ movies }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState('');
  return (
    <MoviesWrap>
      {isEmpty && (
        <ErrorMessage>
          There are no such images ... Try again {isError}
        </ErrorMessage>
      )}
      <h1> The best daily movies for you</h1>
      <MoviesList>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
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
