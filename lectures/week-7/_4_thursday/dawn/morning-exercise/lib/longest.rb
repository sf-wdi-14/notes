def longest_word(string)
  # Split words into a sentence
  words = string.split(" ")
  # Map each word's length to a new array
  words.max do |a, b|
    a.length <=> b.length
  end
end