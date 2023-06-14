import React from 'react';

import { useEffect, useState } from 'react';

import getMovies from 'servises/api';
import { MoviesContainer } from 'components/MoviesContainer/MoviesContainer';
import SearchBar from 'components/SearchBar/SearchBar';
import { useStateContext } from 'Context/StateContext';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setIsError] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const { searchParams } = useStateContext();
  console.log(searchParams.get('query'));
  const searchQuery = searchParams.get('query') ?? '';
  // const updateQueryString = e => {
  //   // e.preventDefault();
  //   setQuery(e.target.value);
  //   console.log(typeof query);

  //   // const searchValue = e.target.value;
  // };

  useEffect(() => {
    if (!searchQuery) return;
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovies('search/movie', {
          query: `${searchQuery}`,
          include_adult: false,
          page: 1,
        });
        console.log('data', data);
        setSearchedMovies([...data.results]);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMovieDetails();
  }, [searchQuery]);
  // useEffect(() => {
  //   //   if (!value) {
  //   //     return;
  //   //   }
  //   //   setIsLoading(true);
  //   getMovies('trending/all/day', {})
  //     .then(data => {
  //       // setIsEmpty(!data.hits.length);
  //       setMovies([...data.results]);
  //       // console.log(movies);

  //       // setShowBtn(page < Math.ceil(data.total / 12));
  //     })
  //     .catch(error => {
  //       setIsError(true);
  //     });
  //   //   .finally(() => {
  //   //     setIsLoading(false);
  //   //   });
  // }, []);
  // return (
  //   <div>
  //     <input type="text" value={query} onChange={updateQueryString} />
  //     {/* <button onClick={() => setSearchParams({ c: 'hello' })}>Change sp</button> */}
  //   </div>
  // );

  return (
    <>
      <SearchBar />
      <MoviesContainer movies={searchedMovies} />
    </>
  );
  // return <MoviesContainer movies={movies} />;
};

export default Movies;
