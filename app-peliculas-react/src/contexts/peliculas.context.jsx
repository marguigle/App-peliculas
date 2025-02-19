import { useState, useEffect, createContext } from "react";
import { apiKey, endpoint } from "../config.js";

const PeliculasContext = createContext();

function PeliculasProvider({ children }) {
  const [peliculas, setPeliculas] = useState([]); // 🔵 Todas las películas obtenidas de la API
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]); // 🔵 Solo las películas filtradas
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Obtener todas las películas cuando cambia la página (pero no el filtro)
  useEffect(() => {
    const url = new URL(endpoint);
    const params = {
      api_key: apiKey,
      page: pageNumber, // ✅ Solo actualiza películas cuando cambia de página
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
  }, [pageNumber]); // ✅ Solo depende de `pageNumber`

  // 🔹 Filtrar películas cuando cambia el término de búsqueda
  useEffect(() => {
    if (!searchTerm) {
      setPeliculasFiltradas(peliculas); // ✅ Si no hay búsqueda, usa todas las películas
    } else {
      setPeliculasFiltradas(
        peliculas.filter((pelicula) =>
          pelicula.original_title
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, peliculas]); // ✅ Se ejecuta solo cuando cambia `searchTerm` o `peliculas`

  // 🔹 Funciones para cambiar de página
  const handleNextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleSearchMovie = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleResumen = (peliculaSeleccionada) => {
    setPeliculas((prevPeliculas) =>
      prevPeliculas.map((pelicula) =>
        pelicula.id === peliculaSeleccionada.id
          ? { ...pelicula, showResumen: !pelicula.showResumen }
          : pelicula
      )
    );
  };

  return (
    <PeliculasContext.Provider
      value={{
        peliculasFiltradas,
        handleResumen,
        handleSearchMovie,
        searchTerm,
        pageNumber,
        handleNextPage,
        handlePrevPage,
      }}
    >
      {children}
    </PeliculasContext.Provider>
  );
}

export { PeliculasContext, PeliculasProvider };
