import React, { useState, useRef } from "react";

const Click = (props) => {
  const { setMetronomeBPM } = props;
  const [currentDate, setCurrentDate] = useState(null);
  const calculationRef = useRef(null);

  const startTiming = () => {
    if (!currentDate) {
      setCurrentDate(new Date());
      calculationRef.current = setTimeout(() => setCurrentDate(null), 5000);
    } else {
      clearTimeout(calculationRef.current);
      calculationRef.current = null;
      const dateAfterCalculation = new Date();
      const deltaInMilliseconds = dateAfterCalculation.getTime() - currentDate.getTime();
      // deltaInMilliseconds / (milisecondsInASecond * secondsInAMinute)
      const millisecondsInAMinute = deltaInMilliseconds / (1000 * 60);
      // two beats occur in delta
      const beatPerMinuteDelta = millisecondsInAMinute / 2;
      // beatsPerMinute = 1 minute / beatPerMinuteDelta
      const beatsPerMinute = Math.ceil(1 / beatPerMinuteDelta);
      // Normalise to a maximum of 220 BPM
      const normalised = beatsPerMinute <= 220 ? beatsPerMinute : 220;
      setMetronomeBPM(normalised);
      setCurrentDate(null);
    }
  }

  return (
    <div className="flex w-full px-10 box-border justify-center items-center">
      <button
        className={`border-2 border-transparent rounded-full shadow p-2 h-12 w-12 text-lg flex items-center justify-center bg-gray-500 text-white ${currentDate ? "border-yellow-600" : ""} focus:outline-none mr-5`}
        onClick={startTiming}>
        <span className="material-icons md:hidden">touch_app</span>
        <span className="hidden material-icons md:inline">mouse</span>
      </button>
      <div className="flex items-center justify-center">
        <span className="text-gray-500">
          { currentDate ? "Click Again For Beat" : "Click To Start Timer"}
        </span>
      </div>
    </div>
  )
}

export default Click;
