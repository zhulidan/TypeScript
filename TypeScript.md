- [1. 简介](#1-简介)
  - [1.1. 什么是 TypeScript？](#11-什么是-typescript)
    - [1.1.1  TypeScript 的特性](#111--typescript-的特性)
      - [类型系统](#类型系统)
        - [TypeScript 是静态类型](#typescript-是静态类型)
        - [TypeScript 是弱类型](#typescript-是弱类型)
      - [适用于任何规模](#适用于任何规模)
      - [与标准同步发展](#与标准同步发展)
    - [1.1.2  总结](#112--总结)
  - [1.2. 安装 TypeScript](#12-安装-typescript)
    - [编辑器](#编辑器)
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
    - [2.2.2 任意值的属性和方法](#222-任意值的属性和方法)
    - [2.2.3 未声明类型的变量](#223-未声明类型的变量)
  - [2.3. 类型推论](#23-类型推论)
    - [2.3.1 什么是类型推论](#231-什么是类型推论)
  - [2.4. 联合类型](#24-联合类型)
    - [2.4.1 简单的例子](#241-简单的例子)
    - [2.4.2 访问联合类型的属性或方法](#242-访问联合类型的属性或方法)
  - [2.5. 对象的类型————接口](#25-对象的类型接口)
    - [2.5.1 什么是接口](#251-什么是接口)
    - [2.5.2 简单的例子](#252-简单的例子)
    - [2.5.3 可选属性](#253-可选属性)
    - [2.5.4 任意属性](#254-任意属性)
    - [2.5.5 只读属性](#255-只读属性)
  - [2.6. 数组的类型](#26-数组的类型)
    - [2.6.1「类型 + 方括号」表示法](#261类型--方括号表示法)
    - [2.6.2 数组泛型](#262-数组泛型)
    - [2.6.3 用接口表示数组](#263-用接口表示数组)
    - [2.6.4 类数组](#264-类数组)
    - [2.6.5 any 在数组中的应用](#265-any-在数组中的应用)
  - [2.7. 函数的类型](#27-函数的类型)
    - [2.7.1 函数的声明](#271-函数的声明)
    - [2.7.2 函数表达式](#272-函数表达式)
    - [2.7.3 用接口定义函数的形状](#273-用接口定义函数的形状)
    - [2.7.4 可选参数](#274-可选参数)
    - [2.7.5 参数默认值](#275-参数默认值)
    - [2.7.6 剩余参数](#276-剩余参数)
    - [2.7.7 重载](#277-重载)
  - [2.8. 类型断言](#28-类型断言)
    - [2.8.1 语法](#281-语法)
    - [2.8.2 类型断言的用途](#282-类型断言的用途)
      - [2.8.2.1 将一个联合类型断言为其中一个类型](#2821-将一个联合类型断言为其中一个类型)
      - [2.8.2.2 将一个父类型断言为更加具体的子类](#2822-将一个父类型断言为更加具体的子类)
      - [2.8.2.3 将任何一个类型断言为 any](#2823-将任何一个类型断言为-any)
      - [2.8.2.4 将 any 断言为一个具体的类型](#2824-将-any-断言为一个具体的类型)
    - [2.8.3 类型断言的限制](#283-类型断言的限制)
    - [2.8.4 双重断言](#284-双重断言)
    - [2.8.5 类型断言 vs 类型转换](#285-类型断言-vs-类型转换)
    - [2.8.6 类型断言 vs 类型声明](#286-类型断言-vs-类型声明)
    - [2.8.7 类型断言 vs 泛型](#287-类型断言-vs-泛型)
  

# 1. 简介

## 1.1. 什么是 TypeScript？

> Typed JavaScript at any Scale. 
> 添加了类型系统的 JavaScript，适用于任何规模的项目。

- 以上描述是官网对于 TypeScript 的定义
- 它强调了 TypeScript 的两个最重要的特性———类型系统、适用于任何规模


### 1.1.1  TypeScript 的特性

#### 类型系统

- 从 TypeScript 的名字就可以看出来，「类型」 是最核心的特性
- 我们知道，JavaScript 是一门非常灵活的编程语言：
  
    - 它没有类型的约束，一个变量可能是初始化时是字符串，过一会儿又被赋值为数字。
    - 由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。
    - 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改
    - 函数是 JavaScript 中的一等公民，可以赋值给变量，也可以当作参数或返回值。

- 这种灵活性就像一把双刃剑，一方面使得 JavaScript 蓬勃发展，无所不能，从 2013 年开始就一直蝉联最普遍使用的变成语言排行榜冠军；另一方面也使得它的代码质量参次不起，维护成本高，运行时错误多。

- 而 TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点

##### TypeScript 是静态类型

- 类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。
- 动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。
- JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：
  
```javascript
let foo = 1;
foo.split(' ');
// Uncaught TypeError: foo.split is not a function
// 运行时会报错（foo.split 不是一个函数），造成线上 bug
```

- 静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 **TypeScript 是静态类型**，这段 TypeScript 代码在编译阶段就会报错了：
  
```javascript
let foo = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
```

- 你可能会奇怪，这段 TypeScript 代码看上去和 JavaScript 没有什么区别呀
- 没错！大部分 JavaScript 代码都只需要经过少量的修改（或者完全不用修改）就变成 TypeScript 代码，这得益于 TypeScript 强大的[类型推论]，即使不去手动声明变量 `foo` 的类型，也能在变量初始化时自动推论出它是一个 `number` 类型

- 完整的 TypeScript 代码是这样的：
  
```javascript
let foo: number = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
```

##### TypeScript 是弱类型

- 类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。
- 以下这段代码不管是在 JavaScript 中还是在 TypeScript 中都是可以正常运行的，运行时数字 `1` 会被隐式类型转换为字符串 `'1'`，加号 `+` 被识别为字符串拼接，所以打印出结果是字符串 `'11'`

```javascript
console.log(1 + '1');
// 打印出字符串 '11'
```

- TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以 **它们都是弱类型**

- 作为对比，Python 是强类型，以下代码会在运行时报错：

```python
print(1 + '1')
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

- 若要修复该错误，需要进行强制类型转换：

```python
print(str(1) + '1')
# 打印出字符串 '11'
```

> 强/弱是相对的，Python 在处理整型和浮点型相加时，会将整型隐式转换为浮点型，但是这并不影响 Python 是强类型的结论，因为大部分情况下 Python 并不会进行隐式类型转换。相比而言，JavaScript 和 TypeScript 中不管加号两侧是什么类型，都可以通过隐式类型转换计算出一个结果——而不是报错——所以 JavaScript 和 TypeScript 都是弱类型。

> 虽然 TypeScript 不限制加号两侧的类型，但是我们可以借助 TypeScript 提供的类型系统，以及 ESLint 提供的代码检查功能，来限制加号两侧必须同为数字或同为字符串。这在一定程度上使得 TypeScript 向「强类型」更近一步了——当然，这种限制是可选的。

- 这样的类型系统体现了 TypeScript 的核心设计理念：在完整保留 JavaScript 运行时行为的基础上，通过引入静态类型系统来提高代码的可维护性，减少可能出现的 bug

#### 适用于任何规模

- TypeScript 非常适用于大型项目——这是显而易见的，类型系统可以为大型项目带来更高的可维护性，以及更少的bug

- 在中小型项目中推行 TypeScript 的最大障碍就是认为使用 TypeScript 需要写额外的代码，降低开发效率。但事实上，由于有[类型推论]，大部分类型都不需要手动声明了。相反，TypeScript 增强了编辑器（IDE）的功能，包括代码补全、接口提示、跳转到定义、代码重构等，这在很大程度上提高了开发效率。而且 TypeScript 有近百个[编译选项]，如果你认为类型检查过于严格，那么可以通过修改编译选项来降低类型检查的标准。

- TypeScript 还可以和 JavaScript 共存。这意味着如果你有一个使用 JavaScript 开发的旧项目，又想使用 TypeScript 的特性，那么你不需要急着把整个项目都迁移到 TypeScript，你可以使用 TypeScript 编写新文件，然后在后续更迭中逐步迁移旧文件。如果一些 JavaScript 文件的迁移成本太高，TypeScript 也提供了一个方案，可以让你在不修改 JavaScript 文件的前提下，编写一个[类型声明文件]，实现旧项目的渐进式迁移。

- 事实上，就算你从来没学习过 TypeScript，你也可能已经在不知不觉中使用到了 TypeScript——在 VSCode 编辑器中编写 JavaScript 时，代码补全和接口提示等功能就是通过 TypeScript Language Service 实现的：

![avatar](/images/what-is-typescript-vscode.png)

- 一些第三方库原生支持了 TypeScript，在使用时就能获得代码补全了，比如 Vue 3.0:

![avatar](/images/what-is-typescript-vue.png)

- 有一些第三方库原生不支持 TypeScript，但是可以通过安装社区维护的类型声明库（比如通过运行 `npm install --save-dev @types/react` 来安装 React 的类型声明库）来获得代码补全能力——不管是在 JavaScript 项目中还是在 TypeScript 中项目中都是支持的：

![avatar](/images/what-is-typescript-react.png)

- 由此可见，TypeScript 的发展已经深入到前端社区的方方面面了，任何规模的项目都或多或少得到了 TypeScript 的支持。

#### 与标准同步发展

- TypeScript 的另一个重要的特性就是坚持与 ECMAScript 标准同步发展

- ECMAScript 是 JavaScript 核心语法的标准，自 2015 年起，每年都会发布一个新版本，包含一些新的语法

- 一个新的语法从提案到变成正式标准，需要经历以下几个阶段：
  
    - Stage 0：展示阶段，仅仅是提出了讨论、想法、尚未正式提案。
    - Stage 1：征求意见阶段，提供抽象的 API 描述，讨论可行性，关键算法等。
    - Stage 2：草案阶段，使用正式的规范语言精确描述其语法和语义
    - Stage 3：候选人阶段，语法的设计工作已完成，需要浏览器、Node.js 等环境支持，搜集用户的反馈
    - Stage 4：定案阶段，已准备好将其添加到正式的 ECMAScript 标准中

- 一个语法进入到 Stage 3 阶段后，TypeScript 就会实现它。一方面，让我们可以尽早的使用到最新的语法，帮助它进入到下一个阶段；另一方面，处于 Stage 3 阶段的语法已经比较稳定了，基本不会有语法的变更，这使得我们能够放心的使用它。

- 除了实现 ECMAScript 标准之外，TypeScript 团队也推进了诸多语法提案，比如可选链操作符（`?.`）、空值合并操作符（`??`）、Throw 表达式、正则匹配索引等。
  
### 1.1.2  总结

什么是 TypeScript？

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

### 编辑器

- TypeScript 最大的优势之一便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。
- 主流的编辑器都支持 TypeScript，这里我推荐使用 Visual Studio Code。
- 它是一款开源，跨终端的轻量级编辑器，内置了对 TypeScript 的支持。

- 另外它本身也是用 TypeScript 编写的。
- 下载安装：https://code.visualstudio.com/

## 1.3. Hello TypeScript

- 我们从一个简单的例子开始。
将以前代码复制到 `hello.ts` 中
  
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

上述例子中，我们用 `:` 指定 `person` 参数类型为 `string` 。但是编译为 `js` 之后，并没有什么检查的代码被插入进来

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
let isDone: boolean = false;
//编译通过
//后面约定，未强调编译错误的代码片段，默认值编译成功
```

- 注意：使用构造函数 `Boolean` 创造的对象 **不是** 布尔值

```javscript
let createdByNewBoolean: boolean = new Boolean(1);

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

### 2.2.2 任意值的属性和方法

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

### 2.2.3 未声明类型的变量

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
  
- **如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 `any` 类型而完全不被类型检查**：

```javscript
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

## 2.4. 联合类型

- 联合类型（Union Types）表示取值可以为多种类型中的一种。

### 2.4.1 简单的例子

```javscript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

```javscript
let myFavoriteNumber: string | number;
myFavoriteNumber = true;
// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

- 联合类型使用 `|` 分隔每个类型。

- 这里的 `let myFavoriteNumber: string | number` 的含义是，允许 `myFavoriteNumber` 的类型是 `string` 或者 `number`，但是不能是其它类型。

### 2.4.2 访问联合类型的属性或方法

- 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们 **只能访问此联合类型的所有类型里共有的属性或方法**：

```javscript
function getLength(something: string | number): number {
    return something.length;
}
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

- 上例中，`length` 不是 `string` 和 `number` 的共有属性，所以会报错。
  
- 访问 `string` 和 `number` 的共有属性是没问题的：

```javscript
function getString(something: string | number): string{
    return something.toString();
}
```

- 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```javscript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); //5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length);//编译时报错
// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

- 上例中，第二行的 `myFavoriteNumber` 被推断成了 `string`，访问它的 `length` 属性不会报错。而第四行的 `myFavoriteNumber` 被推断成了 `number`，访问它的 `length` 属性就报错了

## 2.5. 对象的类型————接口

- 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

### 2.5.1 什么是接口

- 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

- TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

### 2.5.2 简单的例子

```javascript
interface Person{
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
};
```

- 上面的例子中，我们定义了一个接口 `Person`，接着定义了一个变量 `tom`，它的类型是 `Person`。这样，我们就约束了 `tom` 的形状必须和接口 `Person` 一致

- 接口一般首字母大写。有的编程语言中会建议接口的名称加上 `I` 前缀。

- 定义的变量比接口少了一些属性是不允许的：

```javascript
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom'
};

// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.
```

- 多一些属性也是不允许的：
  
```javascript
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
```

- 可见，**赋值的时候，变量的形状必须和接口的形状保持一致**。

### 2.5.3 可选属性

- 有时我们希望不要完全匹配一个形状，那么可以用可选属性：

```javascript
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: 'Tom'
}
```

```javascript
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
}
```

- 可选属性的含义是该属性可以不存在

- 这时 **仍然不允许添加未定义的属性**：

```javascript
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}
// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
```

### 2.5.4 任意属性

- 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```javascript
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: 'Tom',
  gender: 'male'
}
```  

- 使用 `[propName: string]` 定义了任意属性取 `string` 类型的值

- 需要注意的是，**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**：

```javascript
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}
// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
```  

- 上例中，任意属性的值允许是 `string`，但是可选属性 `age` 的值却是 `number`，`number` 不是 `string` 的子属性，所以报错了
- 另外，在报错信息中可以看出，此时 `{ name: 'Tom', age: 25, gender: 'male' }` 的类型被推断成了`{ [x: string]: string | number; name: string; age: number; gender: string; }`，这是联合类型和接口的结合

- 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：

```javascript
interface Person {
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```

### 2.5.5 只读属性

- 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：

```javascript
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
}

tom.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```

- 上例中，使用 `readonly` 定义的属性 `id` 初始化后，又被赋值了，所以报错了。

- **注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**：
  
```javascript
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  name: 'Tom',
  gender: 'male'
};

tom.id = 89757;

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```

- 上例中，报错信息有两处，第一处是在对 `tom` 进行赋值的时候，没有给 `id` 赋值。
- 第二处是在给 `tom.id` 赋值的时候，由于它是只读属性，所以报错了

## 2.6. 数组的类型

在 TypeScript 中，数组类型有多种定义方式，比较灵活

### 2.6.1「类型 + 方括号」表示法

- 最简单的方法是使用 「类型 + 方括号」 来表示数组：

```javascript
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

- 数组的项中 **不允许** 出现其它的类型：

```javascript
let fibonacci: number[] = [1, '1', 2, 3, 5];
// Type 'string' is not assignable to type 'number'.
```

- 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：

```javascript
let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push("8");
// Argument of type '"8"' is not assignable to parameter of type 'number'.
```

- 上例中，`push` 方法只允许传入 `number` 类型的参数，但是却传了一个 `"8"` 类型的参数，所以报错了。这里 `"8"` 是一个字符串字面量类型，会在后续章节中详细介绍

### 2.6.2 数组泛型

- 我们也可以使用数组泛型（Array Generic） `Array<elemType>` 来表示数组：

```javascript
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

- 关于泛型，可以参考泛型一章。

### 2.6.3 用接口表示数组

- 接口也可以用来描述数组：

```javascript
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5]
```

- `NumberArray` 表示：只要索引的类型是数字时，那么值的类型必须是数字

- 虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

- 不过有一种情况例外，那就是它常用来表示类数组。

### 2.6.4 类数组

- 类数组（Array-like Object）不是数组类型，比如 `arguments`：

```javascript
function sum(){
  let args: number[] = arguments
}
// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
```

- 上例中，`arguments` 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：

```javascript
function sum(){
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments
}
```

- 在这个例子中，我们除了约束当前索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 `length` 和 `callee` 两个属性。

- 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：

```javascript
function sum(){
  let args: IArguments = arguments;
}
```

- 其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：

```javascript
interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}
```

- 关于内置对象，可以参考内置对象一章

### 2.6.5 any 在数组中的应用

- 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：

```javascript
let list: any[] = ['xcatliu', 25, {website: 'http://xcatliu.com'}]
```

## 2.7. 函数的类型

> 函数是 JavaScript 中的一等公民

### 2.7.1 函数的声明

- 在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）

```javascript
//函数声明（Function Declaration）
function sum(x, y) {
  return x + y;
}

//函数表达式（Function Expression）
let mySum = function (x, y) {
  return x + y;
}
```

- 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：

```javascript
function sum(x: number, y: number): number{
  return x + y;
}
```
  
- 注意，输入多余的（或者少于要求的）参数，是不被允许的：

```javascript
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2, 3)
// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
```

```javascript
function sum(x: number, y: number): number {
  return x + y;
}
sum(1)
// index.ts(4,1): error TS2346: Supplied parameters do not match any signature of call target.
```

### 2.7.2 函数表达式

- 如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：

```javascript
let mySum = function (x: number, y: number): number {
  return x + y;
}
```

- 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 `mySum`，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 `mySum` 添加类型，则应该是这样：

```javascript  
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}
```

- 注意不要混淆了 TypeScript 中的 `=>` 和 ES6 中的 `=>`

- 在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型

- 在 ES6 中，`=>` 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数

### 2.7.3 用接口定义函数的形状

- 我们也可以使用接口的方式来定义一个函数需要符合的形状：
  
```javascript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
  return source.search(subString) !== -1
}
```

- 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

### 2.7.4 可选参数

- 前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？

- 与接口中的可选属性类似，我们用 `?` 表示可选的参数：

```javascript
function buildName(firstName: string, lastName?: string) {
  if(lastName){
    return firstName + ' ' + lastName;
  }else {
    return firstName;
  }
}
let tomcat = buildName('Tom','Cat');
let tom = buildName('Tom');
```

- 需要注意的是，可选参数必须接在必需参数后面。换句话说，**可选参数后面不允许再出现必需参数了**：

```javascript
function buildName(firstName?: string, lastName: string) {
  if(firstName){
    return firstName + ' ' + lastName;
  }else{
    return lastName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName(undefined, 'Tom');
// index.ts(1,40): error TS1016: A required parameter cannot follow an optional parameter.
```

### 2.7.5 参数默认值

- 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：

```javascript
function buildName(firstName: string, lastName: string = 'Cat'){
  return firstName + ' ' + lastName
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom')
```

- 此时就不受 「可选参数必须接在必需参数后面」的限制了：

```javascript
function buildName(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
```

> 关于默认参数，可以参考 ES6 中函数参数的默认值。

### 2.7.6 剩余参数

- ES6 中，可以使用 `...rest` 的方式获取函数中的剩余参数（rest 参数）：

```javascript
function push(array, ...items){
  items.forEach(function(item){
    array.push(item)
  })
}

let a: any[] = [];
push(a, 1, 2, 3);
```

- 事实上，`items` 是一个数组。所以我们可以用数组的类型来定义它：

```javascript
function push(array: any[], ...items: any[]){
  items.forEach(function(item){
    array.push(item)
  })
}

let a = [];
push(a, 1, 2, 3)
```

- 注意，rest 参数只能是最后一个参数，关于 rest 参数，可以参考 ES6 中的 rest 参数

### 2.7.7 重载

- 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

- 比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符 'olleh'。

- 利用联合类型，我们可以这么实现：

```javascript
function reverse(x: number | string): number | string | void {
  if(typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  }else if(typeof x === 'string'){
    return x.split('').reverse().join('')
  }
}
```

- 然而这样有一个缺点，就是不能精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

- 这时，我们可以使用重载定义多个 reverse 的函数类型：

```javascript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void{
  if(typeof x === 'number'){
    return Number(x.toString().split('').reverse().join(''));
  }else if(typeof x === 'string'){
    return x.split('').reverse().join('')
  }
}
```

- 上例中，我们重复定义了多次函数 `reverse`，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
  
- 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
  
## 2.8. 类型断言

类型断言（Type Assertion）可以用来手动指定一个值的类型

### 2.8.1 语法

```javascript
值 as 类型
```

或

```javascript
<类型>值
```

- 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 `值 as 类型`
  
- 形如 `<Foo>` 的语法在 tsx 中表示的是一个 `ReactNode`，在 ts 中除了表示类型断言之外，也可能是表示一个泛型
  
- 故建议大家在使用类型断言时，统一使用 `值 as 类型` 这样的语法，本书中也会贯彻这一思想

### 2.8.2 类型断言的用途

类型断言的常见用途有以下几种：

#### 2.8.2.1 将一个联合类型断言为其中一个类型

- 之前提到过，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们 **只能访问此联合类型的所有类型中共有的属性或方法**：

```javascript
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}
function getName(animal: Cat | Fish){
  return animal.name;
}
```

- 而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：

```javascript
interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish){
  if(typeof animal.swim === 'function'){
    return true;
  }
  return false;
}
// index.ts:11:23 - error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat'.

```

- 上面的例子中，获取 `animal.swim` 的时候会报错。
- 此时可以使用类型断言，将 `animal` 断言成 `Fish`：

```javascript

interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish){
  if(typeof (animal as Fish).swim === 'function'){
    return true;
  }
  return false;
}

```

- 这样就可以解决访问 `animal.swim` 时报错的问题了。

- 需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时的错误：

```javascript
interface Cat {
  name: string;
  run(): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function swim(animal: Cat | Fish){
  (animal as Fish).swim();
}

const tom: Cat = {
  name: 'Tom',
  run() {
    console.log('run')
  }
}

swim(tom);
// Uncaught TypeError: animal.swim is not a function`
```

- 上面的例子编译时不会报错，但在运行时会报错：
  
```javascript
Uncaught TypeError: animal.swim is not a function`
```

- 原因是 `(animal as Fish).swim()` 这段代码隐藏了 `animal` 可能为 `Cat` 的情况，将 `animal` 直接断言为 `Fish` 了，而 TypeScript 编辑器信任了我们的断言，故在调用 `swim()` 时没有编译错误

- 可是 swim 函数接受的参数是 Cat | Fish，一旦传入的参数是 Cat 类型的变量，由于 Cat 上没有 swim 方法，就会导致运行时错误了。

- 总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误

#### 2.8.2.2 将一个父类型断言为更加具体的子类

- 当类之间有继承关系时，类型断言也是很常见的：

```javascript
class ApiError extends Error { //子类 ApiError 继承父类 Error
  code: number = 0;
}

class HttpError extends Error {
  statusCode: number = 200
}

function isApiError(error: Error){
  if(typeof (error as ApiError).code === 'number'){
    return true
  }
  return false;
}

```

- 上面的例子中，我们声明了函数 isApiError，它用来判断传入的参数是不是 ApiError 类型，为了实现这样一个函数，它的参数的类型肯定得是比较抽象的父类 Error，这样的话这个函数就能接受 Error 或它的子类作为参数了。

- 但是由于父类 Error 中没有 Code 属性，故直接获取 error.code 会报错，需要使用类型断言获取  (error as ApiError).code

- 大家可能会注意到，在这个例子中有一个更合适的方式来判断是不是 ApiError，那就是使用 `instanceof`

```javascript
class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200
}
function isApiError(error: Error){
  if(error instanceof ApiError){
    return true;
  }
  return false;
}
```

- 上面的例子中，确实使用 `instanceof` 更加合适，因为 `ApiError` 是一个 JavaScript 的类，能够通过 `instanceof` 来判断 `error` 是否是它的实例。

- 但是有的情况下 `ApiError` 和 `HttpError` 不是一个真正的类，而只是一个TypeScript 的接口（`interface`），接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 `instanceof` 来做运行时判断了：

```javascript
interface ApiError extends Error {
  code: number;
}
interface HttpError extends Error {
  statusCode: number;
}
function isApiError(error: Error) {
  if(error instanceof ApiError){
    return true
  }
  return false;
}
// index.ts:9:26 - error TS2693: 'ApiError' only refers to a type, but is being used as a value here.
```

- 此时就只能用类型断言，通过判断是否存在 `code` 属性，来判断传入的参数是不是 `ApiError` 了：
  
```javascript
interface ApiError extends Error {
  code: number;
}
interface HttpError extends Error {
  statusCode: number;
}
function isApiError(error: Error){
  if(typeof (error as ApiError).code === 'number'){
    return true;
  }
  return false;
}
```

#### 2.8.2.3 将任何一个类型断言为 any

- 理想情况下，TypeScript 的类型系统运转良好，每个值的类型都具体而精确

- 当我们引用一个在此类型上不存在的属性或方法时，就会报错：

```javascript
const foo: number = 1;
foo.length = 1
// index.ts:2:5 - error TS2339: Property 'length' does not exist on type 'number'.
```

- 上面的例子中，数字类型的变量 foo 上是没有 length 属性的，故 TypeScript 给出了相应的错误提示。

- 这种错误提示显然是非常有用的。

- 但有的时候，我们非常确定这段代码不会出错，比如下面这个例子：

```javascript
window.foo = 1;
// index.ts:1:8 - error TS2339: Property 'foo' does not exist on type 'Window & typeof globalThis'.
```

- 上面的例子中，我们需要将 `window` 上添加一个属性 `foo`，但TypeScript 编译时会报错，提示我们 `window` 上不存在 `foo` 属性

- 此时我们可以使用 `as any` 临时将 `window` 断言为 `any` 类型：

```javascript
(window as any).foo = 1
```

- 在 `any` 类型的变量上，访问任何属性都是允许的。

- 需要注意的是，将一个变量断言为 `any` 可以说是解决 TypeScript 中类型问题的最后一个手段。

- **它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 `as any`**

- 上面的例子中，我们也可以通过[扩展 window 的类型（TODO）][]解决这个错误，不过如果只是临时的增加 `foo` 属性，`as any` 会更加方便

- 总之，**一方面不能滥用 `as any`，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡**（这也是 TypeScript 的设计理念之一），才能发挥出 TypeScript 最大的价值


#### 2.8.2.4 将 any 断言为一个具体的类型

- 在日常的开发中，我们不可避免的需要处理 `any` 类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到 TypeScript 类型系统的限制而无法精确定义类型的场景

- 遇到 `any` 类型的变量时，我们可以选择无视它，任由它滋生更多的 `any`

- 我们也可以选择改进它，通过类型断言及时的把 `any` 断言为精确的类型，亡羊补牢，使我们的代码向着高可维护性的目标发展。

- 举例来说，历史遗留的代码中有个 getCacheData，它的返回值是 any：
  
```javascript
function getCacheData(key: string): any{
  return (window as any).cache[key];
}
```

- 那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：
  
```javascript
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
```

- 上面的例子中，我们调用完 `getCacheData` 之后，立即将它断言为 `Cat` 类型。这样的话明确了 `tom` 的类型，后续对 `tom` 的访问时就有了代码补全，提高了代码的可维护性。

### 2.8.3 类型断言的限制

> 本小节的前置知识点：[结构类型系统（TODO）][]、[类型兼容性（TODO）][]

- 从上面的例子中，我们可以总结出：
  
  - 联合类型可以被断言为其中一个类型
  - 父类可以被断言为子类
  - 任何类型都可以被断言为 any
  - any 可以被断言为任何类型

- 那么类型断言有没有什么限制呢？是不是任何一个类型都可以被断言为任何另一个类型呢？

- 答案是否定的——并不是任何一个类型都可以被断言为任何另一个类型。

- 具体来说，若 `A` 兼容 `B`，那么 `A` 能够被断言为 `B`，`B` 也能被断言为 `A`

- 下面我们通过一个简化的例子，来理解类型断言的限制：

```javascript
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}
let tom: Cat = {
  name: 'Tom',
  run: () => { console.log('run') }
}
let animal: Animal = tom;
```

- 我们知道，TypeScript 是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系。

- 在上面的例子中，`Cat` 包含了 `Animal` 中的所有属性，除此之外，它还有一个额外的方法 `run`。 TypeScript 并不会关心 `Cat` 和 `Animal` 之间定义时是什么关系，而只会看它们最终的结构有什么关系——所以它与 `Cat extends Animal` 是等价的：

```javascript
interface Animal {
  name: string;
}
interface Cat extends Animal {
  run(): void;
}
```

- 那么也不难理解为什么 `Cat` 类型的 `tom` 可以赋值给 `Animal` 类型的 `animal` 了——就像面向对象编程中我们可以将子类的实例赋值给类型为父类的变量

- 我们把它换成 TypeScript 中更专业的说法，即：`Animal` 兼容 `Cat`

```javascript
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}
function testAnimal(animal: Animal) {
  return (animal as Cat);
}
function testCat(cat: Cat){
  return (cat as Animal);
}
```

- 这样的设计其实也很容易就能理解：

  - 允许 `animal as Cat` 是因为 「父类可以被断言为子类」，这个前面已经学习过了
  - 允许 `Cat as Animal` 是因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性、调用父类的方法，就不会有任何问题，故「子类可以被断言为父类」

- 需要注意的是，这里我们使用了简化的父类子类的关系来表达类型的兼容性，而实际上 TypeScript 在判断类型的兼容性时，比这种情况复杂很多，  详细请参考 [类型的兼容性（TODO)][]章节。

- 总之，若 `A` 兼容 `B`，那么 `A` 能够被断言为 `B`，`B` 也能被断言为 `A`

- 同理，若 `B` 兼容 `A`，那么 `A` 能够被断言为 `B`，`B` 也能被断言为 `A`

- 所以这也可以换一种说法：
  
- 要使得 `A` 能够被断言为 `B`，只需要 `A` 兼容 `B` 或 `B` 兼容 `A` 即可，这也是为了在类型断言时的安全考虑，毕竟毫无根据的断言是非常危险的。

- 综上所述：
  
  - 联合类型可以被断言为其中一个类型
  - 父类可以被断言为子类
  - any 可以被断言为任何类型
  - 要使得 `A` 能够被断言为 `B`，只需要 `A` 兼容 `B` 或 `B` 兼容 `A` 即可

- 其实前四种情况都是最后一个的特例

### 2.8.4 双重断言

- 既然：

  - 任何类型都可以被断言为 any
  - any 可以被断言为任何类型

- 那么我们是不是可以使用双重断言 `as any as Foo` 来将任何一个类型断言为任何另一个类型呢？

```javascript
interface Cat {
  run(): void;
}
interface Fish {
  swim(): void;
}
function testCat(cat: Cat) {
  return (cat as any as Fish)
}
```

- 在上面的例子中，若直接使用 `cat as Fish` 肯定会报错，因为 `Cat` 和 `Fish` 相互都不兼容
  
- 但是若使用双重断言，则可以打破 「要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可」的限制，将任何一个类型断言为任何另一个类型

- 若你使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。

- **除非迫不得已，千万别用双重断言**。

### 2.8.5 类型断言 vs 类型转换

- 类型断言只会影响 TypeScript 编译时的类型，类型断言语句在编译结果中会被删除：

```javascript
function toBoolean(something: any): boolean{
  return something as boolean;
}
toBoolean(1);
//返回值为 1
```

- 在上面的例子中，将 `something` 断言为 `boolean` 虽然可以通过编译，但是并没有什么用，代码在编译后会变成：

```javascript
function toBoolean(something) {
  return something;
}
toBoolean(1);
// 返回值为 1 
```

- 所以类型断言不是类型转换，它不会真的影响到变量的类型。

- 若要进行类型转换，需要直接调用类型转换的方法：
  
```javascript
function toBoolean(something: any): boolean {
  return Boolean(something);
}
toBoolean(1);
// 返回值为 true 
```

### 2.8.6 类型断言 vs 类型声明

- 在这个例子中：
  
```javascript
function getCacheData(key: string): any {
  return (window as any).cache[key];
}
interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
```  

- 我们使用 `as Cat` 将 any 类型断言为了 `Cat` 类型

- 但实际上还有其它方式可以解决这个问题：

```javascript
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom: Cat = getCacheData('tom');
tom.run();
```

- 上面的例子中，我们通过类型声明的方式，将 `tom` 声明为 `Cat`，然后在将 `any` 类型的 `getCacheData('tom')` 赋值给 `Cat` 类型的 `tom`

- 这和类型断言时非常相似的，而且产生的结果也几乎是一样的——`tom` 在接下来的代码中都变成了 `Cat` 类型

- 它们的区别，可以通过这个例子来理解：

```javascript
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

const animal: Animal = {
  name: 'tom'
};

let tom = animal as Cat;
```

- 在上面的例子中，由于 `Animal` 兼容 `Cat`，故可以将 `animal` 断言为 `Cat` 赋值给 `tom`

- 但是若直接声明 `tom` 为 `Cat` 类型：
  
```javascript
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

const animal: Animal = {
  name: 'tom'
}
let tom: Cat = animal;
// index.ts:12:5 - error TS2741: Property 'run' is missing in type 'Animal' but required in type 'Cat'.
```

- 则会报错，不允许 `animal` 赋值为 `Cat` 类型的 `tom`
  
- 这很容易理解，`Animal` 可以看作是 `Cat` 的父类，当然不能将父类的实例赋值给类型为子类的变量

- 深入的讲，它们的核心区别就在于：
  
  - `animal` 断言为 `Cat` 只需要满足 `Animal` 兼容 `Cat` 或 `Cat` 兼容 `Animal` 即可
  - `animal` 赋值给 `tom`，需要满足 `Cat` 兼容 `Animal` 才行

- 但是 `Cat` 并不兼容 `Animal`
  
- 而在前一个例子中，由于 `getCacheData('tom')` 是 `any` 类型，`any` 兼容 `Cat`，`Cat` 也兼容 `any`，故

```javascript
const tom = getCacheData('tom') as Cat;
```

- 等价于

```javascript
const tom: Cat = getCacheData('tom');
```

- 知道了它们的核心区别，就知道了类型声明比类型断言更加严格的。

- 所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 `as` 语法更加优雅

### 2.8.7 类型断言 vs 泛型

- 还是这个列子:
  
```javascript
function getCacheData(key: string): any {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
```  

- 我们还有第三种方式可以解决这个问题，那就是泛型：

```javascript
function getCacheData<T>(key: string): T {
  return (window as any).cache[key];
}
interface Cat {
  name: string;
  run(): void;
}
const tom = getCacheData<Cat>('tom');
tom.run();
```

- 通过给 `getCacheData` 函数添加了一个泛型 `<T>`，我们可以更加规范的实现对 `getCacheData` 返回值的约束，这也同时去除掉了代码中的 `any`，是最优的一个解决方案


