var cat = {
    say() {
        console.log("meow~");
    },
    jump() {
        console.log("jump")
    }
}
var tiger = Object.create(cat, {
    say: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function() {
            console.log("roar!");
        }
    }
})

var anotherCat = Object.create(cat);
anotherCat.say();
var anotherTiger = Object.create(tiger);
anotherTiger.say();

// 早期版本中的类与原型
var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function() { return arguments }();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
console.log([o, n, s, b, d, arg, r, f, arr, e].map(v =>Object.prototype.toString.call(v)));

/*
在 ES5 开始，[[class]] 私有属性被 Symbol.toStringTag 代替，Object.prototype.toString 的意义从命名上不再跟 class 相关。我们甚至可以自定义 Object.prototype.toString 的行为，以下代码展示了使用 Symbol.toStringTag 来自定义 Object.prototype.toString 的行为
*/ 
var o1 = { [Symbol.toStringTag] : "MyObject"}
console.log(o1 + "")

/**
 * new 运算接受一个构造器和一组调用参数，实际上做了几件事
 * 以构造器的 prototype 属性（注意与私有字段[[prototype]]的区分）为原型，创建新对象
 * 将 this 和调用参数传给构造器，执行
 * 如果构造器返回的是对象，则返回，否则返回第一步创建的对象
 */
function c1() {
    this.p1 = 1;
    this.p2 = function() {
        console.log(this.p1);
    }
}

var o2 = new c1;
o2.p2();

function c2() {

}
c2.prototype.p1 = 1;
c2.prototype.p2 = function() {
    console.log(this.p1);
}

var o3 = new c2
o3.p2();

// ES6 中的类
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // getter
    get area() {
        this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + 'makes a noise.');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak () {
        console.log(this.name + " barks.");
    }
}

let dog = new Dog("Mitzie");
dog.speak();