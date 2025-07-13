// Lớp và OOP trong typescript

// 1. khai báo class cơ bản
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, Tôi là ${this.name}`);
  }
}
const p1 = new Person("HA", 22);
p1.greet(); // Hello, Tôi là HA

// 2. Access Modifilers - pblic, private, protected
class Student {
  public name: string;
  private score: number;
  protected id: number;

  constructor(name: string, score: number, id: number) {
    this.name = name;
    this.score = score;
    this.id = id;
  }

  showScore(): void {
    console.log(`Điểm: ${this.score}`);
  }
}
const p2 = new Student("HA", 22, 001);
p2.showScore();

// 3. Kế thừa (extends)
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} phát ra âm thanh`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} gâu gâu`);
  }
}

const dog = new Dog("kiki");
dog.speak(); // kiki phát ra âm thanh
dog.bark(); // kiki gâu gâu

// 4. Getter / Setter
class Circle {
  private _radius: number;

  constructor(radius: number) {
    // lôi .radius thôi
    this._radius;
    // dùng setter để kiểm tra giá trị hợp lệ
    // Hàm constructor nhận vào một tham số radius.
    // Gán giá trị thông qua setter radius, đảm bảo giá trị ban đầu được kiểm tra là hợp lệ.
  }
  get radius(): number {
    // Dùng để truy cập giá trị của _radius.
    return this._radius;
  }
  set radius(value: number) {
    //Dùng để thiết lập giá trị cho _radius, đồng thời đảm bảo tính hợp lệ (giá trị phải lớn hơn 0).
    if (value > 0) this._radius = value;
  }
  get area(): number {
    //Phương thức area là một getter, tự động tính toán và trả về diện tích hình tròn.
    return Math.PI * this._radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // 5
console.log(circle.area); // pi * 5*5

//5. Từ khóa (static)
class MathUtil {
  static PI: number = 3.14;

  static double(x: number): number {
    return x * 2;
  }
}
console.log(MathUtil.PI); // 3.14
console.log(MathUtil.double(5)); // 10

// 6. Lớp trừu tượng: Abstract class
abstract class Shape {
  abstract getArea(): number;
  describe(): void {
    console.log("Đây là một hình họa:");
  }
  //Phương thức describe() là một phương thức thông thường (không trừu tượng), cung cấp sẵn nội dung mặc định, tất cả lớp con sẽ kế thừa mà không cần thiết phải định nghĩa lại.
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}
let rect = new Rectangle(10, 5);
rect.describe(); // In ra: Đây là một hình họa:
console.log(rect.getArea()); // In ra: 50

// 7. Interface trong OOP
interface Vehicle {
  name: string;
  move(): void;
}
class Car implements Vehicle {
  constructor(public name: string) {}
  move(): void {
    console.log(`${this.name} đang di chuyển`);
  }
}
let car = new Car("BMW");
car.move();

// Bài Tập
// Bài 1:
class Product {
  id: number;
  name: string;
  price: number;

  getInfo(): void {
    console.log(`Hello, tôi là ${this.name}`);
  }
}
// Bài 2:
class Peson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  bark() {
    console.log(`Tên tôi là ${this.name} `);
  }
}
const me = new Employee("HA");
me.bark();

// Bài 3: Tạo abstract class Shape và các lớp con Circle, Rectangle
abstract class shape {
  abstract Circle(): number;
  abstract Rectangle(): string;
}

// Bài 4: Tạo interface Animal và lớp Cat implements từ đó
interface Animal {
  name: string;
  age: number;
  moves(): void;
}
class Cat implements Animal {
  constructor(public name: string, private age: number) {}
  moves(): void {
    console.log(`${this.name} đã được ${this.age} tuổi`);
  }
}
let cat = new Cat("Lili", 2);
cat.moves();
