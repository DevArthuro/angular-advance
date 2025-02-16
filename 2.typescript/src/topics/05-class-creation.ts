/** Incorrect way create class */

export class PersonIcorrectClass {
  private name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  public getDetails() {
    return {
      name: this.name,
      address: this.address,
    };
  }
}

/** Correct way create class */


export class PersonCorrectClass {

  constructor(private name: string, private address: string) {}

  public getDetails() {
    return {
      name: this.name,
      address: this.address,
    };
  }
}


const personIcorrect = new PersonIcorrectClass("carlos", "mz3c2");
console.log(personIcorrect.getDetails())

const personCorrect = new PersonCorrectClass("Carlos", "mz3c2")
console.log(personCorrect.getDetails())
