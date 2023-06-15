import PropTypes from 'prop-types';

import { useStateContext } from 'Context/StateContext';
import { Wrapper } from 'components/Cast/Cast.styled';
import { MoviesList } from 'components/MoviesContainer/MovisContainer.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'servises/api';
import { Text, Title } from './Reviews.styled';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const Reviews = () => {
  const { movieId } = useParams();

  const { reviews, setReviews } = useStateContext();
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovies(`movie/${movieId}/reviews`, { page: 1 });
        setIsEmpty(!data.results.length);
        setReviews(data.results);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMovieDetails();
  }, [movieId, setReviews]);
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
      {isError && (
        <ErrorMessage>Sorry, something wrong. {isError}</ErrorMessage>
      )}
    </section>
  );
};

export default Reviews;
Reviews.propTypes = {
  movieId: PropTypes.string,
};
