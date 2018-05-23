
def palindrome_checker
  puts "Please enter a word to see if it's a palindrome: "
  word = gets.strip.downcase.delete(" ").split("")
  cloned = word.clone
  reversed = []
  cloned.size.times {reversed << cloned.pop}
  reversed.join

  if word == reversed
    puts "\nyes, this is a palindrome"
  else
    puts "\nno, this is not a palindrome"
  end

  puts
  again_or_quit
end

def again_or_quit
  puts "1)Try again or 2)quit?"
  choice = gets.to_i
  if choice == 1
    palindrome_checker
  elsif choice == 2
    puts "Goodbye!"
    exit
  else
    not a valid option
    again_or_quit
  end
end

palindrome_checker
