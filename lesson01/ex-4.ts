// Hàm và kiểu trả về, tham số

//1. Hàm có khai báo tham số và kiểu trả về
function great(name: string, age: number): string | number {
  return `Hello ${name}!, age: ${age}`;
}
const message = great("HA", 22);
console.log(message);

//2. Hàm kiểu void(Hàm không định kiểu, hàm không tra về giá trị)
function logMessage(message: string): void {
  console.log("log:", message);
}
const mess = logMessage("HA");
console.log(mess);

//3. Hàm kiểu never
function throwError(msg: string): never {
  throw new Error(msg);
}
// console.log(throwError("HA"));

//4. Hàm nặc danh / arrow function
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(10, 15));

//5. Hàm có tham số tùy chọn và mặc định
function greet(name: string, title?: string): string {
  return `Hello  ${title ?? ""} ${name}`;
}
console.log(greet("HA", 22));

function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(6));

//6.  Hàm sử dụng Rest parameters
function total(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(total(...[10, 15, 20]));

// 7. Khai báo kiểu cho hàm : function type
let divide: (x: number, y: number) => number;
divide = function (a, b) {
  return a / b;
};
console.log(divide(10, 5));

//8.hàm sử dụng Type alias hoặc interface
type MathFunc = (a: number, b: number) => number;
const subtract: MathFunc = (x, y) => x - y;
console.log(subtract(10, 5));

//9. Hàm generic: Kiểu dữ liệu động
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("Hello HA");
let output2 = identity<number>(22);
console.log(output1, output2);
