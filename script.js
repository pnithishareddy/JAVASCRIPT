// Section 1

var a = 10;
a = 15;
console.log(a); 
// Output: 15


let b = 20;
//let b = 30;
// Output: Error (Identifier 'b' has already been declared)


const c = 50;
console.log(c);
// Output: 50


 const x = 10;
// x = 20;
// Output: Error (Assignment to constant variable)


var p = 5;
var p = 10;
console.log(p);
// Output: 10


let q = 25;
q = q + 10;
console.log(q);
// Output: 35


const r = 7;
console.log(r + 3);
// Output: 10


// var q = 10; 
// Output: var / let / const (any valid keyword)

// Section 2

// console.log() ---------> prints normal output
console.log("Haiiiiiiiiiiiiiiiii");


// console.warn() -------> warning message
console.warn("Warning!!!!!!!!!!!!");


// console.error() ------> error message
console.error("Error!!!!!!!!!!!");


// console.clear();
// Output: Clears console

//  Section 3

let a1 = "hello";
console.log(typeof a1);
// Output: string


let b1 = 100;
console.log(typeof b1);
// Output: number


let c1 = false;
console.log(typeof c1);
// Output: boolean


let d;
console.log(d);
// Output: undefined


console.log(typeof null);
// Output: object


let str="25";
let str1=Number(str);
console.log(str1);
// Output: 25

//  Section 4

let toys = ["teddy", "kitty", "pikachu"];


let arr1 = ["a","b","c"];
console.log(arr1[1]);
// Output: b


let arr2 = ["x","y","z"];
console.log(arr2[arr2.length-1]);
// Output: z


console.log(arr1[0]);
// Output: a


let arr3 = ["teddy","kitty"];
console.log(arr3.length);
// Output: 2


arr3.push("orange");
// Output array: ["teddy","kitty","orange"]

// Section 5

let obj1 = { name: "nithisha", age: 25};


console.log(obj1.name);
// Output: nithisha


let obj2 = {
  toys: ["teddy","kitty"]
};
console.log(obj2.toys[1]);
// Output: kitty


console.log(obj2.toys[obj2.toys.length - 1]);
// Output: kitty

// Section 6

console.log(5 + 3);
// Output: 8

console.log(10 % 3);
// Output: 1

console.log(2 ** 3);
// Output: 8

console.log(10 / 2);
// Output: 5

// Section 7

let a2 = 5;
a2++;
console.log(a2);
// Output: 6


let b2 = 5;
let c2 = b2++;
console.log(b2, c2);
// Output: 6 5


let z = 5;
let y = ++x;
console.log(z, y);
// Output: 6 6


let m = 3;
let n = m--;
console.log(m, n);
// Output: 2 3

// Section 8

console.log(5 == "5");
// Output: true

console.log(5 === "5");
// Output: false

console.log(true && false || true);
// Output: true

// Section 9

5 > 3 ? console.log("Yes") : console.log("No");
// Output: Yes
