import { Container } from 'components/App.styled';
import { useEffect, useState } from 'react';
import React from 'react';
import getMovies from 'servises/api';
console.log(getMovies);
const Home = () => {
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

  return (
    <Container>
      <h1> The best daily movies for you</h1>
      <ul>
        {movies.map(({ id, title, name }) => {
          return <li key={id}>{name || title}</li>;
        })}
      </ul>
    </Container>
  );
};

export default Home;
