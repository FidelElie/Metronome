import accurateInterval from "accurate-interval";

let valueReference;

export const createInterval = (bpm, running) => {

  if (bpm !== 0) {
    const beatsPerSecond = bpm / 60;
    const period = 1 / beatsPerSecond;
    if (running) {
      const beatInterval = period * 1000;
      valueReference = accurateInterval(() => postMessage("beat"), beatInterval);
    } else {
      // valueReference.clear();
      // valueReference = null;
      destroyInterval();
    }
  } else {
    destroyInterval();
    // valueReference = null;
  }
}

export const destroyInterval = () =>  {
  if (valueReference) {
    valueReference.clear();
    valueReference = null;
  }
}
