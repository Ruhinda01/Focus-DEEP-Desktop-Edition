import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ControlBar = ({ startTimer, stopTimer, resetTimer }) => {
  return (
    <div className="flex flex-row space-x-14 text-white text-xl sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
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
