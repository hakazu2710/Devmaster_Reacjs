// let name: string = "Hoang Anh";
// console.log("Hello", +name);
// kieu chuoi
var name = "HA";
var message = "Hello, ".concat(name);
console.log("Name:", name);
console.log("message:", message);
//kieu boolean
var isStudent = true;
var hasGraduated = false;
console.log(isStudent);
console.log(hasGraduated);
// kieu null, underfine
var u = undefined;
var n = null;
console.log(u);
console.log(n);
//kieu any: kieu bat ki(han che su dung)
var ranVal = 10;
console.log("Random value:", ranVal);
var ranVal = "HA";
console.log("Random value:", ranVal);
var ranVal = "true";
console.log("Random value:", ranVal);
// unknow: giong any nhung an toan hon
var notStore = "10";
console.log("notStore:", notStore);
var notStore = "ha";
console.log("notStore:", notStore);
if (typeof notStore === "string") {
    console.log("notStore;", notStore.toUpperCase());
}
// kieu mang // array
var score = [10, 15, 20];
var names = ["An", "Binh", "Phu"];
console.log("score:", score);
console.log("names:", names);
var flags = [true, false, true, true];
console.log("flags:", flags);
// tuple: Bộ
var student = ["HA", 22];
console.log("student:", student);
// Object
var person = {
    name: "HA",
    age: 22,
    email: "levuhoanganh081@gmail.com"
};
console.log("person:", person);
console.log("name:", person.name);
// funtion
function great(name, age) {
    return "Welcom to," + name + ", age:" + age;
}
console.log(great("HA", 22));
function func_great(name, age) {
    return "Welcom to, ".concat(name, "  , age: ").concat(age);
}
console.log(func_great("HA", 22));
