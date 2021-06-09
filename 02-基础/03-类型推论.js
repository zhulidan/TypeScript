// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7
//等价于
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7
//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
