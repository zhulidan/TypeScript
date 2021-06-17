//1. 函数声明
function sum(x, y) {
    return x + y;
}
//函数表达式
var myFunction = function (x, y) {
    return x + y;
};
//一个函数有输入和输出，要在TypeScript中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单
function sum2(x, y) {
    return x + y;
}
// 注意，输入多余的（或者少于要求的）参数，是不被允许的：
function sum3(x, y) {
    return x + y;
}
// sum3(1, 2, 3);
sum3(1);
