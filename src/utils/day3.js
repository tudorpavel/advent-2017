const computeDistance = (lookupValue, currentIndex, baseLayerValue) => {
  if (lookupValue < 0 ||
      currentIndex < 1 ||
      baseLayerValue < 0) {
    return 0;
  }

  const layerSize = 8 * (currentIndex);
  const nextBaseLayerValue = baseLayerValue + layerSize;

  if (Math.floor(lookupValue / nextBaseLayerValue) === 0) {
    const lookupIndexInLayer = lookupValue - baseLayerValue;
    let adjustIndex;

    if (lookupIndexInLayer === layerSize - 1) {
      adjustIndex = 0;
    } else {
      adjustIndex = lookupIndexInLayer + 1;
    }

    const relativeAdjust = Math.abs(
      (adjustIndex % (2 * currentIndex)) - currentIndex
    );

    return relativeAdjust + currentIndex;
  }

  return computeDistance(
    lookupValue,
    currentIndex + 1,
    nextBaseLayerValue
  );
};

const day3 = (inputText) => {
  const memoryIndex = parseInt(inputText, 10);

  if (isNaN(memoryIndex)) {
    return 'input needs to be a number';
  }

  const normalizedLookupIndex = memoryIndex - 2;

  return computeDistance(normalizedLookupIndex, 1, 0).toString();
};

export function normal(inputText) {
  return day3(inputText);
};

export function bonus(inputText) {
  return 'N/A';
};
