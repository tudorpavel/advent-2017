export default class Program {
  static build(rowString) {
    const regex = new RegExp(/([a-z]+) \((\d+)\)( -> ([a-z, ]+))?/);
    const matches = regex.exec(rowString);

    if (matches != null) {
      let program = new Program(matches[1]);

      program.weight = parseInt(matches[2], 10);

      if (matches[4] != null) {
        program.childIds = matches[4].split(', ');
      }

      return program;
    } else {
      throw new Error('invalid input row: ' + rowString);
    }
  }

  constructor(id) {
    this.id = id;
    this.weight = null;
    this.childIds = [];

    this.parent = null;
    this.children = [];
  }
}
