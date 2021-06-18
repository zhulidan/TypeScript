//1. 函数声明
function sum(x, y) {
    return x + y;
}
//函数表达式
let myFunction = function (x, y) {
    return x + y;
}

//一个函数有输入和输出，要在TypeScript中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单
function sum2(x: number, y: number): number{
    return x + y;
}

// 注意，输入多余的（或者少于要求的）参数，是不被允许的：
function sum3(x: number, y: number): number{
    return x + y;
}
// sum3(1, 2, 3);
// sum3(1);

//2. 函数表达式
//下面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的mysum，是通过赋值操作进行类型推论而推断出来的。
let mySum = function(x: number, y: number){
    return x + y
}

//需要手动给mySum添加类型，则应该是这样：
//在typescript的类型定义中，=>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
let mySum2:(x: number, y: number) => number = function(x:number,y:number):number{
    return x + y;
}

// 3.接口定义函数的形状
interface SearchFunc{
    (source: string, subString: string):boolean;
}
let mySearch:SearchFunc;
mySearch = function(source:string, subString: string){
    return source.search(subString) !== -1
}

//4.可选参数
function buildName(firstName: string, lastName?: string){
    if(lastName){
        return firstName + ' ' + lastName
    }else{
        return firstName
    }
}
let tomcat = buildName('Tom','Cat');
let tom = buildName('Tom');

//可选参数后面不允许再出现必需参数了
// function buildName1(firstName?: string, lastName: string){
//     if(firstName){
//         return firstName + ' ' + lastName;
//     }else{
//         return lastName
//     }
// }
// let tomcat1 = buildName1('Tom','Cat');
// let tom1 = buildName1(undefined,'Tom');

//5. 参数默认值
function buildName2(firstName: string, lastName: string = 'Cat'){
    return firstName + ' ' + lastName
}
let tomcat2 = buildName2('Tom','Cat');
let tom2 = buildName2('Tom')

//不受可选参数必须接在必需参数后面的限制了
function buildName3(firstName: string = 'Tom',lastName:string){
    return firstName + ' ' + lastName
}
let tomcat3 = buildName3('Tom','Cat');
let cat3 = buildName3(undefined, 'Cat');

// 6. 剩余参数
//es6中，可以使用 ...rest 的方式获取函数中的剩余参数

function push(array, ...items){
    items.forEach(function(item){
        array.push(item)
    })
}

let a: any[] = [];
push(a, 1, 2, 3);

//事实上，items是一个数组。所以我们可以用数组的类型来定义它：
function push1(array: any[], ...items:any[]){
    items.forEach(function(item){
        array.push(item)
    })
}
let a1 = [];
push(a1, 1, 2, 3);

// 7.重载
//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
//利用联合类型
function reverse1(x: number | string):number | string|void{
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''));
    }else if(typeof x === 'string'){
        return x.split('').reverse().join('')
    }
}

//使用重载定义

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
