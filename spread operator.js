//expands iterable into more elements 
//euta array ko parts or elements haru arko ma copy gardincha

//spread operator in an array
//concatenate using spread operator
let num1 = [1, 2, 5];
let num2 = [3, 4, 6];

console.log("Combining two array with spread operator: " , [...num1, ...num2]);


//example
let a = [22, 33, 44];
let eg = [...a];

console.log(eg);

let b = [...a, 25, 15];
console.log(b);


//spread operator in an object
//merged person in spread operator
let person = {
  name: 'Ram',
  age: 20,
  address: 'Ichangu'
}

let modifiedPerson = {
  name: 'Ramma',
  age: 19,
  address: 'Halchowk'
}

console.log({...person, ...modifiedPerson})


//adding multiple elements using spread operator
let n1 = [1,2,3,4,5,6];
let n2 = [...n1,11,22,33,44,55,66];

console.log([...n2]);



//spread operator to split the string
let str = "Hellow";

console.log("spliting by spread operator: " ,...str);



//Array destructuring through spread operator
let array1 = [1,2,34,5,9,8];
let [a1,b1,c1,...left] = array1;

console.log(a1);
console.log(...left);


//spread operator in function
let num = [1,2,3]

function sum(a,b,c){
  return a+b+c;
}

console.log("spread operator in function: ", sum(...num));