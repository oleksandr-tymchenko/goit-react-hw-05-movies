import { useEffect, useState } from 'react';
import React from 'react';

import getMovies from 'servises/api';
import { useStateContext } from 'Context/StateContext';
import { MoviesContainer } from 'components/MoviesContainer/MoviesContainer';
import {
  MoviesList,
  MoviesWrap,
} from 'components/MoviesContainer/MovisContainer.styled';
import { ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
// console.log(getMovies);
const Home = () => {
  const [movies, setMovies] = useState([]);
  // const { movies, setMovies } = useStateContext();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState('');

  // console.log(movies, setMovies);
  // const [error, setIsError] = useState(false);
  useEffect(() => {
    // if (Movies) {
    //   return;
    // }
    //   setIsLoading(true);
    getMovies('trending/all/day', {})
      .then(data => {
        // setIsEmpty(!data.results.length);
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
  return <MoviesContainer movies={movies} />;
  // return (
  //   <MoviesWrap>
  //     {isEmpty && (
  //       <ErrorMessage>
  //         There are no such images ... Try again {isError}
  //       </ErrorMessage>
  //     )}
  //     <h1> The best daily movies for you</h1>
  //     <MoviesList>
  //       {movies.map(({ id, title, name }) => {
  //         return (
  //           <li key={id}>
  //             <Link to={`/movies/${id}`}>
  //               {/* <img src={poster_path} alt=""></img> */}
  //               {name || title}
  //             </Link>
  //           </li>
  //         );
  //       })}
  //     </MoviesList>
  //   </MoviesWrap>
  // );
};

export default Home;
