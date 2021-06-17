//1. [类型+方括号]表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];

//1.1. 数组的项中不允许出现其它的类型
// let fibonacci1: number[] = [1, '1', 2, 3,5]

//1.2. 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// let fibonacci2: number[] = [1, 1, 2, 3, 5];
// fibonacci2.push("8");


// 2. 数组泛型
let fibonacci3: Array<number> = [1, 1, 2, 3, 5];

// 3. 用接口表示数组 - 只要索引得类型是数字时，那么值的类型必须是数字
interface NumberArray {
    [index: number]: number;
}

// 4.类数组
 
// 4.1 类数组不能用普通数组的方式来描述，应该用接口
// function sum(){
//     let args:number[] = arguments
// }


function sum(){
    let args: {
        [index: number]: number;
        length: number;
        callee: Function
    } = arguments
}

// 4.2 常用类数组都有自己的接口定义

function sum2(){
    let args: IArguments = arguments
}

// 4.3 其中IArguments是TypeScript中定义好了的类型，它实际上就是：
// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }

//5. any在数组中的应用
// any表书数组中允许出现任意类型
let list: any[] = ['xcatliu', 25, {website: 'http://xcatliu.com'}]