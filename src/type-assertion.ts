// let something: any;

// // something = "hello";
// // something = 11;
// // something = true;

// something = "next level dev";

// (something as string).length;
// <string>something.length; // it don't work in tsx

// // function that convert kg to gram in typescript :

// const kgToGram = (param: number | string): number | string | undefined => {
//   if (typeof param === "string") {
//     const [value, unit] = param.split(" ");
//     const gram = parseFloat(value) * 1000;
//     return gram;
//   }
//   if (typeof param === "number") {
//     const value = param * 1000;
//     return value;
//   }
// };

// const resultToBeNumber = kgToGram("21 kg") as string;
// const resultToBENumber = kgToGram(22) as number;

// console.log(resultToBeNumber, resultToBENumber);
