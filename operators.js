//Arithmetic Operators
let a = 4;
let b = 2;

console.log("The addition of given number is " + (a+b));
console.log("The subtraction of given number is " + (a-b));
console.log("The multiplication of given number is " + (a*b));
console.log("The division of given number is " + (a/b));
console.log("The modulus of given number is " + (a%b));
console.log("The power of given number is " + (a**b));



//Assigment Operators
let x = 10;

console.log(x+=1);
console.log(x-=1);
console.log(x*=1);
console.log(x/=1);
console.log(x%=1);



//Comparison Operators
console.log(a==b); //data type strictly check gardaina 
console.log(a===b); //data type strictly check garcha 
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);



//Logical Operators
console.log( a < 10 && b < 1);
console.log( a <10 || b < 1);
console.log(!(a<b));


//Ternary Operators
let age = 15;
let vote = age > 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(vote);
