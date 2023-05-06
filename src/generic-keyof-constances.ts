type person = {
  name: string;
  role: number;
  address: string;
};

type newType = "name" | "role" | "address"; // Manually create it types
type newTypeUsingKeyOf = keyof person;
const a: newType = "address";
const b: newTypeUsingKeyOf = "name";

// ({name :"mx.x",age:100},"age")

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => obj[key];

interface IData {
  name: string;
  age: number;
  address: String;
}

const data: IData = { name: "shakeeb", age: 22, address: "jp" };
const result6 = getProperty(data, "age");
console.log(result6);
