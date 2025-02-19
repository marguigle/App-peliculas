import { useContext } from "react";
import "./CardMovies.css";
import { PeliculasContext } from "../contexts/peliculas.context.jsx";

const CardMovies = () => {
  const { peliculasFiltradas, handleResumen } = useContext(PeliculasContext);

  return (
    <div className="conteiner-cards">
      {peliculasFiltradas.map((pelicula) => (
        <div key={pelicula.id} className="card-movies">
          <h2>{pelicula.original_title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt="Poster"
            onClick={() => handleResumen(pelicula)}
          />
          {pelicula.showResumen ? (
            <p className="p-resum">{pelicula.overview}</p>
          ) : (
            <>
              <p>Popularidad: {pelicula.popularity}</p>
              <p>Lenguaje original: {pelicula.original_language}</p>
              <p>Fecha de lanzamiento: {pelicula.release_date}</p>
            </>
          )}
          <button onClick={() => handleResumen(pelicula)} className="btn">
            {pelicula.showResumen ? "Ocultar resumen" : "Ver resumen"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardMovies;
