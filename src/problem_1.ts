//  Question : Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

const repetend = (param1: string, param2: number = 3): void => {
  for (let i = 0; i < param2; i++) {
    console.log(param1);
  }
};
repetend("hello I am shakeeb", 5);
