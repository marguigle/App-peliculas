import { useContext } from "react";
import "./paginationButtons.css";
import { PeliculasContext } from "../contexts/peliculas.context";

const PaginationButtons = () => {
  const { handleNextPage, handlePrevPage } = useContext(PeliculasContext); // ✅ Usar el contexto directamente

  return (
    <div className="page-buttons">
      <button onClick={handlePrevPage} className="page-btn">
        <span className="material-symbols-outlined">PREV</span>
      </button>
      <button onClick={handleNextPage} className="page-btn">
        <span className="material-symbols-outlined">NEXT</span>
      </button>
    </div>
  );
};

export default PaginationButtons;
