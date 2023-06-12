import { useStateContext } from 'Context/StateContext';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import getMovies from 'servises/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const { movies, setMovies } = useStateContext();
  console.log('movies', movies);

  const searchedMovie = movies.find(movie => Number(movieId) === movie.id);
  console.log('searchedMovie', searchedMovie);
  //   useEffect(() => {
  //     console.log(id);
  //   }, [id]);
  //   console.log(id);

  // const [movies, setMovies] = useState([]);
  // const [searchedMovie, setSearchedMovie] = useState({});
  // const [error, setIsError] = useState(false);
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
  //       const search = movies.find(movie => Number(movieId) === movie.id);
  //       setSearchedMovie(search);

  //       // setShowBtn(page < Math.ceil(data.total / 12));
  //     })
  //     .catch(error => {
  //       setIsError(true);
  //     });
  //   //   .finally(() => {
  //   //     setIsLoading(false);
  //   //   });
  // }, []);

  //   console.log(movies);
  //   const searchedMovie = movies.find(movie => Number(movieId) === movie.id);
  // console.log(searchedMovie);
  return (
    <div>
      <div>
        <h2>{searchedMovie.title || searchedMovie.name}</h2>

        <img src={searchedMovie.poster_path} alt=""></img>
        <h3>Overview</h3>
        <p>{searchedMovie.overview} </p>
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
