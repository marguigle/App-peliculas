/* eslint-disable */
import "./header.css";

function Header({ searchTerm, handleSearchMovie }) {
  return (
    <div className="banner">
      <img src="favicon_io/apple-touch-icon.png" alt="logo" />
      <h1 className="title">MARCEFLIX</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchMovie}
          placeholder="                           MOVIE NAME"
        />
      </div>
    </div>
  );
}

export default Header;
