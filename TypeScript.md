- [1. 简介](#1-简介)
  - [1.1. 什么是 TypeScript？](#11-什么是-typescript)
  - [1.2. 安装 TypeScript](#12-安装-typescript)
  - [1.3. Hello TypeScript](#13-hello-typescript)
- [2. 基础](#2-基础)
  - [2.1. 原始数据类型](#21-原始数据类型)
    - [2.1.1 布尔值](#211-布尔值)
    - [2.1.2 数值](#212-数值)
    - [2.1.3 字符串](#213-字符串)
    - [2.1.4 空值 void](#214-空值-void)
    - [2.1.5 Null 和 Undefined](#215-null-和-undefined)
  - [2.2. 任意值](#22-任意值)
    - [2.2.1 什么是任意值类型](#221-什么是任意值类型)
    - [2.2.1 任意值的属性和方法](#221-任意值的属性和方法)
    - [2.2.2 未声明类型的变量](#222-未声明类型的变量)
  - [2.3. 类型推论](#23-类型推论)
    - [2.3.1 什么是类型推论](#231-什么是类型推论)
  

# 1. 简介

## 1.1. 什么是 TypeScript？

- TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目
- TypeScript 是一门静态类型、弱类型的语言
- TypeScript 是完全兼容 JavaScript 的，它不会修改 Javascript 运行时的特性
- TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中
- TypeScript 拥有很多编译选项，类型检查的严格程度由你决定
- TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript
- TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力
- TypeScript 拥有活跃的社区，大多数常用的第三方库都提供了类型声明
- TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）

## 1.2. 安装 TypeScript

1. TypeScript 的命令行工具安装方法如下:

```javascript
    npm install -g typescript
```

- 以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了

2. 编译一个 TypeScript 文件很简单：

```javascript
    tsc hello.ts
```

- 我们约定使用 TypeScript 编写的文件以 .ts 为后缀，用 TypeScript 编写 React 时，以 .tsx 为后缀

## 1.3. Hello TypeScript

- 我们从一个简单的例子开始。
将以前代码赋值到 `hello.ts` 中
  
```javascript
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```

然后执行

```javascript
tsc hello.ts
```

这时会产生一个编译好的 `hello.js` :

```javascript
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
```

在 TypeScript 中，我们使用 `:` 指定变量的类型，`:` 的前后有没有空格都可以的

上述例子中，我们用 `:` 指定 `person` 参数类型为 `string` 。但是编译为 `js` 之后，并没有什么检查的代码被查入进来

这是因为 **`TypeScript` 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。** 而在运行时，与普通的 `JavaScript` 文件一样，不会对类型进行检查。

- 如果我们需要保证运行时的参数类型，还是得手动对类型进行判断：
  
```javascript
function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

let user = 'Tom';
console.log(sayHello(user));
```

> `let` 是 ES6 中的关键字，和 `var` 类似，用于定义一个局部变量，可以参阅 let 和 const 命令。

- 下面尝试把这段代码编译一下：

```javascript
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = [0, 1, 2];
console.log(sayHello(user));
```

编辑器中会提示错误，编译的时候也会报错

```
hello.ts:6:22 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

但是还是生成了 js 文件：

```javscript
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = [0, 1, 2];
console.log(sayHello(user));
```

这是因为 **`TypeScript` 编译的时候即使报错了，还是会生成编译结果**，我们仍然可以使用这个编译之后的文件

如果要在报错的时候终止 js 文件的生成，可以在 `tsconfig.json` 中配置 `noEmitOnError` 即可。

# 2. 基础

## 2.1. 原始数据类型

- JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）

- 原始数据类型包括：布尔值、数值、字符串、`null`、`undefined` 以及 ES6 中的新类型 `Symbol` 和 ES10 中的新类型 `BigInt`

- 本节主要介绍前五种原始数据类型在 TypeScript 中的使用

### 2.1.1 布尔值

- 布尔值是最基础的数据类型，在 TypeScript 中，使用 `boolean` 定义布尔值类型

```javscript
let isDone : boolean = false;
//编译通过
//后面约定，未强调编译错误的代码片段，默认值编译成功
```

- 注意：使用构造函数 `Boolean` 创造的对象 **不是** 布尔值

```javscript
let createdByNewBoolean: boolean = new Boolean(1)
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
```

- 事实上 `new Boolean()` 返回的是一个 `Boolean` 对象：

```javscript
let createdByNewBoolean: Boolean = new Boolean(1);
```

- 直接调用 Boolean 也可以返回一个 boolean 类型

```javscript
  let createdByBoolean: boolean = Boolean(1);
```

- 在 TypeScript 中，`boolean` 是 JavaScript 中的基本类型，而 `Boolean` 是 JavaScript 中的构造函数。其他基本类型（除了 `null` 和 `undefined`）一样，不在赘述。
  
### 2.1.2 数值

- 使用 `number` 定义数值类型：
  
```javscript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;//Infinity无穷数
```

- 编译结果：

```javscript
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
```

- 其中 `0b1010` 和 `0o744` 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。

### 2.1.3 字符串

- 使用 `string` 定义字符串类型：
  
```javscript
let myName: string = 'Tom';
let myAge: number = 25;

//模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`
```

- 编译结果：
  
```javscript
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".
I'll be " + (myAge + 1) + " years old next month.";
```

- 其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式。

### 2.1.4 空值 void

- JavaScript 没有空值（void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数：

```javscript
function alertName(): void {
    alert('My name is Tom');
}
```

- 声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null` （只在 --strictNullChecks 未指定时）：

```javscript
let unusable: void = undefined;
```

### 2.1.5 Null 和 Undefined

- 在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

```javscript
let u: undefined = undefined;
let n: null = null;
```

- 与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number `类型的变量：

```javscript
//这样不会报错
let num: number = undefined;
```

```javscript
//这样也不会报错
let u: undefined;
let num: number = u;
```

- 而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```javscript
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```

## 2.2. 任意值

- 任意值（Any）用来表示允许赋值为任意类型

### 2.2.1 什么是任意值类型

- 如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```javscript
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

- 但如果是 `any` 类型，则允许被赋值为任意类型
  
```javscript
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```

### 2.2.1 任意值的属性和方法

- 在任意值上访问任何属性都是允许的：
  
```javscript
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.firstName);
```

- 也允许调用任何方法：
  
```javscript
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```

- 可以认为，**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**。

### 2.2.2 未声明类型的变量

- **变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**：

```javscript
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```

- 等价于
  
```javscript
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```

## 2.3. 类型推论

- 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

### 2.3.1 什么是类型推论

- 以下代码虽然没有指定类型，但是会在编译的时候报错：

```javscript
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

- 事实上，它等价于：
  
```javscript
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

- TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是 **类型推论**。
  
- 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

```javscript
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```