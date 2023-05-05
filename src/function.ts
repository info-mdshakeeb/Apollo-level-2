//normal function :

function sum(a: number, b: number): number {
  return a + b;
}
sum(2, 2);
// console.log(sum(2, 2));

//arrow function

const ArrowSum = (a: number, b: number): number => a + b;

// if the function is no return add void

function NoReturn(): void {
  console.log("hello");
}
// NoReturn();

//multiple the array :
const Arr: number[] = [1, 2, 3, 4];
const NewArray: number[] = Arr.map((element: number) => element * element);
// console.log(NewArray);

const person: {
  Name: string;
  tkRe: number;
  addBalance(money: number): void;
} = {
  Name: "shakeeb",
  tkRe: 5,
  addBalance(money: number) {
    console.log(`my new balance is ${this.tkRe + money}`);
  },
};
//default  parameters :
const defaultValue = (num1: number, num2: number = 20): number => {
  return num1 + num2;
};
// console.log(defaultValue(20));

//spread operators :

const Friends: string[] = ["habik", "kabib", "dabib"];
const NewFriends: string[] = ["sahs", "dww"];
Friends.push(...NewFriends);

//rest parameters :

const greetFriends = (...friends: string[]): void => {
  console.log(friends);
};

// greetFriends("sd", "sdd", "xsd");
