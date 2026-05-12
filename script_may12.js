//------- PRINT NUMS ----------
for(let i = 1; i <= 20; i++){
    console.log(i);
}
/* Output 
1
2
3
4
5 
...
20 */

//---- ODD NUMS -----------
for(let i = 1; i <= 50; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

/*
Output:
1
3
5
7
9
11
...
49
*/


//---- MULTIPLICATION -----------
for(let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = ${7 * i}`);
}

/*
Output:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
...
7 x 10 = 70
*/

// ---------- REVERSE ------
let i = 20;
while(i >= 1){
    console.log(i);
    i--;
}

/*
Output:
20
19
18
17
16
15
...
1
*/

//-------- SUM OF NUMS --------
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}
console.log("total sum : ", sum);

/*
Output:
total sum :  5050
*/

// Using WHILE LOOP 
let sum1=0;
let j=1;
while(j<=100)
{
    sum1+=j;
    j++;
}
console.log("total sum : ", sum1);

/*
Output:
total sum :  5050
*/

//------- ARRAY LOOP ------------
let toys = ["teddybear","hellokitty","barbie","pikachu"];

for(let toy of toys){
    console.log(toy);
}

/*
teddybear
hellokitty
barbie
pikachu
*/

//------- EVEN NUMS ------------
let even = 0;

for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        even++;
    }
}
console.log(even);

/* output
25
*/

//-------- STAR PATTERN -------------
//USING FOR
for(let i = 1; i <= 5; i++){
    let stars = "";

    for(let j = 1; j <= i; j++){
        stars += "*";
    }
    console.log(stars);
}

// USING WHILE
let m=1;
while(m<=5)
{
    let row="";
    let n=1;
    while(n<=m)
    {
        row+="*";
        n++;
    }
    console.log(row);
    m++;
}

//USING DO while  
let x=1;
do{
    let row1="";
    let y=1;
    do{
        row1+="*";
        y++;
    }while(y<=x);
    console.log(row1);
    x++;
    } while(x<=5)


/*
Output:
*
**
***
****
*****
*/

//--------- FUNCTION ---------

function JAVASCRIPT(){
    console.log("hi hello");
}
JAVASCRIPT();

/*
Output:
hi hello
*/

//-------- FUNCTION PARAMETER ------
// 10. Function with Parameter
function NAME(name){
    console.log("Hiii " +  name);
}

NAME("NITHISHA");

/*
Output:
Hiii NITHISHA
*/

//----- ADD 2 NUMS --------------
function add(g, h){
    return g + h;
}
console.log(add(25, 35));

/*
Output:
60
*/


//------ SALARY BONUS ----------
function salaryBonus(salary, bonus){
    return salary + bonus;
}
console.log(salaryBonus(52000, 4600));

/*
Output:
56600
*/

//-------- OBJECT ------------
let student = {
    name : "NITHISHA",
    course : "JavaScript",
    marks : 90
};
for(let details in student){
    console.log(details + " : " + student[details]);
}

/*
Output:
name : NITHISHA
course : JavaScript
marks : 90
*/

//---------- LARGEST NUMBER ----------
function largest(q, r){
    if(q > r){
        return q;
    } else {
        return r;
    }
}
console.log(largest(12, 26));

/*
Output:
26
*/

//--------- EMPLOYEE DETAILS ---------
let employee1 = {
    name1: "NITHISHA",
    department1: "IT",
    salary1: 48000
};

function addBonus(salary, bonus)
{
    return salary + bonus;
}
console.log("Employee Name: " + employee1.name1);
console.log("Department: " + employee1.department1);
console.log("Salary: " + employee1.salary1);
let finalSalary = addBonus(employee1.salary1, 5900);
console.log("Salary after bonus: " + finalSalary);

/*
Output:
Employee Name: NITHISHA
Department: IT
Salary: 48000
Salary after bonus: 53900
*/