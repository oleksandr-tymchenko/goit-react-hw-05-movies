// import { useEffect, useState } from 'react';

// import Modal from 'components/Modal/Modal';

// import SearchBar from './SearchBar/SearchBar';
import { Container } from './App.styled';
// import { Btn } from './Button/Button.styled';
// import { Loader } from './Loader/Loader';

// import { getImages } from 'servises/api';

// import { ErrorMessage } from './ErrorMessage/ErrorMessage';
// import { ImageGalery } from './ImageGallery/ImageGallery';

export const App = () => {
  // const [images, setImages] = useState([]);
  // const [largeImgURL, setLargeImgURL] = useState('');
  // const [value, setValue] = useState('');
  // const [page, setPage] = useState(1);
  // // const [per_page] = useState(12);
  // const [isError, setIsError] = useState('');
  // const [showBtn, setShowBtn] = useState(false);
  // const [isEmpty, setIsEmpty] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!value) {
  //     return;
  //   }
  //   setIsLoading(true);
  //   getImages(value, page)
  //     .then(data => {
  //       setIsEmpty(!data.hits.length);
  //       setImages(i => [...i, ...data.hits]);
  //       setShowBtn(page < Math.ceil(data.total / 12));
  //     })
  //     .catch(error => {
  //       setIsError(true);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [page, value]);

  // const nextPage = () => {
  //   setPage(page => page + 1);
  // };

  // const handleSubmit = value => {
  //   setValue(value);
  //   setPage(1);
  //   setImages([]);
  //   setShowBtn(false);
  //   setIsEmpty(false);
  // };

  // const toggleModal = link => {
  //   setLargeImgURL(link);
  // };

  return (
    <Container>
      {/* <SearchBar onSubmit={handleSubmit} />
      <ImageGalery images={images} openModal={toggleModal} />
      {isEmpty && (
        <ErrorMessage>
          There are no such images ... Try again {isError}
        </ErrorMessage>
      )}
      {isError && <ErrorMessage>{isError}</ErrorMessage>}
      {showBtn && <Btn onClick={nextPage}>Load more</Btn>}
      {isLoading && <Loader />}
      {largeImgURL && (
        <Modal onClose={toggleModal}>
          <img src={largeImgURL} alt="largeImg" />
        </Modal>
      )} */}
    </Container>
  );
};
