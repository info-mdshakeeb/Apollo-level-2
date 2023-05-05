type operationType = (x: number, y: number) => number;

const work = (num1: number, num2: number, operation: operationType) => {
  return operation(num1, num2);
};

console.log(work(5, 2, (x, y) => x + y));
