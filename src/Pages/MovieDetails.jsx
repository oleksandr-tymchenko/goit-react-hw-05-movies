import { useStateContext } from 'Context/StateContext';
import React, { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import getMovies from 'servises/api';
import {
  MovieContainer,
  ImgContainer,
  InformList,
  AddContainer,
} from './MoviDetails.styled';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Loader } from 'components/Loader/Loader';

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w400';

const MovieDetails = () => {
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [isError, setIsError] = useState(false);

  const { searchedMovie, setSearchedMovie } = useStateContext();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovies(`movie/${movieId}`, {});

        setSearchedMovie(data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMovieDetails();
  }, [movieId, setSearchedMovie]);

  const { title, name, poster_path, overview, genres, vote_average } =
    searchedMovie;

  return (
    <div>
      <Link to={backLocationRef.current}> ◀ Go back</Link>

      {isError ? (
        <ErrorMessage>There is no data to this movie {isError}</ErrorMessage>
      ) : (
        <>
          <MovieContainer>
            <ImgContainer>
              <img
                src={baseImgUrl + posterSize + poster_path}
                alt="img"
                width="200"
              ></img>
            </ImgContainer>

            <div>
              <h2>{title || name}</h2>
              <p>User Score: {Math.ceil(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview} </p>
              <h3>Genres</h3>
              <p>
                {genres &&
                  genres.map(genre => (
                    <span key={genre.id}>{genre.name} </span>
                  ))}
              </p>
            </div>
          </MovieContainer>
          <AddContainer>
            <h3>Additional information</h3>
            <InformList>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </InformList>
          </AddContainer>
          <AddContainer>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </AddContainer>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
