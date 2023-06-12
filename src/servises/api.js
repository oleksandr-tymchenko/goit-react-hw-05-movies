import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDYzMDMzNGZmZTI2MzRlNmMyNjU2MjYzNmZhZWJiNCIsInN1YiI6IjY0ODYwNjIyZTM3NWMwMDBhY2M1ZTg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cLWIZByOdSNx37MEXIfJi9nkHOUBUllZd6OPDNf-0CA';
const BASE_URL = 'https://api.themoviedb.org/3/';

// export const getImages = async (searchQuery, page) => {
//   const queryParams = {
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//     safesearch: true,
//     page: 1,
//   };
//   // const query = Object.values({ searchQuery })[0];

//   queryParams.q = searchQuery;
//   queryParams.page = page;
//   const response = await axios.get(
//     'https://api.themoviedb.org/3/search/movie?query=Godzilla&include_adult=false&language=en-US&page=1' \
//   Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDYzMDMzNGZmZTI2MzRlNmMyNjU2MjYzNmZhZWJiNCIsInN1YiI6IjY0ODYwNjIyZTM3NWMwMDBhY2M1ZTg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cLWIZByOdSNx37MEXIfJi9nkHOUBUllZd6OPDNf-0CA' \
//   accept:application/json
//   //   BASE_URL, {
//   //   params: {
//   //     ...queryParams,
//   //     key: API_KEY,
//   //   },
//   // }
//   );
//   return await response.data;
// };

async function getMovies(endpoint, params) {
  try {
    const response = await axios.get(
      `${BASE_URL}${endpoint}`,

      {
        params: {
          ...params,
          language: 'en-US',
          // include_adult: false,
        },
        headers: {
          Authorization: API_KEY,
          Accept: 'application/json',
        },
      }
    );

    console.log(response.data); // Відповідь від сервера
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default getMovies;
