//Write a function that accepts two integers and displays the larger.

function larger(num1, num2) {
  var larger = 0
  
  if (num1 > num2) {
    larger = num1
  } else {
    larger = num2
  }
  console.log(larger)
}

larger(9,7)