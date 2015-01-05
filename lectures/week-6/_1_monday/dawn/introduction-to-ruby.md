# Introduction to Ruby

## Objectives
Students will be able to...

- Translate all key concepts they know from JavaScript into Ruby

# Link
Ruby is designed for programmer happiness. Its intuitive syntax makes it very easy to use and faster to write understandable, beautiful code. It can be used for all kinds of software development, but is largely used for web development, particulary within the framework Ruby on Rails.

# Educate and Engage

JavaScript code:

```javascript
// Variable declaration
var x = 1;

// Strings
var name = "Joe";
name + " foo";
name.length;

// Numbers
var age = 18;
var temp = 50.5;
// Division by integers can lead to floats

// Booleans
var truthy = true;
var falsey = false;
null;

// Arrays
var array = [1,2,3,4];

for (var i = 0; i < array.length; i++) {
	// array[i]
}

// Objects
var person = {
	name: 'Dennis',
	age: 123,
	children: [
		{
			name: 'Peter'
		}
	]
}

person.name
person.age
person.children[0].name

// Functions
var addNumbers = function(a, b) {
	return a + b;
}

function addNumbers(a, b) {
	return a + b;
}

// Conditionals
if (condition) {
	// ...
} else if (condition) {
	// ...
} else {
	// ...
}

// Blocks
var each = function(array, callback) {
	// loop through the array and execute callback
	// for each
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}

	return array;
};

each([1,2,3], function(a) {
	// do something with a
});

var addNumbers = function(a, b, callback) {
	var result = a + b;
	return callback(result);
};
```

Same concepts in Ruby:
```ruby
# Variable declaration
x = 1

# String
name = "Joe"
name + " foo"
name.length

# Numbers
# Division by integers will not lead to floats

# Booleans
thruthy = true
falsey = false
nilly = nil
# There is no undefined

# Arrays
array = [1,2,3]

# Hashes
person = {
	:name => 'Dennis',
	:age => 123,
	:children => [
		{
			:name => 'Peter'
		}
	]
}

person[:name]
person[:age]
person[:children].first[:name]

# Methods
def add_numbers(a = 1, b = 2)
	a + b
end

add_numbers
# => 3
add_numbers(2)
# => 4
add_numbers(2, 4)
# => 6

# Pass in any number of arguments with *
def foo(*args)
	# ... args is in array in here
end

# Conditionals
if condition
	# ...
elsif
	# ...
else
	# ...
end

# Blocks
[1,2,3].each do |a|
	# Do something with a here...
end

def add_numbers(a, b, &callback)
	result = a + b
	callback.call(result)
end

add_numbers(1, 2) do |result|
	# ...
end

# Procs
code = proc do |result|
	# ...
end

foo(1, 2, &code)
```

# Reflect
Check out this playlist on Ruby: https://www.thenewboston.com/videos.php?cat=50

# Now and Then
We will use Ruby a lot from here on out, especially once we introduce Ruby on Rails.
