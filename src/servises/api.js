import PropTypes from 'prop-types';

import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDYzMDMzNGZmZTI2MzRlNmMyNjU2MjYzNmZhZWJiNCIsInN1YiI6IjY0ODYwNjIyZTM3NWMwMDBhY2M1ZTg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cLWIZByOdSNx37MEXIfJi9nkHOUBUllZd6OPDNf-0CA';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function getMovies(endpoint, params) {
  const response = await axios.get(`${BASE_URL}${endpoint}`, {
    params: {
      ...params,
      language: 'en-US',
    },
    headers: {
      Authorization: API_KEY,
      Accept: 'application/json',
    },
  });
  if (response) {
    return response.data;
  } else {
    throw new Error('Smth went wrong');
  }
}
// try {
//   const response = await axios.get(
//     `${BASE_URL}${endpoint}`,
//     {
//       params: {
//         ...params,
//         language: 'en-US',
//         // include_adult: false,
//       },
//       headers: {
//         Authorization: API_KEY,
//         Accept: 'application/json',
//       },
//     }
//   );
//   console.log(response.data); // Відповідь від сервера
//   return response.data;
// } catch (error) {
//   <ErrorMessage>There are no such images ... Try again {error}</ErrorMessage>;
//   console.error(error);
// }

export default getMovies;

getMovies.propTypes = {
  endpoint: PropTypes.string.isRequired,
  params: PropTypes.object,
};
