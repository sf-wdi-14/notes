# An Introduction to Inheritance and Prototypes
A lecture introducing inheritance and prototypes in JavaScript. 

# Objectives
Students will be able to...

- describe the purpose of inheritance
- describe the look-up process
- describe what’s a prototype
- use prototypes without constructors
- use constructors 
- use prototypes with constructors

# Link
Inheritance is a form of code re-use; in JavaScript, inheritance is implemented with a prototype named "prototype."

# Educate and Engage 

## Describe the Purpose of Inheritance
In a sentence, we can say that inheritance is a form of code re-use. 

## Describe the look-up process
The look-up process is used to search for properties and methods through a sequence of well defined steps. 

## Describe What’s a Prototype
A prototype is a property created on objects. Through the use of prototypes, JavaScript implements its own version of inheritance. 

## Use Prototypes without Constructors
```javascript
// without a maker function
var inheritedMethods = {
  first:  "I'm on the prototype",
  second: "I'm also on the prototype"	
};

var cat  = Object.create(inheritedMethods);
cat.name = "Garfield";
```

```javascript
// with a maker function
var inheritedMethods = {
  first:  "I'm on the prototype",
  second: "I'm also on the prototype"	
};

var makeCat = function() {
  var cat  = Object.create(inheritedMethods);
  cat.name = "Garfield"; 
  return cat;
};

var cat1 = makeCat();
```


## Use Constructors 
```javascript
var Cat = function(name) {
  // this = Object.create();
  this.name = name;
  // return this;
};

cat_1 = new Cat("Garfield");
```
## Use Prototypes with Constructors

```javascript
var Cat = function(name) {
  // this = Object.create();
  this.name = name;
  // return this;
};

Cat.prototype.sayHi = function() {
  return "Hi, I'm on the prototype";	
};

Cat.prototype.sayHiAgain = function() {
  return "I'm on the prototype, too";	
};

cat_1 = new Cat("Garfield");
```