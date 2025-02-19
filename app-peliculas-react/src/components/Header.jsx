/* eslint-disable */
import { useContext } from "react";
import "./header.css";
import { PeliculasContext } from "../contexts/peliculas.context";

function Header() {
  const { searchTerm, handleSearchMovie } = useContext(PeliculasContext);
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
