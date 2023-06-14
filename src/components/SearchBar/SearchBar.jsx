import { useEffect, useState } from 'react';
// import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
  SearchbarWrap,
} from './SearchBar.styled';
// import getMovies from 'servises/api';
import { useStateContext } from 'Context/StateContext';

export default function SearchBar({ onSubmit }) {
  // const [value, setValue] = useState('');
  const { setSearchParams } = useStateContext();

  // const [searchedMovies, setSearchedMovies] = useState([]);
  // const [error, setIsError] = useState(false);
  // const onInputChange = e => {
  //   setValue(e.target.value ?? '');
  // };
  // console.log(value);
  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.target;

    form.elements.searchQuery.value
      ? setSearchParams({ query: form.elements.searchQuery.value })
      : setSearchParams({});
    form.reset();
  };

  // console.log(searchParams.get('query'));

  // useEffect(() => {
  //   // if (!value) return;
  //   const fetchMovieDetails = async () => {
  //     try {
  //       const data = await getMovies('search/movie', {
  //         // query: { value },
  //         query: 'Godzilla',
  //         include_adult: false,
  //         page: 1,
  //       });
  //       console.log('data', data);
  //       setSearchedMovies(data);
  //     } catch (error) {
  //       setIsError(true);
  //     }
  //   };

  //   fetchMovieDetails();
  // }, []);

  return (
    <SearchbarWrap>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>
        <SearchFormInput
          // value={value}
          // type="text"
          name="searchQuery"
          autoFocus
          placeholder="Search movies"
          autoComplete="off"
          // onChange={onInputChange}
          // onSubmit={onSubmitForm}
        />
      </SearchForm>
    </SearchbarWrap>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
