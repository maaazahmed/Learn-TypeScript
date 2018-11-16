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



// var Point = (function () {
//     function Point(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     Point.prototype.add = function (point) {
//         return new Point(this.x + point.x, this.y + point.y);
//     };
//     return Point;
// })();



// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//     }
//     add(point: Point) {
//     return new Point(this.x + point.x, this.y + point.y);
//     }
//     }
//     var p1 = new Point(0, 10);
//     var p2 = new Point(10, 20);
//     var p3 = p1.add(p2); // {x:10,y:30}




// function createCounter() {
//     var val = 0
//     return {
//         increment() { val++ },
//         getVal() { return val }
//     }
// }

// var counter = createCounter()
// counter.increment()
// console.log(counter.getVal())
// counter.increment()
// console.log(counter.getVal())
// counter.increment()
// console.log(counter.getVal())
// counter.increment()
// console.log(counter.getVal())
// counter.increment()
// console.log(counter.getVal())
// counter.increment()
// console.log(counter.getVal())
// counter.increment()
// console.log(counter.getVal())
// console.log(.1 + .2)
// console.log({ max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER });


// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//         console.log(this.x, this.y)

//     }
//     add(point: Point) {
//         return new Point(this.x + point.x, this.y + point.y);
//     }
// }
// var p1 = new Point(0, 10);
// var p2 = new Point(10, 20);
// var p3 = p1.add(p2); // {x:10,y:30}

// console.log(p3)


// class MyName {
//     _1st_name;
//     _2nd_name;
//     constructor(_1st_name: string, _2nd_name: string) {
//         this._1st_name = _1st_name;
//         this._2nd_name = _2nd_name;
//     }

//     currentName() {
//         return this._1st_name + this._2nd_name
//     }

// }

// var fullName = new MyName("Maaz ", "Ahmed")
// var fullName2 = new MyName("Aslam ", "Khan")
// var fullNam3 = new MyName("Aalam ", "Khan")

// console.log(fullName.currentName())
// console.log(fullName2.currentName())
// console.log(fullNam3.currentName())


// class Name {
//     a: string;
//     b: string;
//     constructor(a: string, b: string) {
//         this.a = a;
//         this.b = b
//     }
//     printName() {
//         return this.a + this.b
//     }
// }

// var n1 = new Name("Name ", "1")
// var n2 = new Name("Name ","2")
// var n3 = new Name("Name ", "3")


// console.log(n1.printName())


// **************************************************
// **************************************************
// **************************************************
// **************************************************
// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     add(point: Point) {
//         return new Point(this.x + point.x, this.y + point.y);
//     }
// }
// var p1 = new Point(0, 10);
// var p2 = new Point(10, 20);
// // var p3 = p1.add(p2); // {x:10,y:30}
// // console.log(p3)

// class Point3D extends Point {
//     z: number;
//     constructor(x: number, y: number, z: number) {
//         super(x, y);
//         this.z = z;
//         console.log(x, y, z)
//     }
//     add(point: Point3D) {
//         console.log(point, "302")
//         var point2D = super.add(point);
//         return new Point3D(point2D.x, point2D.y, this.z + point.z);
//     }
// }
// var pa = new Point3D(0, 1, 2);
// var pB = new Point3D(0, 1, 2);
// pB.add(pa)
// **************************************************
// **************************************************
// **************************************************
// **************************************************


// class Something {
//     static instances = 0
//     constructor() {
//         Something.instances++
//     }
// }

// var s1 = new Something()
// var s2 = new Something()
// console.log(Something.instances)


// class FooBase {
//     public x: number;
//     private y: number;
//     protected z: number
// }
// var foo = new FooBase()

// class FooChild  extends FooBase {
//     constructor(){
//         super()
//         this.x;
//         this.y;
//         this.z
//     }
// }

