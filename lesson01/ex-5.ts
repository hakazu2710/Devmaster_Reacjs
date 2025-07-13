// cú pháp cơ bản của spread
// const newArray = [...oldArray];
// const newObject = { ...oldObject };

// cú pháp spread trong typescript
// 1. Dùng với mảng - Array
// sao chép mảng
const nums = [1, 2, 3];
const copyNums = [...nums]; // [1,2,3]
console.log(copyNums);
// nối mảng
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1,2,3,4]
console.log(combined);
// truyền phần tử làm đối số hàm
function sum(x: number, y: number, z: number) {
  return x + y + z;
}
const values = [1, 2, 3];
console.log(sum(...values)); // 6

// 2. dùng với đối tượng object
//sao chép đối tương
const person = { name: "HA", age: 22 };
const clone = { ...person };
console.log(clone);
// Ghi đề thuộc tính
const original = { name: "HA", age: 22 };
const update = { ...original, age: 23 };
console.log(update);
// Gộp đối tượng
const c = { z: 1 };
const d = { y: 2 };
const merged = { ...a, ...b }; // {z:1, y:2}
console.log(merged); // {'0':3, '1': 4}
