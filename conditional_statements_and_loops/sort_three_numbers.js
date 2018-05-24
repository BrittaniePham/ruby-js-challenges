// Write a function using a conditional statement to sort 
// three numbers. Display an alert box to show the result.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

function sortNums(num1, num2, num3) {
  if(num1 > num2 && num1 > num3){
    if(num2 > num3){
      console.log(num1 + " " + num2 + " " + num3)
    } else {
      console.log(num1 + " " + num3 + " " + num2)
    }
  }
  
  if(num2 > num1 && num2 > num3){
    if(num1 > num3){
      console.log(num2 + " " + num1 + " " + num3)
    } else {
      console.log(num2 + " " + num3 + " " + num1)
    }
  }
  
  if(num3 > num1 && num3 > num2){
    if(num1 > num2){
      console.log(num3 + " " + num1 + " " + num2)
    } else {
      console.log(num3 + " " + num2 + " " + num1)
    }
  }
}

sortNums(0,-1,4)