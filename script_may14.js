// ----------- Student Registration Form ------------

let studentName = prompt("Enter Student Name:");
let department = prompt("Enter Department:");
let age = prompt("Enter Age:");

console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);

/*
Example Output:
Welcome Nithisha
Department: CSE
Age: 25
*/

// ----------- ATM Withdrawal System ------------------------

let balance = 12700;
let withdrawAmount = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawAmount >= 100 && withdrawAmount <= balance) {
    console.log("Transaction Successful");
} else if (withdrawAmount < 100) {
    console.log("Minimum withdrawal is 100");
} else {
    console.log("Insufficient Balance");
}

/*
Example Output:
Transaction Successful
*/


//--------------- Swiggy Discount Checker ---------------

let orderAmount = Number(prompt("Enter Order Amount:"));

let deliveryStatus = orderAmount > 599
    ? "Free Delivery Available"
    : "Delivery Charges Applied";

console.log(deliveryStatus);

/*
Example Output:
Free Delivery Available
*/


//-------------- Instagram Login System ---------------

let username = prompt("Enter Username:");
if (username === "admin") 
    {
    let password = prompt("Enter Password:");
    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else 
    {
    console.log("Invalid Username");
}

/*
Example Output:
Login Success
*/


// --------------- Traffic Signal System -----------------

let signal = prompt("Enter Signal Color:");
switch (signal) 
{
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Invalid Signal");
}

/*
Example Output:
STOP
*/


//----------------- Employee Salary Calculator -------------------

function salaryCalc(basicSal, bonus) 
{
    return basicSal + bonus;
}

let totalSal = salaryCalc(25900, 5250);

console.log("Total Salary:", totalSal);

/*
Example Output:
Total Salary: 31150
*/


//******** Shopping Cart Total ----------

let rates = [120, 280, 350, 449];
let total = 0;
for (let i = 0; i < rates.length; i++) 
    {
    total += rates[i];
}
let average = total / rates.length;
console.log("Total Price:", total);
console.log("Average Price:", average);

/*
Example Output:
Total Price: 1199
Average Price: 299.75
*/


//------------ Contact Book -----------------

let contact = {
    name: "ABC",
    phone: "9988776655",
    status: "Available"
};
for (let key in contact) {
    console.log(`${key}: ${contact[key]}`);
}

/*
Example Output:
name: ABC
phone: 9988776655
status: Available
*/

//--------------- Movie Ticket Booking ---------------

function payment(price) 
{
    console.log(`Payment of Rs.${price} Successful`);
}
function bookTicket(callback) 
{
    let movieName = prompt("Enter Movie Name:");
    let ticketPrice = Number(prompt("Enter Ticket Price:"));
    console.log(`Movie Name: ${movieName}`);
    console.log("Ticket Booking Completed");
    callback(ticketPrice);
}
bookTicket(payment);

/*
Example Output:
Ticket Booking Completed
Payment of Rs.280 Successful
*/


// ---------- Food Delivery Time Tracker ----------------

function foodDeliveryTracker() 
{
  const stages = ["Order Confirmed", "Order Accepted", "Preparing your Food", "Out for Delivery", "Delivered"];
  for (let i = 0; i < stages.length; i++) 
    {
    console.log((i + 1) + " - " + stages[i]);
  }
}
foodDeliveryTracker();


/*
Output:
1 - Order Confirmed
2 - Order Accepted
3 - Preparing your Food
4 - Out for Delivery
5 - Delivered
*/