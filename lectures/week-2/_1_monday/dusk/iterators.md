# Iterators
Lecture on JavaScript iterators.

# Objective
Students will be able to...

- Understand the benefits of iterators over loops
- Apply iterators for the right use cases
- Write tests for their own iterators
- Write their own iterators

# Link
We know how to iterate over a JS array:

```javascript
var array = [1, 2, 3]

for(var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

The result is:

```javascript
1
2
3
```

More abstractly speaking, we pattern looks as follows:

```javascript
// Begin loop to iterate over the array
  // Operation inside the loop for each
// Close loop
```

The operation inside the for loop could be any of the following, including but not limited to:

- Perform a calculation on each element of the array, and return the array (keyword `each`)
- Perform a calculation on each element of the array, and return a new array with the results (keyword `mapping`)
- Reduce all values of the array to a single value (keyword `reduce`)
- Flatten a nested array (keyword `flatten`)
- Find the last element of an array (keyword `last`)
- Find the first element of an array (keyword `first`)
- Find the index of an element in an array (keyword `indexOf`)
- Return only the unique elements of the array (keyword `uniq`)

For each of these use cases, we will write our own methods that are syntactically better seem much closer to the English language than the somewhat cryptic `for` loop.

# Active Learning
Check out [this repo](https://github.com/sf-wdi-14/iterators).

# Reflect
Answer the following questions in the group:

1. What is the advantage of using our own, custom iterators over always `for`?
2. What other use cases could you come up with that we could write our own methods for?

# Now and Then
Understanding iterators can be one of the hardest parts of learning how to program for the first time. Now that we have already written our own iterators, our knowledge has become much stronger. From here on out, iterators will always be your friend. The same concepts are built into other languages such as Ruby, so learning those languages will now be much easier for you.
