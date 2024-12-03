let x= ["two", "mark", "board", "two", "board"];

let x1 = [];
let x2 = [];
let x3 = [];

x.forEach(ele => {
  if(!x1.includes(ele)){
    x1.push(ele);
  }
});

console.log("removing duplicate items: " , x1);

let alphabet1 = "t";
for(i=0; i < x1.length; i++){
  if(x1[i].includes(alphabet1)){
    x2.push(x[i]);
  }
}
console.log("array which contains letter t: " , x2);

let alphabet2 = "b";
for(i=0; i < x1.length; i++){
  
  if(x1[i].includes(alphabet2)){
    x3.push(x[i]);
  }
}

console.log("array which contains letter b: " , x3);