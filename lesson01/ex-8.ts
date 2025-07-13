// 2 Import nhập dữ liệu
// Import theo tên
import { PI, add } from "./math";

console.log(PI); // 3.14
console.log(add(2, 3)); // 5

// Import mặc định
import greet from "./greet";
console.log(greet("HA")); // Hello HA

// Đổi tên khi import
import { add as addition } from "./math";
console.log(addition(4, 5));
