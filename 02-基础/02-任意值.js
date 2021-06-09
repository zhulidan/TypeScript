// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7
//1. any类型，允许赋值任何类型
var myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
//2. 任意值上访问任何属性都是可以的
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.firstName);
//3. 任意值允许调用任何方法
var anyThing1 = 'Tom';
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.myName.setFirstName('Cat');
//4. 声明时，未指定类型，默认为任意值类型
var something;
something = 'seven';
something = 7;
something.setName('Tom');
