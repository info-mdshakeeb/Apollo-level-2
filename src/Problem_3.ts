// Question 3 : Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

const arrayReverse = <T>(...elements: T[]): T[] => {
  return elements.reverse();
};

const data = arrayReverse<string>("1", "2", "3");
// console.log(data);
