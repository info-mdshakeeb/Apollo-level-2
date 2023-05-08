// question :Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18

interface IPerson {
  name: string;
  age: number;
}
const users: IPerson[] = [
  { name: "Ali", age: 16 },
  { name: "Jal", age: 20 },
  { name: "shakeeb", age: 24 },
  { name: "July", age: 17 },
];
const modifiedUsers = (users: IPerson[]): IPerson[] => {
  const user = users.filter((element) => element.age >= 18);
  return user;
};

const filterUsers = modifiedUsers(users);

console.log(filterUsers);
