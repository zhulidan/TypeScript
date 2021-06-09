//1. boolean
let isDone: boolean = false;
// let createdByNewBoolean: boolean = new Boolean(1)
var createdByBoolean1: boolean = Boolean(1);
console.log(typeof createdByBoolean1)

//2. number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

//3. string
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

//4. 空值
function alertName(): void {
    alert('My name is Tom');
}

let unusable: void = undefined;

// 5.null 和 undefined
let num: number = undefined;


let u: undefined;
let num1: number = u;

//void不能赋值给number
// let u1: void;
// let num2: number = u1