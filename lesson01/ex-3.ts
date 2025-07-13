// Các kiểu dữu liệu nâng cao
// Union type: kết hợp nhiều kiểu
let value: string | number;
value = "HA";
console.log("value-string:" value);
value = 22;
console.log("value-number:" value);

//Type Alias: Định dạng kiểu
type User10 = string | number;
let id1: User10 = "HA";
let id2: User10 = 22;
console.log("id:", id1);;
console.log("id:", id2);

//Interface: Giao diện đối tượng
interface Person {
    name: string;
    age: number;
    email?: string; // thuộc tính tùy chọn
}

const user: Person = {
    name: "HA",
    age: 22,
    email: "levuhoanganh081@gmail.com"
};
console.log("User:", user);
console.log("User:", user.name, "Age:", user.age, "email:", user.email);


