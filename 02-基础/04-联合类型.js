var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//1. myFavoriteNumber1 只能为 string 或者 number，但是不能是其它类型
// let myFavoriteNumber1: string | number;
// myFavoriteNumber1 = true
//2. length不是 string和number共有的属性
// function getLength(something: string | number): number{
//     return something.length;
// }
//3. 访问 string 和 number 的共有属性是可以的
function getLength1(something) {
    return something.toString();
}
var myFavoriteNumber2;
myFavoriteNumber2 = 'seven'; //推论为string
console.log(myFavoriteNumber2.length);
// myFavoriteNumber2 = 7; //推论为number，number没有length，报错
// console.log(myFavoriteNumber2.length);
