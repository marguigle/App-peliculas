import { useState, useEffect, createContext } from "react";
import { apiKey, endpoint } from "../config.js";

const PeliculasContext = createContext();

function PeliculasProvider({ children }) {
  const [peliculas, setPeliculas] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const url = new URL(endpoint);
    const params = {
      api_key: apiKey,
      page: pageNumber,
    };
    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(
          data.results.map((pelicula) => ({
            ...pelicula,
            showResumen: false,
          }))
        );
      })
      .catch((error) => console.error("Error:", error));
  }, [searchTerm, pageNumber]);

  const peliculasFiltradas = peliculas.filter(
    (pelicula) =>
      pelicula.original_title &&
      pelicula.original_title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleResumen = (pelicula) => {
    setPeliculas((prevPeliculas) =>
      prevPeliculas.map((p) => ({
        ...p,
        showResumen: p.id === pelicula.id ? !p.showResumen : p.showResumen,
      }))
    );
  };

  return (
    <PeliculasContext.Provider
      value={{
        peliculas,
        setPeliculas,
        handleResumen,
        peliculasFiltradas,
        setPageNumber,
        setSearchTerm,
      }}
    >
      {children}
    </PeliculasContext.Provider>
  );
}

export { PeliculasContext, PeliculasProvider };
