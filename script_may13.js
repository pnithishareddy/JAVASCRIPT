//-------------- BASIC FUNCTION --------------------------

function welcomeUser(name) {
    console.log("Welcome " + name);
}
welcomeUser("NITHISHA");

// Output:
// Welcome NITHISHA

//--------------- Parameter + Return ---------------

function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5));

// Output:
// 25


//------------------ Object Function -------------

const employee = {
    name: "chinni",
    salary: 52000,
    employeeBonus: function(bonus) {
        console.log(this.name);
        console.log(this.salary + bonus);
    }
};
employee.employeeBonus(5700);

// Output:
// chinni
// 57700

// --------------- Scope Checking -------------

function checkScope() 
{
    if (true) {
        var a = "I am VAR";
        let b = "I am LET";
        const c = "I am CONST";
    }
    console.log(a); // Works
    // console.log(b); // Error
    // console.log(c); // Error
}

checkScope();

// Output:
// I am VAR


// ----------------- Arrow Function --------------------

const add = (a, b) => {
    console.log(a + b);
};

add(17, 23);

// Output:
// 40

//------------- Callback Function --------------

function multiply(a, b) {
    return a * b;
}

function calculator(callback, num1, num2) {
    console.log(callback(num1, num2));
}

calculator(multiply, 8, 2);

// Output:
// 16

//----------------- Generator Function --------------

function* offers() {
    yield "75% OFF";
    yield "Free Delivery";
    yield "5% Cashback";
}
const offer = offers();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Output:
// 75% OFF
// Free Delivery
// 5% Cashback

//------------- Default Parameter ------------------

function student(name, course = "JavaScript") {
    console.log("Name:", name);
    console.log("Course:", course);
}
student("Nithisha");
student("chinni", "FSD");

// Output:
// Name: Nithisha
// Course: JavaScript
// Name: chinni
// Course: FSD

//------------- Currying fn for multiply --------------

function multi(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multi(5)(8)(2));

// Output:
// 80

//-------------------- Spread Operator ------------------

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArray = [...arr1, ...arr2];
console.log(mergeArray);

// Output:
// [1, 2, 3, 4, 5, 6]


//------------ Object Spread -----------------

const obj1 = { name: "Nithisha" };
const obj2 = { role: "Developer" };
const mergeObject = { ...obj1, ...obj2 };
console.log(mergeObject);

// Output:
// { name: 'Nithisha', role: 'Developer' }


//------------------ Rest Operator -----------------

function numbers(...num) 
{
    console.log(num);
    let total = 0;
    for (let n of num) 
        {
        total += n;
    }
    console.log(total);
}
numbers(1, 2, 3, 4);

// Output:
// [1, 2, 3, 4]
// 10

//------------------ CHALLENGE -------------------

const students = [];
function addStudent(name, marks) 
{
    const student = {
        name,
        marks
    };
    students.push(student);
    console.log(name + " added successfully");
}
function printStudents() 
{
    console.log("Student List:");
    students.forEach((student, index) => 
        {
        console.log(
            index + 1,
            student.name,
            student.marks
        );
    });
}
function calculateMarks(student, callback) 
{
    return callback(student.marks);
}
function addBonus(marks) 
{
    return marks + 5;
}
function addMultipleStudents(...newStudents) 
{
    students.push(...newStudents);
}
addStudent("ajay", 85);
addStudent("Nithisha", 95);

const extraStudents = [
    { name: "chinni", marks: 73 },
    { name: "reddy", marks: 89 }
];
addMultipleStudents(...extraStudents);
printStudents();
console.log("Bonus Marks:");
students.forEach(student => 
    {
    const finalMarks = calculateMarks(student, addBonus);
    console.log(student.name, finalMarks);
});

// Output:
// ajay added successfully
// Nithisha added successfully
// Student List:
// 1 'ajay' 85
// 2 'Nithisha' 95
// 3 'chinni' 73
// 4 'reddy' 89
// Bonus Marks:
// ajay 90
// Nithisha 100
// chinni 78
// reddy 94