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

//下面的例子，获取 animal.swim 的时候会报错
// function isFish(animal: Cat1 | Fish1){
//     if(typeof animal.swim === 'function'){
//         return true
//     }
//     return false;
// }

//使用断言 将 animal 断言成 Fish
function isFish(animal: Cat1 | Fish1){
    if(typeof (animal as Fish).swim === 'function'){
        return true
    }
    return false
}

//