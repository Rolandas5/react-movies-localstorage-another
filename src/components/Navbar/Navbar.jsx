import '../Navbar/navbar.css';
import { FaHeart } from 'react-icons/fa';

export const Navbar = ({ favoriteMovies }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Filmelis.lt</h1>
      <div className="favorites-count">
        <FaHeart className="heart-icon" />
        <span className="favorites-number">
          Megstami filmai: {favoriteMovies.length}
        </span>
      </div>
    </nav>
  );
};
