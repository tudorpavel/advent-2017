export default class Tower {
  constructor(programs) {
    this.programMap = {};

    programs.forEach((program) => {
      this.programMap[program.id] = program;
    });

    programs
      .filter(program => program.childIds.length > 0)
      .forEach((program) => {
        program.childIds
          .map(childId => this.programMap[childId])
          .forEach((child) => {
            child.parent = program;
            program.children.push(child);
          });
      });
  }
}
