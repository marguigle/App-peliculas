import { useState, useEffect } from "react";
import "./CardMovies.css";
import PropTypes from "prop-types";
import { apiKey, endpoint } from "../config.js";

const CardMovies = ({ searchTerm, pageNumber }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [resumen, setResumen] = useState(" ");

  useEffect(() => {
    const url = new URL(endpoint);
    const params = {
      api_key: apiKey,
      page: pageNumber, // Usa el número de página actual
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results);
        console.log(data.results);
      })
      .catch((error) => console.error("Error:", error));
  }, [searchTerm, pageNumber]);
  // console.log(peliculas);

  const peliculasFiltradas = peliculas.filter(
    (pelicula) =>
      pelicula.original_title &&
      pelicula.original_title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleResumen = (pelicula) => {
    setResumen(pelicula.overview);
    console.log(pelicula.overview);
  };
  return (
    <div className="conteiner-cards">
      {peliculasFiltradas.map((pelicula) => (
        <div key={pelicula.id} className="card-movies ">
          <h3>{pelicula.original_title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt="Poster"
            onClick={() => handleResumen(pelicula)}
          />
          <p>Resumen: {resumen}</p>
          <p>Popularidad: {pelicula.popularity}</p>
          <p>Lenguaje original: {pelicula.original_language}</p>
          <p>Fecha de lanzamiento: {pelicula.release_date}</p>
        </div>
      ))}
    </div>
  );
};
CardMovies.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired, // Valida el tipo de la prop searchTerm
};

export default CardMovies;
