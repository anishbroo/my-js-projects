function reverseNum(num){
  return num.toString().split("").reverse().join("");
}

console.log("Reversed Number: ", reverseNum(123654879));



// function revNum(num){
//   let rev = 0;
//   while(num!==0){
//     num = num % 10;
//     rev = rev * 10;
//     num = num / 10;
//   }
//   return rev;
// }

// console.log("Reversed number: ", revNum(54));