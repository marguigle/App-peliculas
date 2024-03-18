import PropTypes from "prop-types";

const PaginationButtons = ({ onNextPage, onPrevPage }) => {
  return (
    <div className="page-buttons">
      <button onClick={onPrevPage}>
        <span className="material-symbols-outlined">navigate_before</span>
      </button>
      <button onClick={onNextPage}>
        <span className="material-symbols-outlined">navigate_next</span>
      </button>
    </div>
  );
};

PaginationButtons.propTypes = {
  onNextPage: PropTypes.func.isRequired, // Espera que onNextPage sea una función
  onPrevPage: PropTypes.func.isRequired, // Espera que onPrevPage sea una función
};

export default PaginationButtons;
