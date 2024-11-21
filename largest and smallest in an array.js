arr = [15, 10, 5, 25, 38]

let max = arr[0];
let min = arr[0];

for(i = 1; i < arr.length; i++){
  if(arr[i] > max){
    max = arr[i];
  }
  
  else{
    min = arr[i];
  }
}

console.log(max);
console.log(min);