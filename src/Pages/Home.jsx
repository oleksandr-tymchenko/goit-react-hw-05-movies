import { Container } from 'components/App.styled';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import getMovies from 'servises/api';
import { useStateContext } from 'Context/StateContext';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import Movies from './Movies';
// console.log(getMovies);
const Home = () => {
  const { movies, setMovies } = useStateContext();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState('');

  // console.log(movies, setMovies);
  // const [error, setIsError] = useState(false);
  useEffect(() => {
    // if (Movies) {
    //   return;
    // }
    //   setIsLoading(true);
    getMovies('trending/all/day', { append_to_response: 'images' })
      .then(data => {
        setIsEmpty(!data.results.length);
        setMovies([...data.results]);
        // console.log(movies);

        // setShowBtn(page < Math.ceil(data.total / 12));
      })
      .catch(error => {
        setIsError(true);
      });
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }, []);
  console.log(movies);
  return (
    <Container>
      {isEmpty && (
        <ErrorMessage>
          There are no such images ... Try again {isError}
        </ErrorMessage>
      )}
      <h1> The best daily movies for you</h1>
      <ul>
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
      </ul>
    </Container>
  );
};

export default Home;
