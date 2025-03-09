import { MovieCard } from '../MovieCard/MovieCard';
import './favorite-movies-list.css';

export const FavoriteMoviesList = ({ handleButtonClick, favoriteMovies }) => {
  return (
    <>
      <h2>Favorite movies list</h2>
      <div className="favorite-movies-list">
        {favoriteMovies.length > 0 &&
          favoriteMovies.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              isFavorite={favoriteMovies.some(
                (favMovie) => favMovie.id === movie.id
              )}
              handleButtonClick={handleButtonClick}
            />
          ))}
        {favoriteMovies.length === 0 && <p>No movies found. Add to list.</p>}
      </div>
    </>
  );
};
