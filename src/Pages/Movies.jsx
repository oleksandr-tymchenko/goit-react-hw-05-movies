import React from 'react';
import { useEffect, useState } from 'react';
import getMovies from 'servises/api';
import { MoviesContainer } from 'components/MoviesContainer/MoviesContainer';
import SearchBar from 'components/SearchBar/SearchBar';
import { useStateContext } from 'Context/StateContext';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const Movies = () => {
  const [isError, setIsError] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const { searchParams } = useStateContext();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovies('search/movie', {
          query: `${searchQuery}`,
          include_adult: false,
          page: 1,
        });
        setSearchedMovies([...data.results]);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMovieDetails();
  }, [searchQuery]);

  return (
    <>
      {isError && (
        <ErrorMessage>Sorry, something wrong. {isError}</ErrorMessage>
      )}

      <SearchBar />
      <MoviesContainer movies={searchedMovies} />
    </>
  );
};

export default Movies;
