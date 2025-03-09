import { MovieCard } from '../MovieCard/MovieCard';
import './movies-list.css';

export const MoviesList = ({ movies, handleButtonClick, favoriteMovies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          isFavorite={favoriteMovies.some(
            (favMovie) => favMovie.id === movie.id
          )}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

// favoriteMovies = [ { title: 'Sonic', id: 145 }]
// Movies = [ { title: 'Sonic', id: 145 }, { title: 'Spiderman', id: 2323 }]
