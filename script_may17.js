//------- STUDENTS --------------

const presentStudents = ["html", "css", "js"];
const absentStudents = ["reactjs", "nodejs"];
const allStudents = [...presentStudents, ...absentStudents];
allStudents.push("JAVA");
console.log(allStudents);

//Output ::::::::: (6) ['html', 'css', 'js', 'reactjs', 'nodejs', 'JAVA']

//----- E Commerce ---------------

const mobile = {
  name: "17 Pro Max",
  brand: "iPhone",
  price: 79999,
  quantity: 1,
  category: "Electronics",
};
const charger = {
  type: "65W Fast Charger",
  brand: "iPhone",
  price: 2999,
  quantity: 1,
};
const cartItem = {
  ...mobile,
  ...charger,
  deliveryDate: "2026-05-22",
};
console.log(cartItem);

/* Output::::::::::::::

{name: '17 Pro Max', brand: 'iPhone', price: 2999, quantity: 1, category: 'Electronics', …}
brand: "iPhone"
category: "Electronics"
deliveryDate: "2026-05-22"
name: "17 Pro Max"
price:2999
quantity: 1
type: "65W Fast Charger" */

//---------- Food delivery ----------------

function orderFood(...items) {
  console.log("Total items ordered:", items.length);
  console.log("First item:", items[0]);
  console.log("Last item:", items[items.length - 1]);
}
orderFood("5star", "dairy milk", "munch", "kitkat", "milkybar");

/* Output:::::::::::::::::
Total items ordered: 5
First item: 5star
Last item: milkybar */


//----------- SALARY ------------------

const emp = [
  { name: "html", department: "IT", salary: 75800 },
  { name: "css", department: "HR", salary: 45400 },
  { name: "js", department: "Finance", salary: 90900 },
  { name: "react js", department: "Marketing", salary: 30600 },
  { name: "Java", department: "IT", salary: 60200 },
];
const filteredEmp = emp.filter(emp => emp.salary > 50000);
console.log("Employees with salary above 50000:");
filteredEmp.forEach(emp => {
  console.log(emp.name, emp.salary);
});

/* OUTPUT::::::::
Employees with salary above 50000:
html 75800
js 90900
Java 60200 */

//------------ GAME SCORE BOARD -----------

const score = [
  { player: "html", score: 430 },
  { player: "css", score: 690 },
  { player: "js", score: 520 },
  { player: "react", score: 180 },
  { player: "java", score: 350 },
];
const total = score.reduce((sum, current) => sum + current.score, 0);
console.log("Total Score :", total);

// Output:::: Total Score : 2170