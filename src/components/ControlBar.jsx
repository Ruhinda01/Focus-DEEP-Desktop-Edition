import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ControlBar = ({ startTimer, stopTimer, resetTimer }) => {
  return (
    <div>
      <button onClick={startTimer}>
        <FontAwesomeIcon icon="fa-solid fa-play" />
      </button>
      <button onClick={stopTimer}>
        <FontAwesomeIcon icon="fa-solid fa-pause" />
      </button>
      <button onClick={resetTimer}>
        <FontAwesomeIcon icon="fa-solid fa-repeat" />
      </button>
    </div>
  )
};

ControlBar.propTypes = {
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired
}

export default ControlBar;
