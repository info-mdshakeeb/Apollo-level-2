// // type Alias vs interface
// // type Alias:

// type Users = {
//   name: string;
//   age: number;
// };
// // interface: it use only object type of data
// interface IUser {
//   name: string;
//   age: number;
// }
// interface IExtendedUser extends IUser {
//   roll: number;
// }

// const userWithTypeAlias: Users = {
//   name: "shakeeb",
//   age: 20,
// };

// const userWithTypeInterface: IUser = {
//   name: "interface",
//   age: 12,
// };

// const userWithTypeAliasEx: IExtendedUser = {
//   name: "",
//   age: 22,
//   roll: 2,
// };

// //type Alias function
// type AddNumberType = (num1: number, num2: number) => number;

// // type Alias array
// type FriendsType = string[];

// const friends: FriendsType = ["data", "shakeeb"];

// //  interface can be used in function and array too:
// interface IAddNumbers {
//   (num1: number, num2: number): number;
// }

// interface IFriendsType {
//   [index: number]: string;
// }
// const Friends: IFriendsType = ["data", "shakeeb"];
