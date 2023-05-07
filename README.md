# Assignment_1(typeScript)

## Interview Questions:

# 1.What is TypeScript, and how is it different from JavaScript?

# => TypeScript :

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

# => different form JavaScript :

TypeScript can be strongly typed, while JavaScript is dynamically typed only. TypeScript is more readable and maintainable than JavaScript. TypeScript supports abstraction through interfaces, while JavaScript does not.

# 2.Can you explain the difference between "interface" and "type" in TypeScript?

=>Types and Interfaces seem similar in a surface look, there are many differences between them.

# For example,

interfaces are essentially a means of describing the shapes of data, like an object.

On the other hand, types are definitions of data types, like primitive, intersection, union, tuple, or different types. In this section, we will discuss some key differences between interfaces and types in TypeScript.

# 3. Can you give an example of how to use generics in TypeScript?

```ts
// a generic function thats can return an array
const makeArray = <X, Y>(param1: X, param2: Y): [X, Y] => [param1, param2];
const result = makeArray<number, number>(12, 12);
// console.log(result);
```

# 4. What is the difference between an "unknown" and "any" type in TypeScript?

=>unknown and any are 2 special types that can hold any value. unknown is recommended over any because it provides safer typing — you have to use type assertion or narrow to a specific type if you want to perform operations on unknown

# 5. Can you give an example of how to use enums in TypeScript?

# 6. What is the "as" keyword used for in TypeScript?

# 7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?
