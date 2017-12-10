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
    return this.weight(this.root).desired;
  }

  weight(currentProgram) {
    if (currentProgram.children.length === 0) {
      return {
        program: currentProgram,
        desired: null,
        weight: currentProgram.weight
      };
    }

    const childWeights = currentProgram.children.map((child) => {
      return this.weight(child);
    });
    let desired = childWeights
      .map(wd => wd.desired)
      .reduce((acc, desired) => desired || acc);

    if (desired == null) {
      const weightsMap = childWeights.reduce((acc, childWeight) => {
        if (acc[childWeight.weight] == null) {
          acc[childWeight.weight] = {
            childWeight: childWeight,
            count: 0
          };
        }

        acc[childWeight.weight].count++;

        return acc;
      }, {});

      /* for (let [weight, count] of Object.entries(weightsMap)) {
       *   if (count == )
       * }*/

      console.log(weightsMap)

      /* if (uniqueWeights.length === 2) {
       *   const diff = Math.abs(uniqueWeights[0] - uniqueWeights[1])
       *   desired
       * }*/
    }

    console.log(childWeights);

    return {
      program: currentProgram,
      desired: desired,
      weight: childWeights.reduce(
        (sum, weight) => sum + weight.weight,
        currentProgram.weight
      )
    };
  }
}
