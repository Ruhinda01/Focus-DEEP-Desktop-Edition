import { useState, useEffect, useRef } from "react";
import ControlBar from "./ControlBar";


const Timer = () => {
  const [session, setSession] = useState("DEEP FOCUS");
  const [hourValue, setHourValue] = useState(1 * 60 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // created audio refs with fixed volume and paths
  const focusEndSound = useRef(null);
  const restEndSound = useRef(null);

  // Initialize audio elements with fixed volume
  useEffect(() => {
      focusEndSound.current = new Audio('/sounds/chime-sound-7143.mp3');
      restEndSound.current = new Audio('/sounds/gong-255733.mp3');

      // set fixed volume for both sounds (0.5 = 50% volume)
      focusEndSound.current.volume = 0.5;
      restEndSound.current.volume = 0.5;
  }, []);
  // getting the individual hours, minutes, and seconds
  const hour = Math.floor(hourValue / 3600);
  const minute = Math.floor((hourValue % 3600) / 60);
  const seconds = Math.floor((hourValue % 3600) % 60);
  // FOrmatting the time
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");


  useEffect(() => {
    const playSessionSound = () => {
      try {
        if (session === "DEEP FOCUS") {
          focusEndSound.current.play();
        } else if (session === "REST") {
          restEndSound.current.play();
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };
    let interval;
    if (isRunning && hourValue > 0) {
        interval = setInterval(() => {
            setHourValue((prevhourValue) => prevhourValue - 1);
        }, 1000);
    } else if (hourValue === 0) {
        setIsRunning(false);
        playSessionSound();
        if (session === "DEEP FOCUS") {
            setSession("REST");
            setHourValue(25 * 60);
        } else if (session === "REST") {
            setSession("DEEP FOCUS");
            setHourValue(1 * 60 * 60);
        }
    }
    return () => {
        clearInterval(interval);
    }

  }, [isRunning, hourValue, session]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    if (session === "DEEP FOCUS") {
        setIsRunning(false);
        setHourValue(1 * 60 * 60);
    } else if (session === "REST") {
        setIsRunning(false);
        setHourValue(25 * 60);
    }
  };

  
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className={`inline-block text-center mt-4 mb-8 ${session === "DEEP FOCUS" ? "text-teal-300" : "text-purple-200"}`}>
          <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bebas-neue font-normal">{session}</span>
      </div>
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-center items-baseline text-white font-bebas-neue">
          <div className="flex items-baseline text-[12vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[12vw] 2xl:text-[10vw] leading-none">
            <span>{formattedHour}</span>
            <span className="mx-2 mb-4">:</span>
            <span>{formattedMinute}</span>
            <span className="mx-2 mb-4">:</span>
            <span>{formattedSeconds}</span>
          </div>
        </div>
      </div>
      <div className="relative mt-8">
        <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-xl"></div>
        <ControlBar startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
      </div>
    </div>
  );
};

export default Timer;
