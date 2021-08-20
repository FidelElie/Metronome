import React, { useEffect, useState, useRef, useCallback } from "react";
import { withRouter } from "react-router";

// ! Assets
import DrumStick from "../assets/drumstick.mp3";

// ! Library
import PresetProvider from "../lib/providers/Presets";
import { bpmToMsPeriod } from "../lib/utiltiies";

// ! Components
import App from "../components/core/App";
import Click from "../components/pages/index/Click";
import Presets from "../components/pages/index/Presets";
import Metronome from "../components/pages/index/Metronome";

const beatAudio = new Audio(DrumStick);

const beatModes = {
  click: { text: "Click", Component: Click },
  presets: { text: "Presets", Component: Presets }
}

const Home = ({ history }) => {
  const [metronomeMode, setMetronomeMode] = useState("click");

  const [metronomeBPM, setMetronomeBPM] = useState(60);
  const [metronomeRunning, setMetronomeRunning] = useState(false);
  const metronomeInterval = useRef(null);

  const modeProps = { metronomeBPM, setMetronomeBPM };
  const currentMode = beatModes[metronomeMode];

  const destroyInterval = useCallback(() => {
    if (metronomeInterval.current) {
      clearInterval(metronomeInterval.current);
      metronomeInterval.current = null;
    }
  }, []);

  const calculateInterval = useCallback(() => {
    const playBeat = () => beatAudio.play();

    // Clear the Interval If One Is Already
    destroyInterval();

    if (metronomeBPM !== 0) {
      const beatInterval = bpmToMsPeriod(metronomeBPM);
      if (metronomeRunning) {
        metronomeInterval.current = setInterval(playBeat, beatInterval);
      }
    } else {
      destroyInterval();
    }
  }, [metronomeBPM, metronomeRunning, destroyInterval]);

  const toggleMetronome = useCallback(() => {
    if (!metronomeRunning) {
      setMetronomeRunning(true);
      calculateInterval();
    } else {
      setMetronomeRunning(false);
      destroyInterval()
    }
  }, [metronomeRunning, calculateInterval, destroyInterval]);

  useEffect(() => {
    window.addEventListener("keyup", (event) => {
      switch (event.code) {
        case "Space":
          toggleMetronome();
          break;
        default:
          break
      }
    });
  }, [toggleMetronome]);

  useEffect(() => { calculateInterval(); }, [metronomeBPM, calculateInterval]);

  // Ensures The Interval Is Cleared Upon Page Navigation (Internal and External)
  history.listen(() => { destroyInterval(); });
  useEffect(() => { window.onunload = () => destroyInterval();}, [destroyInterval]);

  return (
    <App>
      <div className="w-full text-center flex flex-col items-center">
        <div className="w-min px-4 py-2 rounded-full shadow flex items-center">
          <span className="text-2xl mr-2">{ metronomeBPM }</span>
          <span className="font-semibold">BPM</span>
        </div>
        <div className="flex-grow p-5 my-3 md:my-10">
          <Metronome metronomeBPM={metronomeBPM} metronomeRunning={metronomeRunning}/>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex items-center justify-center mb-5 md:mb-10">
          <button
            className="rounded-md px-4 py-2 text-lg flex justify-center items-center shadow-lg text-white bg-yellow-600 font-semibold"
            onClick={toggleMetronome}
          >
            <span className="text-2xl material-icons md:text-4xl">
              { metronomeRunning ? "pause" : "play_arrow"}
            </span>
            <span className="ml-3 text-sm md:text-base">
              { metronomeRunning ? "Stop" : "Start" } MetroNome &trade;
            </span>
            <span className="ml-3 border-2 rounded-md text-sm px-2 py-1 bg-white text-black shadow-lg hidden lg:inline">
              SPACE
            </span>
          </button>
        </div>
        <div className="flex flex-col flex-grow shadow rounded-md overflow-hidden w-full md:w-1/2">
          <div className="flex w-full">
            {
              Object.entries(beatModes).map(mode => (
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
              <currentMode.Component {...modeProps} />
            </PresetProvider>
          </div>
        </div>
      </div>
    </App>
  );
}

export default withRouter(Home);
