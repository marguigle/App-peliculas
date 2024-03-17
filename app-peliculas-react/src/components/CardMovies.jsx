import { useState, useEffect } from "react";
import "./CardMovies.css";
import PropTypes from "prop-types";

const apiKey = "c268ca13195bf833f84d0060308f7cd3";
const endpoint = "https://api.themoviedb.org/3/discover/movie";
const params = {
  api_key: apiKey,
  page: 2,
};

const CardMovies = ({ searchTerm }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const url = new URL(endpoint);
    url.search = new URLSearchParams(params).toString();
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((error) => console.error("Error:", error));
  }, [searchTerm]);
  console.log(peliculas);
  const peliculasFiltradas = peliculas.filter(
    (pelicula) =>
      pelicula.original_title &&
      pelicula.original_title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      {peliculasFiltradas.map((pelicula) => (
        <div key={pelicula.id} className="card-movies ">
          <h3>{pelicula.original_title}</h3>
          <p>Resumen: {pelicula.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt="Poster"
          />
          <p>Popularidad: {pelicula.popularity}</p>
          <p>Lenguaje original: {pelicula.original_language}</p>
          <p>Fecha de lanzamiento: {pelicula.release_date}</p>
        </div>
      ))}
    </div>
  );
};
CardMovies.propTypes = {
  searchTerm: PropTypes.string.isRequired, // Valida el tipo de la prop searchTerm
};

export default CardMovies;
