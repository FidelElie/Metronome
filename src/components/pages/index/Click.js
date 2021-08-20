import React, { useState, useEffect } from "react";

// ! Library
import { msPeriodToBPM } from "../../../lib/utiltiies";

const Click = (props) => {
  const { setMetronomeBPM } = props;
  const [currentDate, setCurrentDate] = useState(null);

  const tapBeat = () => {
    const dateAfterCalculation = new Date();

    const deltaInMilliseconds = dateAfterCalculation.getTime() - currentDate.getTime();
    const bpm = msPeriodToBPM(deltaInMilliseconds);

    setMetronomeBPM(bpm);
    setCurrentDate(dateAfterCalculation);
  }

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <div className="flex w-full px-10 box-border justify-center items-center">
      <button
        className="border-2 border-transparent rounded-full shadow p-2 h-12 text-2xl flex items-center justify-center bg-gray-500 text-white mr-5 focus:outline-none"
        onClick={tapBeat}
      >
        <span className="material-icons md:hidden">touch_app</span>
        <span className="hidden material-icons lg:inline">mouse</span>
        <span className="ml-3 text-sm md:text-base">
          Tap Beat
        </span>
      </button>
    </div>
  )
}

export default Click;
