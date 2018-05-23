// Write a script function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function alphabetical(string){
  var newWord = string.split("").sort().join("");
  console.log(newWord);
}

alphabetical("webmaster");