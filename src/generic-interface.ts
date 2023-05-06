type relationType<x, y> = [x, y];
interface relationTypeObject {
  name: string;
  age: number;
}

const relation: relationType<relationTypeObject, string> = [
  {
    name: "shakeeb",
    age: 22,
  },
  "din",
];
//use generic interface

interface UsersInterface<T, D = null> {
  name: T;
  age: D;
}
const users: UsersInterface<String, number> = {
  name: "",
  age: 24,
};

interface IName {
  firstName: string;
  lastName: string;
}

const users2: UsersInterface<IName, { birthDate: number; totalDate: number }> =
  {
    name: {
      firstName: "md",
      lastName: "shakeeb",
    },
    age: {
      birthDate: 1999,
      totalDate: 24,
    },
  };
