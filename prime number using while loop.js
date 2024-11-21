let num1 = 13;
let boolean = true;
let i=2;

if(num1 === 1){
  console.log("1 is neither prime nor composite number");
}
else{
  while(num1 > i){
    if(num1 % i === 0){
      boolean = false;
      break;
    }
    i++;
}
  if(boolean === false){
    console.log(num1+ " is not a prime number.");
  }
  
  else{
    console.log(num1+ " is a prime number");
  }
}