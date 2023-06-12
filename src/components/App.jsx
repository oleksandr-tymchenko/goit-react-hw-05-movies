// import { useEffect, useState } from 'react';

// import Modal from 'components/Modal/Modal';

// import SearchBar from './SearchBar/SearchBar';
// import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Container, Header, Logo, Link } from './App.styled';
// import { Btn } from './Button/Button.styled';
// import { Loader } from './Loader/Loader';

// import { getImages } from 'servises/api';

// import { ErrorMessage } from './ErrorMessage/ErrorMessage';
// import { ImageGalery } from './ImageGallery/ImageGallery';

import React from 'react';
import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import MovieDetails from '../Pages/MovieDetails';
import NotFound from '../Pages/NotFound';
import { Cast } from './Cast/Cast';
import Layout from 'Layout/Layout';
// import getMovies from 'servises/api';

const App = () => {
  // const { results } = getMovies('trending/all/day', {});
  // console.log(results);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={Cast} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // <Container>
    //   <Header>
    //     <Logo>
    //       <span role="img" aria-label="computer icon">
    //         {/* 💻 */}
    //       </span>{' '}
    //       Go search Movie
    //     </Logo>
    //     <nav>
    //       <Link to="/">Home</Link>
    //       <Link to="/movies">Movies</Link>
    //     </nav>
    //   </Header>

    //   <Routes>
    //     {/* my practice */}
    //     {/* <Route path="/" element=<Layout /> /> */}
    //     <Route path="/" element={<Home />} />

    //     <Route path="/movies" element={<Movies />} />
    //     <Route path="/movies/:movieId" element={<MovieDetails />}>
    //       <Route path="cast" element={Cast} />
    //       <Route path="reviews" element={<div>Reviews</div>}></Route>
    //     </Route>

    //     {/* <Route path="*" element={<NotFound />} /> */}
    //   </Routes>
    // </Container>
  );
};

export default App;

// export const App = () => {
//   // const [images, setImages] = useState([]);
//   // const [largeImgURL, setLargeImgURL] = useState('');
//   // const [value, setValue] = useState('');
//   // const [page, setPage] = useState(1);
//   // // const [per_page] = useState(12);
//   // const [isError, setIsError] = useState('');
//   // const [showBtn, setShowBtn] = useState(false);
//   // const [isEmpty, setIsEmpty] = useState(false);
//   // const [isLoading, setIsLoading] = useState(false);

//   // useEffect(() => {
//   //   if (!value) {
//   //     return;
//   //   }
//   //   setIsLoading(true);
//   //   getImages(value, page)
//   //     .then(data => {
//   //       setIsEmpty(!data.hits.length);
//   //       setImages(i => [...i, ...data.hits]);
//   //       setShowBtn(page < Math.ceil(data.total / 12));
//   //     })
//   //     .catch(error => {
//   //       setIsError(true);
//   //     })
//   //     .finally(() => {
//   //       setIsLoading(false);
//   //     });
//   // }, [page, value]);

//   // const nextPage = () => {
//   //   setPage(page => page + 1);
//   // };

//   // const handleSubmit = value => {
//   //   setValue(value);
//   //   setPage(1);
//   //   setImages([]);
//   //   setShowBtn(false);
//   //   setIsEmpty(false);
//   // };

//   // const toggleModal = link => {
//   //   setLargeImgURL(link);
//   // };

//   return (
//     <Container>
//       {/* <SearchBar onSubmit={handleSubmit} />
//       <ImageGalery images={images} openModal={toggleModal} />
//       {isEmpty && (
//         <ErrorMessage>
//           There are no such images ... Try again {isError}
//         </ErrorMessage>
//       )}
//       {isError && <ErrorMessage>{isError}</ErrorMessage>}
//       {showBtn && <Btn onClick={nextPage}>Load more</Btn>}
//       {isLoading && <Loader />}
//       {largeImgURL && (
//         <Modal onClose={toggleModal}>
//           <img src={largeImgURL} alt="largeImg" />
//         </Modal>
//       )} */}
//     </Container>
//   );
// };
