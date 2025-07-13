"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2 Import nhập dữ liệu
// Import theo tên
var math_1 = require("./math");
console.log(math_1.PI); // 3.14
console.log((0, math_1.add)(2, 3)); // 5
// Import mặc định
var greet_1 = require("./greet");
console.log((0, greet_1.default)("HA")); // Hello HA
// Đổi tên khi import
var math_2 = require("./math");
console.log((0, math_2.add)(4, 5));
