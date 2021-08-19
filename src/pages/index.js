import React, { useEffect, useState, useRef, useCallback } from "react";

import DrumStick from "../assets/drumstick.mp3";

import accurateInvterval from "accurate-interval";
import PresetProvider from "../lib/providers/Presets";

import App from "../components/core/App";
import Click from "../components/pages/index/Click";
import Presets from "../components/pages/index/Presets";
import Metronome from "../components/pages/index/Metronome";

export default function Home() {
  const [metronomeMode, setMetronomeMode] = useState("click");

  const [metronomeBPM, setMetronomeBPM] = useState(60);
  const [metronomeRunning, setMetronomeRunning] = useState(false);
  const metronomeInterval = useRef(null);

  const modes = {
    click: {
      text: "Click",
      Component: Click,
      props: { setMetronomeBPM }
    },
    presets: {
      text: "Presets",
      Component: Presets,
      props: { metronomeBPM, setMetronomeBPM }
    }
  }
  const currentMode = modes[metronomeMode];

  const calculateInterval = useCallback(() => {
    const beat = new Audio(DrumStick);
    const playBeat = () => beat.play();

    if (metronomeInterval.current) {
      metronomeInterval.current.clear();
      metronomeInterval.current = null;
    }

    const beatsPerSecond = metronomeBPM / 60;
    if (beatsPerSecond !== 0) {
      const period = 1 / beatsPerSecond;
      if (metronomeRunning) {
        const beatInterval = period * 1000;
        metronomeInterval.current = accurateInvterval(playBeat, beatInterval)
      }
    } else {
      metronomeInterval.current = null;
    }
  }, [metronomeBPM, metronomeRunning]);

  const toggleMetronome = () => {
    if (!metronomeRunning) {
      setMetronomeRunning(true);
      calculateInterval();
    } else {
      setMetronomeRunning(false);
      metronomeInterval.current.clear();
      metronomeInterval.current = null;
    }
  }

  useEffect(() => {
    calculateInterval();
  }, [metronomeBPM, calculateInterval])

  return (
    <App>
      <div className="w-5/6 text-center flex flex-col items-center">
        <div className="w-min px-4 py-2 rounded-full shadow flex items-center">
          <span className="text-2xl mr-2">{ metronomeBPM }</span>
          <span className="font-semibold">BPM</span>
        </div>
        <div className="flex-grow p-5 my-3 md:my-10">
          <Metronome metronomeBPM={metronomeBPM} metronomeRunning={metronomeRunning}/>
        </div>
      </div>
      <div className="flex flex-col w-5/6 items-center">
        <div className="flex items-center justify-center mb-3 md:mb-10">
          <button
            className="rounded-full px-4 py-2 text-lg flex justify-center items-center shadow text-white bg-yellow-600 font-semibold"
            onClick={toggleMetronome}
          >
            <span className="text-2xl material-icons md:text-4xl">
              { metronomeRunning ? "pause" : "play_arrow"}
            </span>
            <span className="ml-1 text-sm md:text-base">
              { metronomeRunning ? "Stop" : "Start" } Metronome
            </span>
          </button>
        </div>
        <div className="flex flex-col flex-grow shadow rounded-md overflow-hidden md:w-1/2">
          <div className="flex w-full">
            {
              Object.entries(modes).map(mode => (
                <button
                  className={`flex-grow border-b px-3 py-2 font-semibold ${mode[0] === metronomeMode ? "bg-red-500 text-white" : ""} md:text-lg`}
                  onClick={() => setMetronomeMode(mode[0])}
                  key={`mode-${mode[0]}`}
                >
                  {mode[1].text}
                </button>
              ))
            }
          </div>
          <div className="flex w-full rounded-md items-center justify-center my-2 h-16">
            <PresetProvider>
              <currentMode.Component {...(currentMode.props)} />
            </PresetProvider>
          </div>
        </div>
      </div>
    </App>
  );
}
