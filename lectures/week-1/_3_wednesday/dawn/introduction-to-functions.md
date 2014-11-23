# Functions in JavaScript
A lecture introducing functions in JavaScript.

# Objectives
Students will be able to...

- Describe the concept of a function in a sentence
- Create and invoke a function 
- Use the keyword <code>return</code> 
- Use parameters and arguments for adding dynamic behavior

# Link
If anyone has experience with JavaScript or at least heard about it, you’ve probably learned that functions play a fundamental role in the language. If you’re able to acquire a strong understanding of functions, then you’ll take a long step towards mastering JavaScript.

# Educate and Engage 
## Describe a Function 
A function is a sequence of instructions (statements) that achieve a specific task. 

## Create and Invoke a Function

```javascript
// create a function
var myFunction = function() {
  console.log("I'm a function");	
};

// invoke the function
// "I'm a function"
var myFunction();
```

## Use the keyword `return`

```javascript
// exclude keyword return
var myFunction = function() {
  console.log("I'm a function");	
};

// "I'm a function"
// undefined
var myFunction();
```

```javascript
// include keyword return
var myFunction = function() {
  console.log("I'm a function");
  return "myFunction is defined"	
};

// "I'm a function"
// "myFunction is defined"
var myFunction();
```

```javascript
// include keyword return on first line
var myFunction = function() {
  return "myFunction is defined"	
  console.log("I'm a function");
};

// "myFunction is defined"
var myFunction();
```
## Use parameters and arguments

```javascript
// use a parameter and argument
var myFunction = function(param_1) {
  console.log(param_1);	
};

// undefined
myFunction();

// "hello"
myFunction("hello");
```

```javascript
// use two parameters and two arguments
var myFunction = function(param_1, param_2) {
  console.log(param_1 + " " + param_2);	
};

// "Hello undefined"
myFunction("hello");

// "Hello Cho"
myFunction("hello", "Cho");
```

```javascript
// use no parameters
var myFunction = function() {
  console.log(arguments[0] + " " + arguments[1]);	
};

// "Hello undefined"
myFunction("hello");

// "Hello Cho"
myFunction("hello", "Cho");
```