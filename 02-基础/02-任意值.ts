// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7


//1. any类型，允许赋值任何类型
let myFavoriteNumber1: any = 'seven';
myFavoriteNumber1 = 7

//2. 任意值上访问任何属性都是可以的
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.firstName)

//3. 任意值允许调用任何方法
let anyThing1: any = 'Tom';
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.myName.setFirstName('Cat');

//4. 声明时，未指定类型，默认为任意值类型
let something;
something = 'seven';
something = 7;

something.setName('Tom');