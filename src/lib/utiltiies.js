const numberArray = (start, stop, step = 1) => {
  return Array.from(
    { length: (stop - start) / step + 1 }, (_, i) => (i * step) + start
  );
}

const bpmToMsPeriod = (bpm) => {
  // Convert beats per minute to beats per second
  const beatsPerSecond = bpm / 60;
  // Convert frequency to a period in seconds
  const period = 1 / beatsPerSecond;
  // Convert value to milliseconds
  const beatInterval = period * 1000;

  return beatInterval;
}

const msPeriodToBPM = (
  deltaInMilliseconds,
  { lowerBoundBPM, upperboundBPM } = { lowerBoundBPM: 40, upperboundBPM: 220 }) => {
  // deltaInMilliseconds / (milisecondsInASecond * secondsInAMinute)
  const millisecondsInAMinute = deltaInMilliseconds / (1000 * 60);
  // beatsPerMinute = 1 minute / beatPerMinuteDelta
  const beatsPerMinute = Math.ceil(1 / millisecondsInAMinute);
  // Normalise BPM within range.
  let normalisedBPM;

  if (beatsPerMinute < lowerBoundBPM ) {
    normalisedBPM = lowerBoundBPM;
  } else if ( beatsPerMinute > upperboundBPM) {
    normalisedBPM = upperboundBPM;
  } else {
    normalisedBPM = beatsPerMinute;
  }

  return normalisedBPM;
}

const joinClasses = (...classes) => {
  const classesArray = classes.map(x => {
    if (typeof x == "string" || x instanceof String) {
      return x
    } else if (x instanceof Array) {
      return joinClasses(...x);
    } else if (x instanceof Object) {
      return Object.entries(x).map(x => x[1] ? x[0] : null).filter(x => x).join(" ");
    } else {
      throw new TypeError("Invalid Class Type Provided, Expected: String, Array Or Object");
    }
  })
  return classesArray.join(" ");
}

export { numberArray, bpmToMsPeriod, msPeriodToBPM, joinClasses };
