function getName(animal) {
    return animal.name;
}
//下面的例子，获取 animal.swim 的时候会报错
// function isFish(animal: Cat1 | Fish1){
//     if(typeof animal.swim === 'function'){
//         return true
//     }
//     return false;
// }
//使用断言
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
