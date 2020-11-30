// Number
console.log( 0.1 + 0.2 == 0.3);
// 比较浮点数据精度
console.log( 0.1 + 0.2 - 0.3 <= Number.EPSILON)

// Symbol
var mySymbol = Symbol("my symbol")
console.log(mySymbol)
// 可以使用 Symbol.iterator 来自定义 for…of 在对象上的行为
var o = new Object
o[Symbol.iterator] = function(){
    var v = 0
    return {
        next: function () {  
            return { value: v++, done: v > 10 }
        }
    }
};
for(var v of o)
    console.log(v)

// Object
console.log("abc".charAt(0))

// 甚至我们在原型上添加方法，都可以应用于基本类型，比如以下代码，在 Symbol 原型上添加了 hello 方法，在任何 Symbol 类型变量都可以调用
Symbol.prototype.hello = () => console.log("hello")
var a = Symbol("a")
console.log(typeof a)
a.hello()

// 装箱转换
// var symbolObject = (function(){ return this; }).call(Symbol("a")); 
// console.log(typeof symbolObject); //object 
// console.log(symbolObject instanceof Symbol); //true 
// console.log(symbolObject.constructor == Symbol); //true

// var symblObject = Object(Symbol("a"))
// console.log(typeof symblObject)
// console.log(symblObject instanceof Symbol)
// console.log(symblObject.constructor == Symbol)

var symbolObject = Object(Symbol("a")); 
console.log(Object.prototype.toString.call(symbolObject)); //[object Symbol]

// 拆箱转换
var o = {
    valueOf: () => { console.log("valueof"); return {} },
    toString: () => { console.log("toString"); return {} }
}

// o * 2
// String(o)

o[Symbol.toPrimitive] = () => { console.log("toPrimitive"); return "hello" }
console.log(o + "")

console.log(0.1 + 0.2 == 0.3)