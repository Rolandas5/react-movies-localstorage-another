import { toast } from 'react-toastify';
import './movie-card.css';

export const MovieCard = ({ movie, handleButtonClick, isFavorite }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`;

  const handleToggleFavorite = () => {
    if (isFavorite) {
      toast('Pasalinta is megstamu saraso!', {
        type: 'error',
      });
    } else {
      toast(`${movie.title} pridetas prie megstamu!`, {
        type: 'success',
      });
    }

    handleButtonClick(movie);
  };

  return (
    <div className="movie-card">
      <img src={imageUrl} alt="movie" />
      <h3>{movie.title}</h3>
      <p>Originali kalba: {movie.original_language}</p>
      <p>Vote average: {movie.vote_average}</p>
      <button onClick={() => handleToggleFavorite(movie)}>
        {isFavorite
          ? 'Pasalinti is megstamu saraso!'
          : 'Prideti prie megstamiausiu'}
      </button>
    </div>
  );
};
