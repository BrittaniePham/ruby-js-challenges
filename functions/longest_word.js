// Write a script that accepts a string as a parameter and
// finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longest_word(str) {
  var words = str.split(' ');
  var longest = words[0]
  
  for(var i = 1; i < words.length; i++) {
    if (longest.length < words[i].length){
      longest = words[i];
      console.log("longest: " + longest);
    } else if (longest.length === words[i].length) {
      longest = longest
      console.log("both " + longest + " and " + words[i] + " are longest")
    }
  }
  return longest;
}

console.log("The FINAL longest word is " + longest_word("I like cats and I'm extremely sleepy"))
