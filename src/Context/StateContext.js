import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [error, setIsError] = useState(false);
  const [moviesBySearch, setMoviesBySearch] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState({});
  const [casts, setCasts] = useState([]);
  const [reviews, setReviews] = useState([]);

  //   const [favorites, setFavorites] = useState([]);
  //   const [searchQuery, setSearchQuery] = useState(false);
  //   const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  //   useEffect(() => {
  //     const cartLS = JSON.parse(localStorage.getItem('cart')) || [];
  //     const favoritesLS = JSON.parse(localStorage.getItem('favorites')) || [];

  //     setCart(cartLS);
  //     setFavorites(favoritesLS);
  //   }, []);

  return (
    <Context.Provider
      value={{
        movies,
        setMovies,
        error,
        setIsError,
        moviesBySearch,
        setMoviesBySearch,
        searchedMovie,
        setSearchedMovie,
        casts,
        setCasts,
        reviews,
        setReviews,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
