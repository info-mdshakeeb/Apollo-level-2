# Typescript

## type_Assertion :

Type assertion mean understand type better then typeScript

like:

let something:any;

something = "hello";
something = 11;
something = true;

in the example we can use All the type

something = "next level dev";

<!-- we can understand better the ts -->

(something as string).length;
<string>something.length; // it don't work in tsx

## type vs interface

// type:
type Users = {
name: string;
age: number;
};
// interface: it use only object type of data
interface IUser {
name: string;
age: number;
}
