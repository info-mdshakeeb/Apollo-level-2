//Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

const isString = (param: unknown): void => {
  if (typeof param === "string") {
    console.log(`your type string is ${param}`);
  } else {
    console.log("Error ");
  }
};
isString("shakeeb");
isString(22); // error
