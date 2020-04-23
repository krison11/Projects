export interface IPerson {
  name: string;
  age: number;
  proffession: string;

  presantation: (greeting: string) => void;
}
export class P implements IPerson {
  constructor(
    public name: string,
    public age: number,
    public proffession: string
  ) {}

  presantation(greeting: string) {
    console.log(
      `${greeting} i am ${this.name} i am ${this.age} years old and i am a ${this.proffession}.`
    );
  }
}
////////////////////////////////////////////
interface IP {
  name: string;

  yearOfBirth: (age: number) => number;
}

export class Pr implements IP {
  constructor(public name: string) {}
  greet() {
    console.log(`Hi ${this.name}`);
  }
  yearOfBirth(age: number) {
    const year = new Date().getFullYear();
    return year - age;
  }
}

export const y = (age: number) => {
  const date = new Date();
  const yearNow = date.getFullYear();
  console.log(yearNow);
  return yearNow - age;
};
