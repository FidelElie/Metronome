const numberArray = (start, stop, step = 1) => {
  return Array.from(
    { length: (stop - start) / step + 1 }, (_, i) => (i * step) + start
  );
}

export { numberArray };
