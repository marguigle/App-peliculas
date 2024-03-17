import "./App.css";
import CardMovies from "./components/CardMovies";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearchMovie(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  return (
    <>
      <h1>APP de peliculas</h1>
      <div className="search-container">
        <input type="text" value={searchTerm} onChange={handleSearchMovie} />
        <button>search</button>
      </div>
      <CardMovies searchTerm={searchTerm} />
    </>
  );
}

export default App;
