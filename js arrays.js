//declaration of array
let a = []; //empty array
let arr1 = [1, 2, 3, 4, 5]

console.log(arr1);


//creating and initializing array
let x = new Array('Ram', 'Shyam', 'Gyan');
console.log("initializing array: " +x);


//assessing elements of an array
console.log("Assessing elements of an array: "+arr1[2]);
console.log("Assessing elements of an array: " +x[0]);


//modifying values of an array
console.log("Before Modification: " +x);

x[2]='Sita';
console.log("After Modification: " +x);


//adding elements to array
x.push('Saraswoti');
console.log("Adding elements through push: " +x);

x.unshift('HeraKaji');
console.log("Adding elements through unshift: " +x);


//removing elements of an array
x.pop();
console.log("Removing elements through pop: " +x);

x.shift();
console.log("Removing elements through shift: " +x);


//splicing the elements of an array
x.splice();
console.log(x);

let game = ['Football', 'Basketball', 'Volleyball', 'Jumpball'];
game.splice();
console.log("Splicing the elements: "+ game);

//adding elements through splice
game.splice(1,2, 'Cricket');
console.log(game);


//length of an array
console.log("Array length: " + x.length);
console.log("Array length: " + game.length);


//array to string
let place = ['Nayabazar', 'Galkopakha', 'Samakhusi', 'Chamati', 'Jyatha'];

console.log("Array to string: " +place.toString());


//join
let country = ['Nepal', 'France', 'England', 'Belgium'];
let eg = country.join(' & ');

console.log("Join output: " +eg);


//concat
let num1 = [1, 2, 3, 4]
let num2 = [5, 6, 7, 8]
let num3 = [9, 10, 11, 12]

let con = num1.concat(num2,num3);

console.log(num1, num2, num3);
console.log("Array after concatenation: " +con);


//slice
console.log("Outputs of splice:")
let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let slice1 = value.slice(0, 4); //first four elements
console.log(slice1);

let slice2 = value.slice(5, 2); //empty kina bhane first is greater than second
console.log(slice2);

let slice3 = value.slice(3, -5); 
console.log(slice3);

let slice4 = value.slice(-5); //extracts the last 5 elements of an array
console.log(slice4);

let slice5 = value.slice(25,35) //out of range index
console.log(slice5);


//filter()
console.log("Filter():");
let ages = [2, 19, 5, 25];
let result = ages.filter(ableToVote);

function ableToVote(ages){
  return ages >=18;
}
console.log(result);


//findIndex()
console.log("findIndex():");
let number = [ 51, 2, 3, 55, 60, 22];
let res = number.findIndex(greater);

function greater(number){
  return number > 22;
}
console.log("Index value of element: " +res);


//find()
console.log("find():");
let y = [22, 19, 20, 44, 66, 88];
let result1 = y.find(smaller);

function smaller(y){
  return y < 22;
}

console.log(result1);


//IndexOf()
let veg = ['Cabbage', 'Cauliflower', 'Brinjal', 'Amli'];
console.log("indexOf() output: "+ veg.indexOf('Amli',3));


//sorting elements()
console.log("sort() output: " + veg.sort()); //ascending 
console.log("sort() output: " + y.sort());


//includes()
console.log("include() output: " + veg.includes('Cabbage'));
console.log("include() output: " + veg.includes('Brocoli'));
console.log("include() output: " + veg.includes('Brinjal',3));


//flat()
let value1 = [[1,2],[[3,4]],5,[6]]
console.log("flat() output: " + value1.flat(4));


//every()
let age1 = [25, 33, 19, 99];

function check(age){
  return age > 18;
}

console.log("every() output: " , age1.every(check));


//findLast()
console.log("findLast() output: " ,age1.findLast(check));


//some()
function vote(age){
  return age >= 18;
}

console.log("some() output: " + age1.some(vote));


//reduce() without initial value
let numbers = [1, 2, 3, 4, 5, 9, 7, 11];

function func(total, num){
  return total - num;
}

console.log("reduce() output: " + numbers.reduce(func));


//reduce() with initial value
let initialValue = 0;
let value2 = [1,2,3,4,5];
let sum = value2.reduce((acc,val) => acc + val ,initialValue);
console.log("reduce() output: " + sum);



//keys()
console.log("keys() output: ")
let array1 = ["Two", "Three", "Eight", "Nine"];
let u ;

for(u of array1.keys()){
  console.log(u);
}


//entries
let animals = ['Lion', 'Dog', 'Cat', 'Elephant', 'Bear'];

console.log("entries() output: " + animals.entries().next().value);



//map
// let array2 = [2,3,5,4];

// function myFunc(){
//   return x=x*2;
// }

// console.log(array2.map(myFunc));

const array3 = [1, 4, 9, 16];
const map1 = array3.map((x) => x * 2);

console.log("map() output: " + map1);
