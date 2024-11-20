let i;
let sumOdd = 0;
let sumEven = 0;

for(i=0; i<=15; i++){
  if(i%2===0){
    sumEven +=i;
  }
  else{
    sumOdd +=i;
  }
}

console.log("The sum of even numbers from 0 to 15 is : " + sumEven);
console.log("The sum of odd numbers from 0 to 15 is : " + sumOdd);