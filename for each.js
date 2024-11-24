const arr = ['Ram', 'Shyam', 'Gita'];

arr.forEach((copy) => {
  console.log(copy);
  
});


//Copying element to empty array
const arr1 = ['Ball', 'Cat', 'Dog', 'Egg']
const arr2 = [];

arr1.forEach(function (arr1){
  arr2.push(arr1);
});

console.log(arr2);


//Sqauring the elements of an array
const value = [ 2, 3, 4, 5];
const squaring = [];

value.forEach(function (value){
  squaring.push(value * value);
});
console.log(squaring);


//Square rooting the elements of an array
const num = [225, 25, 36]
const squareRoot = []

num.forEach(function (num){
  squareRoot.push(Math.sqrt(num));
})

console.log(squareRoot);