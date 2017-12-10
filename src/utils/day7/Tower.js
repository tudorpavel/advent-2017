export default class Tower {
  constructor(programs) {
    this.root = null;
    this.programMap = {};

    programs.forEach((program) => {
      this.programMap[program.id] = program;
    });

    programs
      .filter(program => program.childIds.length > 0)
      .map((program) => {
        program.childIds
          .map(childId => this.programMap[childId])
          .forEach((child) => {
            child.parent = program;
            program.children.push(child);
          });

        return program;
      })
      .forEach((program) => {
        if (program.parent == null) {
          this.root = program;
          return;
        }
      });
  }

  computeDesiredWeight() {
    const wrongResult = this.findWrongProgram(this.root);

    if (wrongResult.wrongProgram != null) {
      return wrongResult.wrongProgram.weight + wrongResult.wrongDiff;
    } else {
      return -1;
    }
  }

  findWrongProgram(currentProgram) {
    if (currentProgram.children.length === 0) {
      return {
        wrongProgram: null,
        wrongDiff: null,
        program: currentProgram,
        totalWeight: currentProgram.weight
      };
    }

    const results = currentProgram.children.map((child) => {
      return this.findWrongProgram(child);
    });

    let wrongResult = results.find((result) => {
      return result.wrongProgram != null;
    });

    if (wrongResult == null) {
      wrongResult = this.determineWrongResult(results);
    }

    return {
      wrongProgram: wrongResult && wrongResult.wrongProgram,
      wrongDiff: wrongResult && wrongResult.wrongDiff,
      program: currentProgram,
      totalWeight: results.reduce(
        (sum, result) => sum + result.totalWeight,
        currentProgram.weight
      )
    };
  }

  determineWrongResult(results) {
    const groupByWeight = results.reduce((acc, result) => {
      if (acc[result.totalWeight] == null) {
        acc[result.totalWeight] = [];
      }

      acc[result.totalWeight].push(result);

      return acc;
    }, {});

    const values = Object.values(groupByWeight);

    if (values.length > 1) {
      let wrongResult, referenceResult;

      if (values[0].length === 1) {
        wrongResult = values[0][0];
        referenceResult = values[1][0];
      } else {
        wrongResult = values[1][0];
        referenceResult = values[0][0];
      }

      wrongResult.wrongProgram = wrongResult.program;
      wrongResult.wrongDiff = referenceResult.totalWeight -
                              wrongResult.totalWeight;

      return wrongResult;
    } else {
      return null;
    }
  }
}
