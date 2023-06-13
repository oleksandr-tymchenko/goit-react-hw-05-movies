import { useStateContext } from 'Context/StateContext';
import { MoviesList } from 'components/MoviesContainer/MovisContainer.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'servises/api';
import { Character, ImgWrap, Wrapper } from './Cast.styled';
console.log(useParams);

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w200';
export const Cast = () => {
  const { movieId } = useParams();
  const { casts, setCasts } = useStateContext();
  const [error, setIsError] = useState(false);

  useEffect(() => {
    // if (!casts) return;
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovies(`movie/${movieId}/credits`, {});
        // console.log('data', data);
        setCasts(data.cast);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMovieDetails();
  }, [movieId, setCasts]);
  // const { name, character, profile_path } = casts;
  return (
    <section>
      {casts &&
        casts.map(({ id, name, character, profile_path }) => (
          <Wrapper key={id}>
            <ImgWrap>
              <img src={baseImgUrl + posterSize + profile_path} alt="actor" />
            </ImgWrap>
            <MoviesList>
              <li>{name}</li>
            </MoviesList>
            <Character>{character}</Character>
          </Wrapper>
        ))}
    </section>
  );
};
