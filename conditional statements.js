//For loop
console.log("BY USING FOR LOOP:")
for(let i=0; i<=5; i++){
  console.log("I am learning JavaScript");
}

for (let a=1; a<=5; a++){
  console.log("The number is "+a);
}


//While loop
console.log("BY USING WHILE LOOP:");
a=1;
while( a < 5){
  console.log("JS");
  a++;
}


//Do-while loop
console.log("BY USING DO-WHILE LOOP:");
let value = 1;
do{
  console.log("The value is "+value);
  value++;
}while(value<=5)


//For of loop (value return garcha)
console.log("BY USING FOR OF LOOP:")
let games = ["Football", "Basketball" , "Volleyball"];
let x;

for (x of games){
  console.log(x);
}

//For in LOOP (index return garcha)
console.log("FOR IN LOOP:");

for(x in games){
  console.log(x);
}