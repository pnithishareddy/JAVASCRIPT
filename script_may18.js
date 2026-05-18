//---------------- API ---------------

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const upperCaseNames = users.map(user => user.username.toUpperCase());
    console.log(upperCaseNames);
  })
  .catch(error => console.error(error));

  /* OUTPUT::::::::::::::
  (10) ['BRET', 'ANTONETTE', 'SAMANTHA', 'KARIANNE', 'KAMREN', 'LEOPOLDO_CORKERY', 'ELWYN.SKILES', 'MAXIME_NIENOW', 'DELPHINE', 'MORIAH.STANTON']
0: "BRET"
1: "ANTONETTE"
2: "SAMANTHA"
3: "KARIANNE"
4: "KAMREN"
5: "LEOPOLDO_CORKERY"
6: "ELWYN.SKILES"
7: "MAXIME_NIENOW"
8: "DELPHINE"
9: "MORIAH.STANTON"
length: 10
[[Prototype]]: Array(0) */


//------------ API products ----------------------

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    const expensive = products.filter(p => p.price > 100);
    expensive.forEach(product => {
      console.log(`category: ${product.category} ; price: ${product.price} ; ID: ${product.id}`);
    });
  });

  /*Output:::::::::::::::::::::::
 category: men's clothing ; price: 109.95 ; ID: 1
 category: jewelery ; price: 695 ; ID: 5
 category: jewelery ; price: 168 ; ID: 6
 category: electronics ; price: 109 ; ID: 10
 category: electronics ; price: 109 ; ID: 11
 category: electronics ; price: 114 ; ID: 12
 category: electronics ; price: 599 ; ID: 13
 category: electronics ; price: 999.99 ; ID: 14
 */

//--------------- DATE ------------
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`${hours} : ${minutes} : ${seconds}`);

/* Output:::::::::::
22 : 43 : 10 */

//---------- STRING ------------------
let name = "   java script   ";
name = name.trim();
console.log("trim: '" + name + "'");
name = name.toUpperCase();
console.log("uppercase: '" + name + "'");
let final = name.includes("SCRIPT");
console.log("Final : " + name);
console.log("Includes 'script': " + final);

/*Output::::::::::::::::::::
trim: 'java script'
uppercase: 'JAVA SCRIPT'
Final: JAVA SCRIPT
Includes 'script': true
 */

//--------- Array student rank ------------

let marks = [456, 370, 705, 298, 973];
console.log("Original: " + marks);
marks.sort((a, b) => b - a);
console.log("high to low: " + marks);
let top3 = marks.slice(0, 3);
console.log("Top 3 marks: " + top3);

/*Output::::::::::::::::::
Original: 456,370,705,298,973
high to low: 973,705,456,370,298
Top 3 marks: 973,705,456
*/