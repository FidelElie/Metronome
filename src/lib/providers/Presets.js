import React, { useContext, createContext, useState } from "react";

const generalBPMInformation = {
  hip: { text: "Hip Hop", min: 85, max: 115, step: 5 },
  reggae: { text: "Reggae", min: 60, max: 90, step: 5 },
  jazz: { text: "Jazz", min: 120, max: 125, step: 5 },
  pop: { text: "Pop", min: 110, max: 130, step: 5 },
  rock: { text: "Rock", min: 110, max: 140, step: 5 },
  metal: { text: "Metal", min: 100, max: 160, step: 5 },
  waltz: { text: "Waltz", min: 84, max: 90, step: 2 },
  samba: { text: "Samba", min: 96, max: 104, step: 2 },
  dnb: { text: "Drum And Bass", min: 165, max: 185, step: 5 },
  house: { text: "House", min: 118, max: 136, step: 2 }
}

const PresetContext = createContext(null);

const PresetProvider = ({ children }) => {
  const [chosenGenre, setChosenGenre] = useState(Object.keys(generalBPMInformation)[0]);

  return (
    <PresetContext.Provider value={{
      chosenGenre,
      setChosenGenre,
      presets: generalBPMInformation,
      chosenPreset: generalBPMInformation[chosenGenre]
    }}>
      { children }
    </PresetContext.Provider>
  )
}

const usePresets = () => useContext(PresetContext);

export default PresetProvider;
export { usePresets };
