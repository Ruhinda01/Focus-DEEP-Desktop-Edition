import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ControlBar = ({ startTimer, stopTimer, resetTimer }) => {
  return (
    <div className="rounded-full bg-[#430064] p-4 flex flex-row space-x-6 text-white text-base sm:text-base md:text-lg xl:text-xl 2xl:text-2xl shadow-[0_4px_12px_rgba(67,0,100,0.5)] border border-purple-700/50 backdrop-blur-md relative max-w-xs md:max-w-md lg:max-w-lg">
      <div className="flex items-center justify-center">
        <button
          onClick={startTimer}
          className="transition-transform duration-200 hover:scale-110 rounded-full bg-[#430064] border border-purple-700/50 backdrop-blur-md w-9 h-9 flex items-center justify-center text-white shadow-md"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-play"
            className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]"
          />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={stopTimer}
          className="transition-transform duration-200 hover:scale-110 rounded-full bg-[#430064] border border-purple-700/50 backdrop-blur-md w-9 h-9 flex items-center justify-center text-white shadow-md"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-pause"
            className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]"
          />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={resetTimer}
          className="transition-transform duration-200 hover:scale-110 rounded-full bg-[#430064] border border-purple-700/50 backdrop-blur-md w-9 h-9 flex items-center justify-center text-white shadow-md"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-repeat"
            className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]"
          />
        </button>
      </div>
    </div>
  );
};

ControlBar.propTypes = {
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
};

export default ControlBar;
