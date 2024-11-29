function checkPalindrome(){
  let str1 = "racecar";
  
  let splitString = str1.split("");
  
  let reverseString = splitString.reverse();
  
  let joinString = reverseString.join("");
  
  if (joinString === str1){
    console.log("Palindrome");
  }
  else{
    console.log("Not palindrome");
  }
}

checkPalindrome();