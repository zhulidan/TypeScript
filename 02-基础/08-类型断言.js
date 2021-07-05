var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getName(animal) {
    return animal.name;
}
//1.1 下面的例子，获取 animal.swim 的时候会报错
// function isFish(animal: Cat1 | Fish1){
//     if(typeof animal.swim === 'function'){
//         return true
//     }
//     return false;
// }
//1.2 使用断言 将 animal 断言成 Fish
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
function swim2(animal2) {
    animal2.swim();
}
var tom2 = {
    name: 'Tom',
    run: function () {
        console.log('run');
    }
};
swim2(tom2);
//2. 将一个父类断言为更加具体的子类
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
//2.1 有更合适的方式来判断是不是 ApiError ，那就是使用 instanceof
var ApiError1 = /** @class */ (function (_super) {
    __extends(ApiError1, _super);
    function ApiError1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError1;
}(Error));
var HttpError1 = /** @class */ (function (_super) {
    __extends(HttpError1, _super);
    function HttpError1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError1;
}(Error));
function isApiError1(error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
function isApiError3(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
//2.3 当引用一个在此类型上不存在的属性或方法时，就会报错
// const foo1: number = 1;
// foo1.length = 1;
// 有时候非常确定这段代码不会出错
// window.foo1 = 1
//  可以使用 as any 临时将window 断言为any类型
window.foo1 = 1;
//2.4 将any断言为一个具体的类型
// 返回值为any
function getCacheData(key) {
    return window.cache[key];
}
//在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：
function getCacheData1(key) {
    return window.cache[key];
}
