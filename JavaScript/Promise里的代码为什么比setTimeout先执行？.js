/// Promise的基本用法
// function sleep(duration) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(resolve, duration)
//     })
// }

// sleep(1000).then( () => console.log("finished") )

// var r = new Promise(function(resolve, reject){
//     console.log("a")
//     resolve()
// })

// r.then( () => console.log("c"))
// console.log("b")

// setTimeout 混用的 Promise
// 不论代码顺序如何，d 必定发生在 c 之后，因为 Promise 产生的是 JavaScript 引擎内部的微任务，而 setTimeout 是浏览器 API，它产生宏任务
// var r = new Promise(function(resolve, reject){
//     console.log("a")
//     resolve()
// });
// setTimeout(() => {
//     console.log("d");
// }, 0);
// r.then( () => console.log("c"))
// console.log("b")

// function sleep(duration) { 
//     return new Promise(
//         function (relolve, reject) { 
//             console.log("b")
//             setTimeout(() => {
//                 relolve()
//             }, duration);
//          }
//     )
//  }

//  console.log("a")
//  sleep(5000).then( () => console.log("c"))

 /// 新特性：async/await
//  function sleep(duration) { 
//      return new Promise(
//          function (resolve, reject) { 
//              setTimeout(() => {
//                  resolve()
//              }, duration);
//           }
//      )
//   }

//   async function foo() { 
//       console.log("a")
//       await sleep(2000)
//       console.log("b")
//    }

//    foo()

// 我们在定义了一批原子操作的情况下，可以利用 async 函数组合出新的 async 函数
// function sleep(duration) { 
//     return new Promise(
//         function (resolve, reject) { 
//             setTimeout(resolve, duration)
//          }
//     )
//  }

// async function foo(name) { 
//     await sleep(2000)
//     console.log(name)
//  }

//  async function foo2() { 
//      await foo("a")
//      await foo("b")
//   }

//   foo2()

  /// 我们现在要实现一个红绿灯，把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色，你会怎样编写这个代码呢？
  function sleep(duration) { 
    return new Promise(
        function (resolve, reject) { 
            setTimeout(resolve, duration)
         }
    )
 }

 async function changeColor(duratio, color) { 
     document.getElementById("traffic-light").style.background = color
     await sleep(duration)
  }

  async function main() { 
      while(true) {
          await changeColor(3000, "green")
          await changeColor(1000, "yellow")
          await changeColor(2000, "red")
      }
   }
   
   main()