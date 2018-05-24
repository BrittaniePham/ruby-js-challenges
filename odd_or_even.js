// Write a for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function odd_or_even() {
  var result
  for (var i = 0; i < 14; i++) {
    if(i % 2 === 0) {
      result = 'even';
    } else {
      result = 'odd';
    }
    console.log(i + " is " + result);
  }
}

odd_or_even();