import PropTypes from "prop-types";
import "./paginationButtons.css";

const PaginationButtons = ({ onNextPage, onPrevPage }) => {
  return (
    <div className="page-buttons">
      <button onClick={onPrevPage} className="page-btn">
        <span className="material-symbols-outlined">navigate_before PREV</span>
      </button>
      <button onClick={onNextPage} className="page-btn">
        <span className="material-symbols-outlined">NEXT navigate_next </span>
      </button>
    </div>
  );
};

PaginationButtons.propTypes = {
  onNextPage: PropTypes.func.isRequired, // Espera que onNextPage sea una función
  onPrevPage: PropTypes.func.isRequired, // Espera que onPrevPage sea una función
};

export default PaginationButtons;
