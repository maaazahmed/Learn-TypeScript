// var a = "12345"
// var b = 12
// console.log(a + b)

// console.log({ a: 123 } == { a: 123 }); // False


// function createCounter() {
//     let val = 0;
//     return {
//         increment() { val++ },
//         getVal() { return val }
//     }
// }
// let counter = createCounter();
// counter.increment();
// console.log(counter.getVal()); // 1
// counter.increment();
// console.log(counter.getVal()); // 2

// class Point {
//     constructor(public x: number, public y: number) {

//     }
//     add(point: Point) {
//         return new Point(this.x + point.x, this.y + point.y);
//     }
// }
// var p1 = new Point(0, 10);
// var p2 = new Point(10, 20);
// var p3 = p1.add(p2); // { x: 10, y: 30 }
// var inc = x => x+1;


// var a = ["a"];
// var b = ["b"]
// console.log(a + b)


// var a = {}
// var b = []
// console.log(a + b)



// var a = {}
// var b = {}
// console.log(a + b)



// var a = "Hello"
// var b = 1
// console.log(a - b)


// function add(a, b) {
//     return (
//         a + b
//     )
// }

// const a =  add()
// console.log(a)



// console.log("" == 0)
// console.log(0 == "")

// var a = {}
// var b = a;
// a.n = "Maaz"
// console.log(b.n)



// function add() {
//     console.log(this.add)
// }
// // add()
// let bar = {
//     add
// }
// bar.add()



// function func(param) {
//     var paramVal = param
//      function innnerfunc() {
//         console.log(paramVal)
//     }
//     innnerfunc()
// }

// func("ELLo World")



// function func(param) {
//     var paramVal = param;
//     function innnerfunc() {
//         console.log(paramVal)
//     }
//     innnerfunc()
// }
// func("My name is Maaz Ahmed")



// function func (name){
//     var nameVal = name;
//     // console.log(nameVal)
//     return function(){
//         console.log(nameVal)
//     }
// }

//  var innnerfunc = func("Maaz Ahmed")
// innnerfunc()




//   function createCounter() {
//       let val = 0;
//       return {
//          increment() { val++ },
//          getVal() { return val }
//        }
//   }

//     let counter = createCounter();

// counter.increment();
// console.log(counter.getVal()); // 1


// function createCounter (){
//     let  val = 0
//     return {
//         increment (){val++},
//         getVal(){ return val }
//     }
// }
// let counter = createCounter()
// for (let i = 0; i < 10; i++) {
//     counter.increment()
//     console.log(counter.getVal())      
// }


function createCounter() {
    var val = 0
    return {
        increment() { val++ },
        getVal() { return val }
    }
}

var counter = createCounter()
console.log(counter)