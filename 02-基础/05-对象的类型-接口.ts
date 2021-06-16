interface Person{
    name: string;
    age: number;
}

let tom: Person = {
    name: "Tom",
    age: 25
};

//1.定义的变量比接口少了一些属性是不允许的

// interface Person2{
//     name: string;
//     age: number;
// }

// let tom2: Person2 = {
//     name: 'Tom2'
// };

//2.多一些属性也是不允许的：

// interface Person3 {
//     name: string;
//     age: number;
// }

// let tom3: Person3 = {
//     name: 'Tom3',
//     age: 27,
//     gender: 'male'
// }

//3. 可选属性

interface Person4 {
    name: string;
    age?: number; //该属性可以不存在
}

let tom4: Person4 = {
    name: 'Tom4'
}

// 4. 可选属性，仍然不允许添加未定义的属性
// interface Person5 {
//     name: string;
//     age?: number;
// }

// let tom5: Person5 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

//5. 任意属性  一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

// interface Person6 {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }

// let tom6: Person6 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

// 6. 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
interface Person7 {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom7: Person7 = {
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