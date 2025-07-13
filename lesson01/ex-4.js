// Hàm và kiểu trả về, tham số
//1. Hàm có khai báo tham số và kiểu trả về
function great(name, age) {
    return "Hello ".concat(name, "!, age: ").concat(age);
}
var message = great("HA", 22);
console.log(message);
//2. Hàm kiểu void(Hàm không định kiểu, hàm không tra về giá trị)
function logMessage(message) {
    console.log("log:", message);
}
var mess = logMessage("HA");
console.log(mess);
//3. Hàm kiểu never
function throwError(msg) {
    throw new Error(msg);
}
// console.log(throwError("HA"));
//4. Hàm nặc danh / arrow function
var sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 15));
//5. Hàm có tham số tùy chọn và mặc định
function greet(name, title) {
    return "Hello  ".concat(title !== null && title !== void 0 ? title : "", " ").concat(name);
}
console.log(greet("HA", 22));
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log(multiply(6));
//6.  Hàm sử dụng Rest parameters
function total() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(total.apply(void 0, [10, 15, 20]));
// 7. Khai báo kiểu cho hàm : function type
var divide;
divide = function (a, b) {
    return a / b;
};
console.log(divide(10, 5));
var subtract = function (x, y) { return x - y; };
console.log(subtract(10, 5));
//9. Hàm generic: Kiểu dữ liệu động
function identity(arg) {
    return arg;
}
var output1 = identity("Hello HA");
var output2 = identity(22);
console.log(output1, output2);
