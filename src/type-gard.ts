// type of gard :
type TypeMultiple = number | string;
const addData = (num1: TypeMultiple, num2: TypeMultiple) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
// console.log(addData("1", "2"));
// console.log(addData(1, 2));

//in gard :

// type normalUser = {
//   name: string;
// };
// type adminUser = normalUser & {
//   role: "admin";
// };

// const getUserRoll = (user: normalUser | adminUser): void => {
//   if ("role" in user) {
//     console.log(`i am admin `);
//   } else {
//     console.log(`i am user`);
//   }
// };
// getUserRoll({ name: "shakeeb", role: "admin" });

// instance of
class Users {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getFullDetails() {
    console.log(
      `hello ,I am ${this.name}, My age is ${this.age}, i am form ${this.address}`
    );
  }
}

class Shakeeb extends Users {
  hobbies: string;
  constructor(name: string, age: number, address: string, hobbies: string) {
    super(name, age, address);
    this.hobbies = hobbies;
  }
  myHobbies(params: string) {
    console.log(` i want go ${params} `);
  }
}
class Rumor extends Users {
  habit: string;
  constructor(name: string, age: number, address: string, hobbies: string) {
    super(name, age, address);
    this.habit = hobbies;
  }
  myHabit(params: string) {
    console.log(` my habit ${params} `);
  }
}

const getUsers = (obj: Users) => {
  if (obj instanceof Rumor) {
    obj.myHabit("developer");
  } else if (obj instanceof Shakeeb) {
    obj.myHobbies("sleep");
  } else {
    obj.getFullDetails();
  }
};

const ShakeebUser1 = new Shakeeb("aka", 22, "jamalpur", "sleep");
const RumorUser1 = new Rumor("aka", 22, "jamalpur", "drinking");
getUsers(RumorUser1);
