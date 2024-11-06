import { useState } from "react";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRepeat, faInfinity, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faRepeat, faInfinity, faXmark);

const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-row items-start m-4 xl:m-8">
        <nav className="w-full flex flex-row justify-between align-middle mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-bebas-neue font-bold text-white inline-block">FOCUS</h1>
          {/* Show info button */}
          <button
            onClick={handleToggleInfo}
            aria-label="Information"
          >
            <FontAwesomeIcon icon="fa-solid fa-infinity" className="text-white sm:text-xl md:text-2xl xl:text-2xl 2xl:text-3xl" size="lg"/>
          </button>
          {/* Show info modal */}
          {showInfo && (
            <div className="absolute top-16 right-4 w-2/3 p-4 backdrop-blur-sm bg-[#430064]/50 shadow-lg sm:w-1/3 xl:top-24 xl:right-8 z-50">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bebas-neue font-bold text-white">What am I?</h2>
                <button
                  onClick={handleToggleInfo}
                  aria-label="Close"
                >
                  <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-white" size="lg" />
                </button>
              </div>
              <p className="text-white font-outfit text-base">I am a stopwatch application that focuses on deep work rather than the pomodoro technique. It is set by default to an hour of deep work followed by 25 minutes of rest. The timer can be started, paused and reset at any time. Try it out!</p>
            </div>
          )}
        </nav>        
      </header>
      <main className="m-4 xl:m-8 flex-grow">
        <Timer />
      </main>
      <Footer />
    </div>
  )
}

export default App
