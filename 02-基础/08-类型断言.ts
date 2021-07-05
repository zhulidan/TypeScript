//1. 类型断言的用途
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function getName(animal: Cat | Fish){
    return animal.name
}

interface Cat1 {
    name: string;
    run(): void;
}
interface Fish1{
    name: string;
    swim(): void;
}

//1.1 下面的例子，获取 animal.swim 的时候会报错
// function isFish(animal: Cat1 | Fish1){
//     if(typeof animal.swim === 'function'){
//         return true
//     }
//     return false;
// }

//1.2 使用断言 将 animal 断言成 Fish
function isFish(animal: Cat1 | Fish1){
    if(typeof (animal as Fish).swim === 'function'){
        return true
    }
    return false
}

//1.3 类型断言只能够欺骗TypeScript 编辑器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时的错误
interface Cat2 {
    name: string;
    run(): void;
}
interface Fish2 {
    name: string;
    swim(): void;
}
function swim2(animal2: Cat2 | Fish2){
    (animal2 as Fish2).swim();
}

const tom2: Cat2 = {
    name: 'Tom',
    run(){
        console.log('run')
    }
}
swim2(tom2)

//2. 将一个父类断言为更加具体的子类
class ApiError extends Error{
    code: number = 0
}
class HttpError extends Error {
    statusCode: number = 200
}
function isApiError(error: Error){
    if(typeof (error as ApiError).code === 'number'){
        return true;
    }
    return false;
}

//2.1 有更合适的方式来判断是不是 ApiError ，那就是使用 instanceof

class ApiError1 extends Error {
    code: number = 0;
}
class HttpError1 extends Error {
    statusCode: number = 200
}
function isApiError1(error: Error){
    if(error instanceof ApiError){
        return true
    }
    return false
}

//2.2 当ApiErrorh和 HttpError 不是一个真正的类，而只是一个TypeScript的接口，接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了
// interface ApiError2 extends Error{
//     code: number
// }
// interface HttpError2 extends Error{
//     statusCode: number
// }
// function isApiError2(error: Error){
//     if(error instanceof ApiError2){
//         return true
//     }
//     return false
// }

//2.3 如果为接口，就只能用类型断言

interface ApiError3 extends Error {
    code: number;
}
interface HttpError3 extends Error{
    statusCode: number;
}
function isApiError3(error: Error){
    if(typeof (error as ApiError3).code === 'number'){
        return true
    }
    return false
}

//2.3 当引用一个在此类型上不存在的属性或方法时，就会报错
// const foo1: number = 1;
// foo1.length = 1;

// 有时候非常确定这段代码不会出错
// window.foo1 = 1

//  可以使用 as any 临时将window 断言为any类型
(window as any).foo1 = 1

//2.4 将any断言为一个具体的类型
// 返回值为any
function getCacheData(key: string): any {
    return (window as any).cache[key]
}
//在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：
function getCacheData1(key: string): any {
    return (window as any).cache[key];
}
interface Cat4 {
    name: string;
    run(): void
}
const tom = getCacheData1('tom') as Cat;
tom.run()