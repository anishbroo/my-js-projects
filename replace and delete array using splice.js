let array1 = ["Ram", "Shyam", "Hari", "Sita", "Gita"];


let remove = array1.splice(1,2);
console.log("Original Array: " , array1);
console.log("Removed Array: ", remove);



let replace = array1.splice(1,0, "Saraswoti", "Biswa"); 
console.log("Replaced array: ", array1);