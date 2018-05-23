// Write a script that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

function uppercase(str)
{
  var array = str.split(' ');
  var newArray = [];
    
  for(var i = 0; i < array.length; i++){
      newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
      // charAt(0) selects the 1st letter of array[i]
      // toUpperCase makes that one letter capitalized
      // + array[i].slice(1) selects the rest of the word and adds it to the capital letter
      // push (adds to the empty array)
  }
  return newArray.join(' ');
}
console.log(uppercase("the quick brown fox"));
