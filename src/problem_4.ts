class Person {
  constructor(private name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): void {
    console.log(`hello my name is :${this.name} , my age is  ${this.age}`);
  }
}

class Student extends Person {
  constructor(private grade: number, name: string, age: number) {
    super(name, age);
    this.grade = grade;
  }
  getGrade() {
    return ` grade is ${this.grade}`;
  }
}
const shakeeb = new Student(3.56, "shakeeb", 24);
console.log(shakeeb.getGrade());
