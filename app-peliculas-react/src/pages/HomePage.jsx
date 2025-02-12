import CardMovies from "../components/CardMovies.jsx";
import Header from "../components/Header.jsx";
import PaginationButtons from "../components/PaginationButtons.jsx";
import { useState } from "react";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  function handleSearchMovie(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
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
