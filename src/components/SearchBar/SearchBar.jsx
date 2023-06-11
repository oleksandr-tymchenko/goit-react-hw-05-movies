import { useState } from 'react';
// import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
  SearchbarWrap,
} from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');
  const onInputChange = e => {
    setValue(e.target.value);
  };
  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchbarWrap>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>
        <SearchFormInput
          value={value}
          // type="text"
          name="searchQuery"
          autoFocus
          placeholder="Search images and photos"
          autoComplete="off"
          onChange={onInputChange}
        />
      </SearchForm>
    </SearchbarWrap>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
