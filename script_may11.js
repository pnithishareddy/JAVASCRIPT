//----------------------------------------------------------------
//----- TYPE CASTING --------

console.log("57" + 5)          
// Output: "575"
// Datatype: string

console.log(11 + true)         
// Output: 12
// Datatype: number

console.log(false + null)      
// Output: 0
// Datatype: number

console.log("Hello" + undefined) 
// Output: "Helloundefined"
// Datatype: string

console.log([1,21] + 5)         
// Output: "1,215"
// Datatype: string

//-------------------------------------------------------------------
//--- IMPLICIT ------


let a = "28" + 5
console.log(a)           
console.log(typeof a)   // String + Number  


let b = true + 17
console.log(b)           
console.log(typeof b)     // Boolean + Number


let c = [6,2] + "hello"
console.log(c)           
console.log(typeof c)    // Array + String


let d = {n:6} + 8
console.log(d)           
console.log(typeof d)      // Object + Number


let e = null + 99
console.log(e)           
console.log(typeof e)     // Null + Number 

//----------------------------------------------------------------------
//--- EXPLICIT -----

console.log(Number("500"))    // 500

console.log(Number(true))     // 1

console.log(Number(false))    // 0

console.log(Number(null))     // 0

console.log(Number("abc"))    // NaN

console.log(Number([100]))    // 100

//----------------------------------------------------------------------
//---- BOOLEAN ----------

console.log(Boolean(""))            // false

console.log(Boolean("javascript"))  // true

console.log(Boolean(0))             // false

console.log(Boolean(1))             // true

console.log(Boolean(null))          // false

console.log(Boolean(undefined))     // false

console.log(Boolean([]))            // true

console.log(Boolean({}))            // true

//------------------PASS FAIL ----------------------------------------------------
//---- IF ----
let mark = 55

if(mark > 35){
    console.log("Pass")
}
else{
    console.log("Fail")
}

//---------- VOTE ELIGIBILITY -----------------

let age = 25

if(age >= 18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}

//------------ GREATEST NUM ------------

let x = 23
let y = 56
let z = 73

if(x > y && x > z){
    console.log("x is greatest")
}
else if(y > x && y > z){
    console.log("y is greatest")
}
else{
    console.log("z is greatest")
}

//-----------TRAFFIC SIGNAL --------------

let signal = "green"

switch(signal){
    case "red":
        console.log("stop!!!!!!!!!!!")
        break

    case "yellow":
        console.log("ready.......")
        break

    case "green":
        console.log("goooooooo")
        break

    default:
        console.log("invalid")
}

//----------- LOGIN ------------------

let username = "admin"
let password = "admin1234"

if(username == "admin")
    {
    if(password == "admin1234")
        {
        console.log("Login Success")
    }
    else{
        console.log("Invalid Password")
    }
}
else{
    console.log("Invalid Login")
}

//------------ SESSION FINDER ------------------------

let hour = 16

if(hour >= 1 && hour <= 12){
    console.log("Good Morning")
}
else if(hour >= 13 && hour <= 15){
    console.log("Good Afternoon")
}
else if(hour >= 16 && hour <= 19){
    console.log("Good Evening")
}
else if(hour >= 20 && hour <= 24){
    console.log("Good Night")
}
else{
    console.log("Invalid")
}


//------- CHALLENGE ---------
console.log(true + true)   // 2

console.log("5" - 2)      // 3

console.log("5" + 2)       // "52"

console.log(null + 1)       // 1

console.log(undefined + 1)       // NaN

console.log(Boolean(" "))       // true

console.log(Number(true))          // 1