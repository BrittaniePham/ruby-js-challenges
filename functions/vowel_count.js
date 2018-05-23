// Write a script that accepts a string as a parameter and
// counts the number of vowels within the string.

// Note : As the letter 'y' can be regarded as both a vowel 
// and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function vowelCount(str) {
  var array = str.split("")
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  var count = 0
  
  for(var i = 0; i < array.length; i++) {
    if (vowels.includes(array[i])) {
      count++
    }
  } 
  console.log(count)
}

var sentence = "I'm sleepy all of the time"

vowelCount(sentence)
