var tom = {
    name: "Tom",
    age: 25
};
var tom4 = {
    name: 'Tom4'
};
var tom7 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
//只读属性： 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// interface Person8 {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
//   }
//   let tom8: Person8 = {
//     name: 'Tom',
//     gender: 'male'
//   }
//   tom8.id = 9527;
