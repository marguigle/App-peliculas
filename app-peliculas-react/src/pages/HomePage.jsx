import CardMovies from "../components/CardMovies.jsx";
import Header from "../components/Header.jsx";
import PaginationButtons from "../components/PaginationButtons.jsx";
import { useContext } from "react";
import { PeliculasContext } from "../contexts/peliculas.context.jsx";

function HomePage() {
  const {
    handleSearchMovie,
    searchTerm,
    handleNextPage,
    handlePrevPage,
    pageNumber,
  } = useContext(PeliculasContext);
  return (
    <>
      <Header handleSearchMovie={handleSearchMovie} searchTerm={searchTerm} />
      <PaginationButtons
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
      <CardMovies searchTerm={searchTerm} pageNumber={pageNumber} />
      <PaginationButtons
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </>
  );
}
export default HomePage;
