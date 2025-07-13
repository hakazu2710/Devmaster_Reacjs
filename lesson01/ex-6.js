// Cú pháp Destructuring: typescript
// 1. Array destructuring : phân rã mảng
var array = [10, 20, 30];
var a = array[0], b = array[1], c = array[2];
console.log(a);
console.log(b);
console.log(c);
var _a = [1, 2, 3], x = _a[0], z = _a[2];
console.log(z);
var _b = [1, 2, 3, 4], first = _b[0], rest = _b.slice(1);
console.log(rest); // [2,3,4]
// 2. Object destructuring: phân rã đối tuọng
var person = { name: "HA", age: 22 };
var name = person.name, age = person.age;
console.log(name); // HA
//đổi tên biến
var fullName = person.name;
console.log(fullName); // HA
// giá trị mặc định
var _c = {}.city, city = _c === void 0 ? "Hà Nội" : _c;
console.log(city); // Hà Nội
// 3. Destructuring trong hàm
// tham số mảng
function show(_a) {
    var x = _a[0], y = _a[1];
    console.log(x, y);
}
show([10, 8]);
// tham số đối tượng
function greet(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello ".concat(name, ", ").concat(age, " tu\u1ED5i"));
}
greet({ name: "HA", age: 22 });
