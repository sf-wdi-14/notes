# Javascript Primitives
Lecture on Javascript Basics!

## Objectives
Students will be able to...

- understand the difference between primitive types and reference types
- create and manipulate arrays and objects

## Agenda
* History of Javascript
* Understanding Data Types
  * Comments
  * Numbers
  * Strings
  * Values & Expressions
  * Objects everywhere
    * Arrays
    * Objects
  * Reference Types

  
#Quick Exercise
Pick one of the following topics and spend 5 minutes reasearching it:

* JS History: Who created Javascript? How old is the language?
* How has the popularity of JS changed over time?
* How is JS different from other programming languages?
* Javascipt vs. Java.  Is there a connection?


*** 

##Chrome Console - COMMAND + OPTION + J

## Comments

Comments come in two forms 

  * line comments
  
   ```
   // descriptive stuff
   ```
  * multiline comments
  
  ```
  /**
    These 
    are
    comments on
    many lines
  */
  
  ```
## Numbers 

Numbers are one of the *types* of **values** we want to be able to interact and play with in JS.

* Integers

  ```
   ..., -1,0, 2, 3, 4, 5, ... 
  ```
* Floats (or Decimal numbers)

  ```
   2.718, 3.14, .5, .25, etc
  ```

In JS these are the same **type** of object, which it calls *Numbers*, so if you know floats and integers, don't go looking for them.

## Strings

Strings are collections of letters and symbols known as **Characters**, and we use them to deal with words and text in Javascript. Strings are just another type of **value** in Javascript.

```
"John", or  'Jane'
```

We can access individual characters in a string like this:

```
"Rusty"[0]
	=> 'R'
"Rusty"[4] 
	=> 'y'
```


## Values and Expressions

Value types like `Number` or `String` are not very useful without being able to form **Expressions**

Try your favorite number operators

```
  1 + 1
  	=> 2
  2 - 1
  	=> 1
```
You can also create expressions with strings using addition

```
  "Hello, " + "world!"
 	 => "Hello, world!"
```

This is called **String Concatentation.**


### Special Number Operators

Javascript can be a little cheap with the number of operations it allows you to do. For example, how is someone supposed to square a number or cube a number easily? Luckily there is a special `Math` object with some very useful methods.

* Taking a number to some `power`? Then just use `Math.pow`

```
// 3^2 becomes
Math.pow(3,2)
=> 4
// 2^4 becomes
Math.pow(2,4)
=> 16
```
* Taking a square root

```
// √(4) becomes
Math.sqrt(4)
=> 2
```
* Need a `random` number? Then use `Math.random`.

```
// The following only returns a random decimal
Math.random()
=> .229375290430
/** 
  The following will return a 
  random number between 0 and 10
*/
Math.random()*10
```

* Since Numbers can be **Floats** or **Integers** we often want to get rid of remaining decimal places, which can be done using `Math.floor`.

```
// Remove the decimal
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3
```

## Variables and Keywords

What if we want to store these values?

```
var myNumber = 1;

var myString = "Greetings y'all!"
```

The main note to make here is that these variables should always have the `var` keyword and use `camelCase`

##Booleans

```
var isColtHilariousAndAwesome = true;
```

##Thought Exercise: toString()

*If you want to turn a number into a string you can use a helpful method called `toString`.

**Why does `1.toString()` throw an error, but `(1).toString` works?**


### Arrays 

Unfortunately, strings and numbers are not enough for most programming purposes.  We often need to store collections of data.

Arrays are great for:

* Storing data
* Enumerating over/through data
* Quickly reordering data 

Creating a new Array:


```
var friends = [];
//or
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`.

```
// First friend
var firstFriend = friends[0];
 => 'Moe'
// Get the last friend
var lastFriend = friends[2]
=> 'Curly'
```

### Strings are like Arrays

```
var friend = "bobby bottleservice";
// pick out first character
friend[0]
//=> 'b'
friend.length
```

###Reference Types

```
var a = 123
var b = a
a = 99
//what is b now???
```

```
var a = [1,2,3]
var b = a
a[0] = 99
//what is b now?
```
Variables hold the actual values of primitive types, but they hold only references to the values of reference types

### Exercises

1.) Find the last name in the following array:

```
var friends = [
                'Moe', 
                'Larry', 
                'Curly',
                'Jane',
                'Emma',
                'Elizabeth',
                'Elinor',
                'Mary',
                'Darcy',
                'Grey',
                'Lydia',
                'Harriet'
              ];
```

Add your name to the end of the `friends` and add another name to beginning. Change the `Elizabeth` to `Liz`.

**2.**) Go to MDN and lookup a way to sort the list of `friends`.

**3.**) Challenge Problem: Here's a list of `ages`

```
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

```

find the `median` age. Note: the median is the middle index of the sorted array. Don't use a loop!

4.) There are a list of names in a string, below. How could we sort them? Hint: use string and array methods.
 
```
var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";
```

5.) List all the `friends` above in reverse alphabetical order.

6.) We have two lists of friends below:

```
var myFriends = [
                  'Rickon',
                  'Meera',
                  'Hodor',
                  'Jojen',
                  'Osha',
                  'Rickard',
                  'Maester',
                  'Rodrik',
                  'Jory',
                  'Septa',
                  'Jon'
                ];

var yourFriends = [
                    'Bilbo',
                    'Boromir',
                    'Elrond',
                    'Faramir',
                    'Frodo',
                    'Gandalf',
                    'Legolas',
                    'Pippin'
                  ];
```

Write code to combine them into one sorted list.

7.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` is my second favorite, then how would you find the rank of another food. Try `Pho`. Hint: go to MDN to find an array method for finding the index of something in the array.


```

var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];

```


8.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

9.) My friends want to know what my `5`th to `10`th favorite foods are.  Write one line to retreive them.

10.) How would you create an array that efficiently stored the following information:

```
  'Moe' is 18
  'Larry' is 19
  'Curly' is 20
  'Jane' is 20
  'Emma' is 21
  'Elizabeth' is 18
  'Elinor' is 23
  'Mary' is 25
  'Darcy' is 24
  'Grey' is 18
  'Lydia' is 24
  'Harriet' is 18

```

### Objects

Why use objects to store `key` and `value` pairs? They are like arrays except that  data is not stored in any sorted order and keys do not have to numbered indexes. 

Think of a Dictionary.  You have a word that you need defined, you find it in the dictionary, and then you read the corresponding definition.  It's a Key/Value pair.

#### Creating


```
var friend = {name: "john"}

```

#### Accessing


```
friend[name]
```

### Exercise


1.) How would you represent the following using an object literal?

````

John, Doe, 36, 1234 Park st.

````
**(Hint: think in terms of firstname, lastname, age, address. Note that there's more than one way to store this data. Each with their own pluses and minuses.)**


2.) Using a combination of Objects and Array, how would you represent the following:


```
  Moe, Doe, 31, 1234 Park st.
  Larry, Doe, 36, 1234 Spark st.
  Curly, Doe, 36, 1239 Park st.
  Jane, Doe, 32, 1239 Spark st.
  Emma, Doe, 34, 1235 Spark st.
  Elizabeth, Doe, 36, 1234 Park st.
  Elinor, Doe, 35, 1230 Park st.
  Mary, Doe, 31, 1231 Park st.
  Darcy, Doe, 32, 1224 Park st.
  Grey, Doe, 34, 1214 Park st.
  Lydia, Doe, 30, 1294 Park st.
  Harriet, Doe, 32, 1324 Park st.

```

### Convenient Built-In Methods

* Strings
  * `split`, `join`
* Arrays
  * `.pop`, `.push`, `.concat`, `.slice`, `.reverse`

#Node

##Exercise: What is Node? Spend 5 minutes researching.

[Install it!](http://nodejs.org/download/)












