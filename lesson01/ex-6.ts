// Cú pháp Destructuring: typescript

// 1. Array destructuring : phân rã mảng
const array = [10, 20, 30];
const [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);

const [x, , z] = [1, 2, 3];
console.log(z);

const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2,3,4]

// 2. Object destructuring: phân rã đối tuọng
const person = { name: "HA", age: 22 };
const { name, age } = person;
console.log(name); // HA
//đổi tên biến
const { name: fullName } = person;
console.log(fullName); // HA
// giá trị mặc định
const { city = "Hà Nội" } = {};
console.log(city); // Hà Nội

// 3. Destructuring trong hàm
// tham số mảng
function show([x, y]: [number, number]) {
  console.log(x, y);
}
show([10, 8]);
// tham số đối tượng
function greet({ name, age }: { name: string; age: number }) {
  console.log(`Hello ${name}, ${age} tuổi`);
}
greet({ name: "HA", age: 22 });
