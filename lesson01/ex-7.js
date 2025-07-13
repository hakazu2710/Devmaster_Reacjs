// Lớp và OOP trong typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. khai báo class cơ bản
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, T\u00F4i l\u00E0 ".concat(this.name));
    };
    return Person;
}());
var p1 = new Person("HA", 22);
p1.greet(); // Hello, Tôi là HA
// 2. Access Modifilers - pblic, private, protected
var Student = /** @class */ (function () {
    function Student(name, score, id) {
        this.name = name;
        this.score = score;
        this.id = id;
    }
    Student.prototype.showScore = function () {
        console.log("\u0110i\u1EC3m: ".concat(this.score));
    };
    return Student;
}());
var p2 = new Student("HA", 22, 1);
p2.showScore();
// 3. Kế thừa (extends)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " ph\u00E1t ra \u00E2m thanh"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " g\u00E2u g\u00E2u"));
    };
    return Dog;
}(Animal));
var dog = new Dog("kiki");
dog.speak(); // kiki phát ra âm thanh
dog.bark(); // kiki gâu gâu
// 4. Getter / Setter
var Circle = /** @class */ (function () {
    function Circle(radius) {
        // lôi .radius thôi
        this._radius;
        // dùng setter để kiểm tra giá trị hợp lệ
        // Hàm constructor nhận vào một tham số radius.
        // Gán giá trị thông qua setter radius, đảm bảo giá trị ban đầu được kiểm tra là hợp lệ.
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            // Dùng để truy cập giá trị của _radius.
            return this._radius;
        },
        set: function (value) {
            //Dùng để thiết lập giá trị cho _radius, đồng thời đảm bảo tính hợp lệ (giá trị phải lớn hơn 0).
            if (value > 0)
                this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            //Phương thức area là một getter, tự động tính toán và trả về diện tích hình tròn.
            return Math.PI * Math.pow(this._radius, 2);
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
var circle = new Circle(5);
console.log(circle.radius); // 5
console.log(circle.area); // pi * 5*5
//5. Từ khóa (static)
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.double = function (x) {
        return x * 2;
    };
    MathUtil.PI = 3.14;
    return MathUtil;
}());
console.log(MathUtil.PI); // 3.14
console.log(MathUtil.double(5)); // 10
// 6. Lớp trừu tượng: Abstract class
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        console.log("Đây là một hình họa:");
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var rect = new Rectangle(10, 5);
rect.describe(); // In ra: Đây là một hình họa:
console.log(rect.getArea()); // In ra: 50
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.move = function () {
        console.log("".concat(this.name, " \u0111ang di chuy\u1EC3n"));
    };
    return Car;
}());
var car = new Car("BMW");
car.move();
// Bài Tập
// Bài 1:
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getInfo = function () {
        console.log("Hello, t\u00F4i l\u00E0 ".concat(this.name));
    };
    return Product;
}());
// Bài 2:
var Peson = /** @class */ (function () {
    function Peson(name) {
        this.name = name;
    }
    return Peson;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.bark = function () {
        console.log("T\u00EAn t\u00F4i l\u00E0 ".concat(this.name, " "));
    };
    return Employee;
}(Person));
var me = new Employee("HA");
me.bark();
// Bài 3: Tạo abstract class Shape và các lớp con Circle, Rectangle
var shape = /** @class */ (function () {
    function shape() {
    }
    return shape;
}());
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.moves = function () {
        console.log("".concat(this.name, " \u0111\u00E3 \u0111\u01B0\u1EE3c ").concat(this.age, " tu\u1ED5i"));
    };
    return Cat;
}());
var cat = new Cat("Lili", 2);
cat.moves();
