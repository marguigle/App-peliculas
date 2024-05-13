import "./App.css";
import CardMovies from "./components/CardMovies.jsx";
import PaginationButtons from "./components/PaginationButtons.jsx";
import { useState } from "react";

function App() {
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
      <div className="banner">
        <img src="favicon_io/apple-touch-icon.png" alt="logo" />
        <h1>MARCEFLIX</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchMovie}
            placeholder="                           MOVIE NAME"
          />
        </div>
      </div>
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

export default App;
