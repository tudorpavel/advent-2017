import Register from './Register';

export default class Instruction {
  static build(rowString) {
    const regex = new RegExp(/([a-z]+) (dec|inc) (-?\d+) if ([a-z]+) ([<>!=]+) (-?\d+)/);
    const matches = regex.exec(rowString);

    if (matches != null) {
      return new Instruction(
        matches[1],
        matches[2],
        parseInt(matches[3], 10),
        matches[4],
        matches[5],
        parseInt( matches[6], 10)
      );
    } else {
      throw new Error('invalid input row: ' + rowString);
    }
  }

  constructor(targetRegisterId, operator, operandNumber,
    conditionRegisterId, conditionOperator, conditionOperand) {
    this.targetRegisterId = targetRegisterId;
    this.operator = operator;
    this.operandNumber = operandNumber;
    this.conditionRegisterId = conditionRegisterId;
    this.conditionOperator = conditionOperator;
    this.conditionOperand = conditionOperand;
  }

  execute() {
    if (this._isConditionTrue()) {
      Register
        .get(this.targetRegisterId)
        .add(this._additionOperand())
    }
  }

  _isConditionTrue() {
    const a = Register.get(this.conditionRegisterId).value;
    const b = this.conditionOperand;

    switch (this.conditionOperator) {
      case '==':
        return a === b;
      case '!=':
        return a !== b;
      case '<':
        return a < b;
      case '>':
        return a > b;
      case '<=':
        return a <= b;
      case '>=':
        return a >= b;
      default:
        return false;
    }
  }

  _additionOperand() {
    if (this.operator === 'inc') {
      return this.operandNumber;
    } else {
      return -(this.operandNumber);
    }
  }
}
