export default class Register {
  static registers = {};

  static reset() {
    Register.registers = {};
  }

  static get(id) {
    if (Register.registers[id] == null) {
      Register.registers[id] = new Register(id)
    }

    return Register.registers[id];
  }

  static maxValue() {
    const registerValues = Object
      .values(Register.registers)
      .map(register => register.value);

    return Math.max(...registerValues);
  }

  static maxHistoricalValue() {
    const historicalValues = Object
      .values(Register.registers)
      .map(register => register.maxHistoricalValue);

    return Math.max(...historicalValues);
  }

  constructor(id) {
    this.id = id;
    this.value = 0;
    this.maxHistoricalValue = 0;
  }

  add(operand) {
    this.value += operand;

    if (this.value > this.maxHistoricalValue) {
      this.maxHistoricalValue = this.value;
    }

    return this.value;
  }
}
