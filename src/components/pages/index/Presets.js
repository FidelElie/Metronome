import React, { useEffect} from "react";
import { usePresets } from "../../../lib/providers/Presets";

const numberArray = (start, stop, step = 1) => {
  return Array.from(
    { length: (stop - start) / step + 1 }, (_, i) => (i * step) + start
  );
}

const Presets = (props) => {
  const { metronomeBPM, setMetronomeBPM } = props;
  const { chosenGenre, setChosenGenre, presets, chosenPreset } = usePresets();

  useEffect(() => {
    const range = numberArray(chosenPreset.min, chosenPreset.max, chosenPreset.step);
    if (!range.includes(metronomeBPM)) setMetronomeBPM(chosenPreset.min);
  }, [chosenGenre, setMetronomeBPM, metronomeBPM, chosenPreset]);

  return (
    <div className="flex items-center w-full px-10 box-border justify-center">
      <div className="flex items-center rounded-md overflow-hidden w-full">
        <select
          className="p-2 shadow flex-grow text-sm"
          value={chosenGenre}
          onChange={event => setChosenGenre(event.target.value)}
          >
          {
            Object.entries(presets).map(entry => (
              <option value={entry[0]} key={entry[0]}>{ entry[1].text }</option>
            ))
          }
        </select>
        <select
          value={metronomeBPM}
          onChange={event => setMetronomeBPM(parseInt(event.target.value, 10))}
          className="bg-gray-500 p-2 text-white shadow"
        >
          {
            numberArray(
              chosenPreset.min,
              chosenPreset.max,
              chosenPreset.step
            ).map(numb => <option key={numb}>{ numb }</option>)
          }
        </select>

      </div>
    </div>
  )
}

export default Presets;
