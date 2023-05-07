class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep = (hour: number): string => `${this.name} is sleep ${hour}`;
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student1 = new Student("shakeeb", 23, "jamalpur");
// console.log(student1);

class Teacher extends Person {
  type: string;
  constructor(name: string, age: number, address: string, type: string) {
    super(name, age, address);
    this.type = type;
  }
  takeClasses = (numberOfClass: number): string =>
    `${this.name} is take ${numberOfClass} class`;
}

const teacher1 = new Teacher("ali", 45, "dhaka", "master");
teacher1.takeClasses(20);
console.log(teacher1.takeClasses(20));
