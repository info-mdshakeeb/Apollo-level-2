class User {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  fullAddress() {
    console.log(
      `my name is ${this.name},My age is ${this.age},I am form ${this.address}`
    );
  }
}

const shakeeb = new User("shakeeb", 22, "jamalpur");
shakeeb.fullAddress();
