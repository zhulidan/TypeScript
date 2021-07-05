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