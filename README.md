# TypeScript

//git remote add origin https://github.com/info-mdshakeeb/Apollo-level-2.git

# Module-02

---

## **2-1: Installation typescript, nvm & ts-node-dev**

---

Click Here to see: [NVM install command for MacOS](https://dev.to/httpjunkie/setup-node-version-manager-nvm-on-mac-m1-7kl?fbclid=IwAR3RL9Qxl5a-ZdzhZIP427DSCvwC3sXVrSdu-wEk-zbwYlSDO3Mosoaxzzk)

### TypeScript Install and run

TS File can’t run by default so, we need to compile first `.ts` file to a `.js` file and then run that `.js` file to see the output. for converting the `.ts` file into the `.js` file we need to install TypeScript Compiler in short TSC.

For installing TypeScript Compiler:

```bash
npm install -g typescript
tsc --v
```

then we need to compile the following command:

```bash
tsc index.ts
```

then we can run that `.js` file using this command:

```bash
node index.js
```

### Overcome this lengthy process:

at first, we need to create a node application that includes the `node_module` folder. also need to install `nodemon` for automatically re-rendering the node server if anything changes.

```bash
npm init -y

# Install nodemon globally on your machine
npm install -g nodemon
```

then need to config the `package.json` file. add inside `“scripts”` section:

```json
"scripts": {
		"start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

now, we can use `npm start` command to see the output of the javascript file. don’t need to use `node index.js` command every time.

but still, we have a problem because if any change happens in the `.ts` file then need to compile it to the `.js` file. always we need to open two terminals:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c4abbacf-492a-489b-8064-95a10c30d4b9/Untitled.png)

1. for `npm start` or, `nodemon index.js` command.
2. compile typescript file into javascript file using `tsc index.js` command.

To fix this issue try **Typescript Node Dev**.

### Final & Most Easy Way: to run `.ts` file

> TypeScript Node Dev Install Command:
>
> ```bash
> npm i ts-node-dev --save-dev
> ```
>
> after install need to config the `package.json` file. add inside `“scripts”` section and no longer need to use `nodemon`.
>
> ```json
> "scripts": {
> 		"start": "ts-node-dev --respawn --transpile-only index.ts",
>     "test": "echo \"Error: no test specified\" && exit 1"
>   },
> ```
>
> ```bash
> tsc --init
> ```
>
> it is used to compile `.ts` files to the `.js` file automatically by running this command.
>
> ```bash
> npm start
> ```
>
> using the above command we can run `index.ts` file very easily and when any changes happen it automatically run that code and show the output.
>
> now, if we want to separate all `.ts` and `.js` files into a separate folder.
>
> for example, we want to put all of `.ts` files into the `scr` folder, and after compiling all `.js` files automatically generate into the `dist` folder. so, we need to configure `tsconfig.json` file.
>
> ```json
> /* search rootDir then, uncomment that and write the scr folder path.*/
> "rootDir": "./src",
> /* search outDir then, uncomment that and write the dist folder path.*/
> "outDir": "./dist",
> ```
>
> if you getting error
>
> 'rootDir' is expected to contain all source files.
> The file is in the program because:
> Matched by default include pattern '\*_/_'
>
> Found 1 error.
>
> use this:
>
> ```json
> /* search rootDir then, uncomment that and write the scr folder path.*/
> "rootDir": "src",
> /* search outDir then, uncomment that and write the dist folder path.*/
> "outDir": "./dist",
> ```
>
> now use just one command to compile all `.ts` files to `.js` files using `tsc` command.
>
> ```bash
> tsc
> ```
>
> see the output automatically `npm start` but it's not working because we don't have `index.ts` file in the root dir.
>
> we can run the command `nodemon dist/index.js` to watch the changes of the `.js` file and make changes inside of the `index.ts` file then just run the command `tsc`. it automatically shows the output.
>
> now if you want to run `.ts` file simply run this command but it’s not automatically watch.
>
> ```bash
> npx ts-node-dev scr/index.ts
> ```
>
> for automatically watch that file need to add an extra flag.
>
> ```bash
> npx ts-node-dev --respawn scr/index.ts
> ```

## **2-2 Primitive types in typescriptPreviousNext**

---

### Explicit Type

```tsx
/*both are string type, you can't assign anything without string*/
let name: string = "Rana";
const username: string = "swdrana";

/*number type*/
var roll: number = 1;

/*boolen type*/
let isStudent: boolean = true;
```

### Implicit Type

```tsx
/*it's automatically detect as string type, you can't assign anything without string*/
let name = "Rana";
const username = "swdrana";

/*number type*/
var roll = 1;

/*boolen type*/
let isStudent = true;
```

### Any Type

```tsx
/* not recommend */
let name;
name = 'Rana';
name = '李小雨'

/* recommended */
let universityName = undefined;
universityName = '南京邮电大学， 南京，中国.'；
universityName = 'Nanjing University of Posts & Telecommunication, Nanjing, China.'；
universityName = 123

/* but it's not any type if you use const keyword */
const location = undefined;
/* location = 'China' */ /* invalid */
```

## \***\*2-3: Array and Tuples in typescript\*\***

---

Array is one of the Reference Type in TypeScript.

```tsx
/* both are sting array you can assign or push any other types */
let studentName: string[] = ["Rana", "Zaman", "Masud"];
let studentName = ["Rana", "Zaman", "Masud"];

/* both are sting tuples you can assign or push any other types also maintain the order of the types. */
let studentInfo: [number, string] = [01, "Rana"];
studentInfo: [number, string] = [02, "Zaman"];
studentInfo: [number, string] = [03, "Masud"];
```

## \***\*2-4: Object, Literal Types and Optional types\*\***

---

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c585e6c8-fb8e-433c-b8da-9fe4186f72ad/Untitled.png)

## \***\*2-5: Functions in Typescript\*\***

---

Normal Function

Before working with typescript function use `"noImplicitAny": true,` into `tsconfig.json` file. it will gives errors if you not specify any type in the function parameter. and if you set that value to `false` then the editor don’t give any error the code working as a simple javascript code not typescript.

```tsx
// Normal Function
function add(num1: number, num2: number): number {
  console.log(num1 + num2);
  return num1 + num2;
}
add(2, 5);

// Arrow Function
//    fn_name = (param:type  , param:type  ): return_type => fn_body
const welcome = (fName: string, lName: string): string =>
  `Welcome ${fName} ${lName}`;
console.log(welcome("Masud", "Rana"));

// callback function
const makeSquire = [1, 2, 4];
const newArr = makeSquire.map((item: number) => item * item);

// When a function use inside a object it's called Method.
const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "Rana",
  balance: 5,
  addBalance(money: number) {
    return this.balance + money;
  },
};
```

## 2-6: Spread, Rest, Default Parameters and Destructuring

---

### Default Parameters

can't use default parameter at first element or parameter.

```bash
function add(num1: number, num2: number = 10): number {
    console.log(num1 + num2);
    return num1 + num2;
  }
  add(5);
```

### Spread | Destructuring

same as javascript.

```tsx
// Destructuring
const myFriend = ["a", "b", "c"];
const newFriend = ["d", "e", "f"];

myFriend.push(...newFriend);
console.log(myFriend);
```

### rest

```tsx
// rest (it's !destructuring) [we can called it's dynamic parameter]
const addNum = (...nums: number[]): void => {
  nums.forEach((num, index) => console.log(`nums[${index}] = ${num}`));
};
addNum(1, 2, 4, 5);
```

### alias

```tsx
const bestFriend = {
  fullName: "Book",
  age: 1,
};
const { fullName: string } = bestFriend; //here string is not type it's alias.
console.log(string);
console.log({ string });
```

## \***\*2-7: Type alias and optional types\*\***

---

```tsx
//object type alias
type UserInfo = {
  name: string;
  email: string;
  address?: string;
  age?: number;
  phone: number;
};
const user1: UserInfo = {
  name: "Rana",
  email: "xxx@yyy.zzz",
  address: "BD",
  age: 25,
  phone: 1190,
};
const user2: UserInfo = {
  name: "Masud",
  email: "mmm@nnn.zzz",
  phone: 190,
};

// function type alias
type OperationType = (x: number, y: number) => number;
const calculate = (num1: number, num2: number, operation: OperationType) => {
  console.log(operation(num1, num2));
  return operation(num1, num2);
};
calculate(1, 2, (a, b) => a + b);
calculate(1, 2, (a, b) => a - b);
calculate(1, 2, (a, b) => a * b);
```

## \***\*2-8: Union, Intersection and Enum Types\*\***
