import { useEffect, useState } from 'react';
import React from 'react';
import getMovies from 'servises/api';
import { MoviesContainer } from 'components/MoviesContainer/MoviesContainer';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies('trending/all/day', {});
        setMovies([...data.results]);
      } catch (error) {
        setIsError(true);
      }
    }

    fetchMovies();
  }, []);
  return (
    <>
      {isError && (
        <ErrorMessage>Sorry, something wrong. {isError}</ErrorMessage>
      )}
      <h1> The best daily movies for you</h1>
      <MoviesContainer movies={movies} />;
    </>
  );
};

export default Home;
