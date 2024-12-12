//naming conflicts
function fun1(){
  const val1 = 8;
  function fun2(val1){
    return val1 * 10;
  }
  return fun2;
}

console.log(fun1()(5));



function fun(){
  console.log("This is conflict.");
}

function fun(){
  console.log("Conflict happened.");
}

fun();