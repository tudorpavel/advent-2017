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

    return registerValues.reduce((max, value) => {
      if (value > max) {
        return value;
      } else {
        return max;
      }
    });
  }

  constructor(id) {
    this.id = id;
    this.value = 0;
  }

  add(operand) {
    return this.value += operand;
  }
}
