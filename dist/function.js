"use strict";
//normal function :
function sum(a, b) {
    return a + b;
}
sum(2, 2);
// console.log(sum(2, 2));
//arrow function
const ArrowSum = (a, b) => a + b;
// if the function is no return add void
function NoReturn() {
    console.log("hello");
}
// NoReturn();
//multiple the array :
const Arr = [1, 2, 3, 4];
const NewArray = Arr.map((element) => element * element);
// console.log(NewArray);
const person = {
    Name: "shakeeb",
    tkRe: 5,
    addBalance(money) {
        console.log(`my new balance is ${this.tkRe + money}`);
    },
};
//default  parameters :
const defaultValue = (num1, num2 = 20) => {
    return num1 + num2;
};
// console.log(defaultValue(20));
//spread operators :
const Friends = ["habik", "kabib", "dabib"];
const NewFriends = ["sahs", "dww"];
Friends.push(...NewFriends);
//rest parameters :
const greetFriends = (...friends) => {
    console.log(friends);
};
// greetFriends("sd", "sdd", "xsd");
