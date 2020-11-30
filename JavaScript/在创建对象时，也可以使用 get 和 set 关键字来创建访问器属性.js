// JavaScript 对象的特征
/*
对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。
对象有状态：对象具有状态，同一对象可能处于不同状态之下。
对象具有行为：即对象的状态，可能因为它的行为产生变迁。
*/

var o1 = { a: 1 };
var o2 = { a: 1};

console.log(o1 == o2)

/*
其中 o 是对象，d 是一个属性，而函数 f 也是一个属性，尽管写法不太相同，但是对 JavaScript 来说，d 和 f 就是两个普通属性
*/
var o = {
    d: 1,
    f() {
        console.log(this.d)
    }
}

/**
 * JavaScript 中对象独有的特色是：对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力
 */
var o3 = { a: 1}
o3.b = 2
console.log(o3.a, o3.b)

/**
 * 对 JavaScript 来说，属性并非只是简单的名称和值，JavaScript 用一组特征（attribute）来描述属性（property）
 * 先来说第一类属性，数据属性。它比较接近于其它语言的属性概念。数据属性具有四个特征。
 * value：就是属性的值。
 * writable：决定属性能否被赋值。
 * enumerable：决定 for in 能否枚举该属性。
 * configurable：决定该属性能否被删除或者改变特征值
 */

 Object.getOwnPropertyDescriptor(o, "a")
 Object.getOwnPropertyDescriptor(o, "b")


 var o4 = { a: 1 };
 Object.defineProperty(o4, "b", {value: 2, writable: false, enumerable: false, configurable: true});
 //a和b都是数据属性，但特征值变化了
 Object.getOwnPropertyDescriptor(o4,"a"); // {value: 1, writable: true, enumerable: true, configurable: true}
 Object.getOwnPropertyDescriptor(o4,"b"); // {value: 2, writable: false, enumerable: false, configurable: true}
 o4.b = 3;
 console.log(o4.b); // 2

 /**
  * 在创建对象时，也可以使用 get 和 set 关键字来创建访问器属性
  */
 var o5 = {
     get a() {
         return 1
     }
 }

 console.log(o5.a)