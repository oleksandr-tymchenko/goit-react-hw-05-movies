import React from 'react';

import { useEffect, useState } from 'react';

import getMovies from 'servises/api';
import { MoviesContainer } from 'components/MoviesContainer/MoviesContainer';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setIsError] = useState(false);
  useEffect(() => {
    //   if (!value) {
    //     return;
    //   }
    //   setIsLoading(true);
    getMovies('trending/all/day', {})
      .then(data => {
        // setIsEmpty(!data.hits.length);
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

  return <MoviesContainer movies={movies} />;
};

export default Movies;
