// normal type of array type :
const number = (num1: number): number[] => [num1];
// generic type of array :
const number1 = <T, X>(parma1: T, parma2: X): [T, X] => [parma1, parma2];

const result1 = number1<string, string>("", "");
const result2 = number1<number, Array<string>>(22, ["usa"]);

interface IResult {
  name: string;
}

const result3 = number1<IResult, boolean>({ name: "shakeeb" }, false);

//spread operator :
// const crush = "nai";
// const myInfo = {
//   name: "shakeeb",
//   age: 24,
//   salary: 122222222,
// };
// const newData = { ...myInfo, crush };

interface IMyInfo {
  name: string;
  age: number;
  salary: number;
}
const myInfo: IMyInfo = {
  name: "shakeeb",
  age: 24,
  salary: 122222222,
};

const addMeIn = <T extends IMyInfo>(myInfo: T): T => {
  const crush = "nai";
  const newData = { ...myInfo, crush };
  return newData;
};
const result5 = addMeIn<IMyInfo>(myInfo);
console.log(result5);
