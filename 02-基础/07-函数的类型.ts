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