import { useState, useEffect } from "react";
import "./CardMovies.css";

const apiKey = "c268ca13195bf833f84d0060308f7cd3";
const endpoint = "https://api.themoviedb.org/3/discover/movie";
const params = {
  api_key: apiKey,
  page: 2,
};
const url = new URL(endpoint);
url.search = new URLSearchParams(params).toString();

const CardMovies = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  console.log(peliculas);
  // return (

  //     <div className="card-movies">
  //       {peliculas.map((pelicula) => (
  //         <div key={pelicula.id} className="cardMovies">
  //           <h3>{pelicula.original_title}</h3>
  //           <p>Resumen: {pelicula.overview}</p>
  //           <img
  //             src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
  //             alt="Poster"
  //           />
  //           <p>Popularidad: {pelicula.popularity}</p>
  //           <p>Lenguaje original: {pelicula.original_language}</p>
  //           <p>Fecha de lanzamiento: {pelicula.release_date}</p>
  //         </div>
  //       ))}
  //     </div>

  // );

  return (
    <div>
      {peliculas.map((pelicula) => (
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

export default CardMovies;
