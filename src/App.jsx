import axios from 'axios';
import { Navbar } from './components/Navbar/Navbar';
import { MoviesList } from './components/MoviesList/MoviesList';
import { POPULAR_MOVIES_URL } from './constants/api';
import { useEffect, useState } from 'react';
import { FavoriteMoviesList } from './components/FavoriteMoviesList/FavoriteMoviesList';
import { ToastContainer } from 'react-toastify';

function App() {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const savedFavoriteMovies = localStorage.getItem('favoriteMovies');

    if (savedFavoriteMovies) {
      // JSON.parse() - pavercia JSON stringa i Javascript masyva/objekta
      return JSON.parse(savedFavoriteMovies);
    } else {
      return [];
    }
  });

  const fetchData = async () => {
    const response = await axios.get(POPULAR_MOVIES_URL);
    setMovies(response.data.results.slice(0, 10));
  };

  const handleFavoriteMovies = (movie) => {
    // .some() - patikrina ar bent vienas elementas atitinka salyga
    if (favoriteMovies.some((favMovie) => favMovie.id === movie.id)) {
      setFavoriteMovies(
        favoriteMovies.filter((favMovie) => favMovie.id !== movie.id)
      );
    } else {
      // Spread operatorius - prideda nauja elementa i masyva, taciau islaiko ir senus viduje
      setFavoriteMovies([movie, ...favoriteMovies]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    // useEffect() paleis savyje esanti koda, kiekviena karta kada atsinaujins favoriteMovies masyvo informacija
  }, [favoriteMovies]);

  return (
    <div className="App">
      <Navbar favoriteMovies={favoriteMovies} />
      <MoviesList
        movies={movies}
        favoriteMovies={favoriteMovies}
        handleButtonClick={handleFavoriteMovies}
      />
      <FavoriteMoviesList
        favoriteMovies={favoriteMovies}
        handleButtonClick={handleFavoriteMovies}
      />
      <ToastContainer />
    </div>
  );
}

export default App;

// App.jsx -> MoviesList.jsx -> MovieCard.jsx
// movies -> movies -> movie
