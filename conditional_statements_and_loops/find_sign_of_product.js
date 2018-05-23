// Write a function using a conditional statement to find the sign of the 
// product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

function sign(num1, num2, num3) {
  var sign
  var product = num1 * num2 * num3
  console.log("Product: " + product)
  
  if(product >= 0)
    sign = '+'
  else
    sign = '-'
    
  window.alert("The sign is " + sign)
}
sign(1,2,-3)