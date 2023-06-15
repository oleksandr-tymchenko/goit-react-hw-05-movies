import {
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
  SearchbarWrap,
} from './SearchBar.styled';
import { useStateContext } from 'Context/StateContext';

export default function SearchBar({ onSubmit }) {
  const { setSearchParams } = useStateContext();

  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.target;

    form.elements.searchQuery.value
      ? setSearchParams({ query: form.elements.searchQuery.value })
      : setSearchParams({});
    form.reset();
  };

  return (
    <SearchbarWrap>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>
        <SearchFormInput
          name="searchQuery"
          autoFocus
          placeholder="Search movies"
          autoComplete="off"
        />
      </SearchForm>
    </SearchbarWrap>
  );
}
