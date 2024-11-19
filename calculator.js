//Simple calculator using switch case

let num1 = 10;
let num2 = 2;
let operator = "+";

switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    
    
    case "-":
      console.log(num1 - num2);
      break;
    
    
    case "*":
      console.log(num1 * num2);
      break;
    
    
    case "/":
      console.log(num1 / num2);
      break;
    
    
    case "%":
      console.log(num1 % num2);
      break;
    
    
    default:
      console.log("Error404");
}