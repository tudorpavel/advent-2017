import FlexibleMatrix from './FlexibleMatrix';
import SpiralMatrix from './SpiralMatrix';
import NextValueNormalStrategy from './NextValueNormalStrategy';
import NextValueBonusStrategy from './NextValueBonusStrategy';

const day3 = (inputText, computeFunction) => {
  const inputNumber = parseInt(inputText, 10);

  if (isNaN(inputNumber)) {
    return 'input needs to be a number';
  }

  return computeFunction(inputNumber);
}

export function normal(inputText) {
  return day3(
    inputText,
    (inputNumber) => {
      let matrix = new FlexibleMatrix();
      let spiralMatrix = new SpiralMatrix(
        matrix,
        NextValueNormalStrategy
      );
      let currentValue = 1;

      while (currentValue < inputNumber) {
        currentValue = spiralMatrix.next();
      }

      return (
        Math.abs(spiralMatrix.currentX) +
        Math.abs(spiralMatrix.currentY)
      ).toString();
    }
  );
};

export function bonus(inputText) {
  return day3(
    inputText,
    (inputNumber) => {
      let matrix = new FlexibleMatrix();
      let spiralMatrix = new SpiralMatrix(
        matrix,
        NextValueBonusStrategy
      );
      let currentValue = 1;

      while (currentValue <= inputNumber) {
        currentValue = spiralMatrix.next();
      }

      return currentValue.toString();
    }
  );
};
