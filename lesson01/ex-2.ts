// let name: string = "Hoang Anh";
// console.log("Hello", +name);
// kieu chuoi
let name: string = "HA";
let message: string = `Hello, ${name}`;
console.log("Name:" name);
console.log("message:" message);

//kieu boolean
let isStudent: boolean = true;
let hasGraduated: boolean = false;
console.log(isStudent);
console.log(hasGraduated);

// kieu null, underfine
let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);

//kieu any: kieu bat ki(han che su dung)
let ranVal: any = 10
console.log("Random value:" ranVal);
let ranVal = "HA"
console.log("Random value:" ranVal);
let ranVal = "true"
console.log("Random value:" ranVal);

// unknow: giong any nhung an toan hon
let notStore: unknown = "10"
console.log("notStore:", notStore);
let notStore = "ha"
console.log("notStore:", notStore);
if(typeof notStore === "string"){
    console.log("notStore;", notStore.toUpperCase());
}

// kieu mang // array
let score: number[] = [10,15,20]
let names: string[] = ["An", "Binh", "Phu"]
console.log("score:", score);
console.log("names:", names);
let flags: Array<boolean> = [true, false, true, true]
console.log("flags:", flags);

// tuple: Bộ
let student:[string,number] =["HA", 22]
console.log("student:", student);

// Object
let person: { name: string; age: number; email:string } = {
  name: "HA",
  age: 22,
  email: "levuhoanganh081@gmail.com"
};
console.log("person:", person);
console.log("name:", person.name);

// funtion
function great(name: string, age: number){
    return "Welcom to," +name + ", age:" +age
}
console.log(great("HA", 22));
function func_great(name: string, age: number){
    return `Welcom to, ${name}  , age: ${age}`
}
console.log(func_great("HA", 22));

