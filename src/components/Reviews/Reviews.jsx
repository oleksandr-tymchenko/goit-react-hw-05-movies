import { useStateContext } from 'Context/StateContext';
import { Wrapper } from 'components/Cast/Cast.styled';
import { MoviesList } from 'components/MoviesContainer/MovisContainer.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'servises/api';
import { Text, Title } from './Reviews.styled';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const { reviews, setReviews } = useStateContext();
  const [error, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    // if (!reviews) return;
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovies(`movie/${movieId}/reviews`, { page: 1 });
        setIsEmpty(!data.results.length);
        console.log('data', data);
        setReviews(data.results);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMovieDetails();
  }, [movieId, setReviews]);
  console.log(reviews);
  return (
    <section>
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <Wrapper key={id}>
            <MoviesList>
              <Title>Author: {author}</Title>
            </MoviesList>
            <Text>{content}</Text>
          </Wrapper>
        ))}
      {isEmpty && (
        <ErrorMessage>
          We don't have any revievs for this movie yet.
        </ErrorMessage>
      )}
    </section>
  );
};
