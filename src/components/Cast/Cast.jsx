import PropTypes from 'prop-types';

// import { useStateContext } from 'Context/StateContext';
import { MoviesList } from 'components/MoviesContainer/MovisContainer.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'servises/api';
import { Character, ImgWrap, Wrapper } from './Cast.styled';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w200';
const defaultImg =
  'https://st3.depositphotos.com/4562487/13399/v/600/depositphotos_133996522-stock-illustration-man-icon-illustration.jpg';

const Cast = () => {
  const { movieId } = useParams();
  // const { casts, setCasts } = useStateContext();
  const [casts, setCasts] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovies(`movie/${movieId}/credits`);

        setIsEmpty(!data.cast.length);
        setCasts(data.cast);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  if (!casts) return;
  return (
    <section>
      {casts &&
        casts.map(({ name, character, profile_path }) => (
          <Wrapper key={name}>
            <ImgWrap>
              <img
                src={
                  profile_path
                    ? baseImgUrl + posterSize + profile_path
                    : defaultImg
                }
                alt="actor"
                width="200"
                height="290"
              />
            </ImgWrap>
            <MoviesList>
              <li>{name}</li>
            </MoviesList>
            <Character>{character}</Character>
          </Wrapper>
        ))}
      {isEmpty && (
        <ErrorMessage>Sorry, we don't have data about the cast</ErrorMessage>
      )}{' '}
      {isError && (
        <ErrorMessage>Sorry, something wrong. {isError}</ErrorMessage>
      )}
    </section>
  );
};

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string,
};
