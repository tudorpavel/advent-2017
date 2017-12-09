const computeDistance = (lookupValue, currentIndex, currentLayerValue) => {
  console.log(lookupValue, currentIndex, currentLayerValue);
  if ((lookupValue - 2) < 0 ||
      currentIndex < 2 ||
      currentLayerValue < 8) {
    return 0;
  }

  if (Math.floor((lookupValue - 2) / currentLayerValue) === 0) {
    return (lookupValue - 1) % (currentIndex * 2 - 1);
  }

  return computeDistance(
    lookupValue,
    currentIndex + 1,
    currentLayerValue + 8 * (currentIndex - 1)
  );
};

const day3 = (inputText) => {
  const memoryIndex = parseInt(inputText, 10);

  if (isNaN(memoryIndex)) {
    return 'input needs to be a number';
  }

  return computeDistance(memoryIndex, 2, 8).toString();
};

export function normal(inputText) {
  return day3(inputText);
};

export function bonus(inputText) {
  return day3(inputText);
};
