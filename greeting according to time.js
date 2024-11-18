let time = new Date();
let hours = time.getHours();

let greeting = ( hours < 12 ) ? "Good Morning!" 
            :  ( hours < 17 ) ? "Good Afternoon" : "Good Evening"
            
console.log(time);
console.log(hours);
console.log(greeting);