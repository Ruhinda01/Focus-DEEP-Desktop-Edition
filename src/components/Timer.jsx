import { useState, useEffect } from "react";
import ControlBar from "./ControlBar";


const Timer = () => {
  const [session, setSession] = useState("DEEP FOCUS");
  const [hourValue, setHourValue] = useState(1 * 60 * 60);
  const [isRunning, setIsRunning] = useState(false);
  // getting the individual hours, minutes, and seconds
  const hour = Math.floor(hourValue / 3600);
  const minute = Math.floor((hourValue % 3600) / 60);
  const seconds = Math.floor((hourValue % 3600) % 60);
  // FOrmatting the time
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  useEffect(() => {
    let interval;
    if (isRunning && hourValue > 0) {
        interval = setInterval(() => {
            setHourValue((prevhourValue) => prevhourValue - 1);
        }, 1000);
    } else if (hourValue === 0) {
        setIsRunning(false);
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
    <div>
        <div>
            <span>{session}</span>
        </div>
        <div>
            <span>{formattedHour}</span>
            <span>:</span>
            <span>{formattedMinute}</span>
            <span>:</span>
            <span>{formattedSeconds}</span>
        </div>
        <div>
            <ControlBar startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer} />
        </div>
    </div>
  );
};

export default Timer;
