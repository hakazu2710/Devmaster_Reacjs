// cú pháp cơ bản của spread
// const newArray = [...oldArray];
// const newObject = { ...oldObject };
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// cú pháp spread trong typescript
// 1. Dùng với mảng - Array
// sao chép mảng
var nums = [1, 2, 3];
var copyNums = __spreadArray([], nums, true); // [1,2,3]
console.log(copyNums);
// nối mảng
var a = [1, 2];
var b = [3, 4];
var combined = __spreadArray(__spreadArray([], a, true), b, true); // [1,2,3,4]
console.log(combined);
// truyền phần tử làm đối số hàm
function sum(x, y, z) {
    return x + y + z;
}
var values = [1, 2, 3];
console.log(sum.apply(void 0, values)); // 6
// 2. dùng với đối tượng object
//sao chép đối tương
var person = { name: "HA", age: 22 };
var clone = __assign({}, person);
console.log(clone);
// Ghi đề thuộc tính
var original = { name: "HA", age: 22 };
var update = __assign(__assign({}, original), { age: 23 });
console.log(update);
// Gộp đối tượng
var c = { z: 1 };
var d = { y: 2 };
var merged = __assign(__assign({}, a), b); // {z:1, y:2}
console.log(merged);
