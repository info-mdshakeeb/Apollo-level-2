type Name = "Ph";

const multipleWork = (
  number1: number,
  number2: number,
  operation: (x: number, y: number) => number
) => {
  return operation(number1, number2);
};
// console.log(multipleWork(12, 10, (x, y) => x + y));
