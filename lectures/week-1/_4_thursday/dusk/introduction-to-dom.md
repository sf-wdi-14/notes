# An Introduction to the DOM
A lecture introducing the DOM.

# Objectives
Students will be able to...

- describe the purpose of the DOM
- perform CRUD operations on the DOM
- add and remove event listeners on the DOM
- manipulate the DOM of a website

# Link
Every major web browser--Safari, Chrome, Opera, Firefox, and IE—-has an implementation of the DOM; in turn, every web developer would benefit from having an introduction to it. 

# Educate and Engage 

## Describe the DOM
In a sentence, we can say that the DOM is a programmatic interface for a document.

## Perform CRUD Operations
```javascript
// create an element
document.createElement('div');

// read an element
document.querySelector('div');

// update an element
document.querySelector('div').textContent = "I'm updated text."

// delete an element
document.querySelector('div').remove();
```

## Add and Remove Event Listeners
```javascript
// add an event listener
element.addEventListener("click", myFunction);
```

```javascript
// remove an event listener
element.removeEventListener("click", myFunction);
```

## Manipulate the DOM
Use CRUD operations from the DOM API and start changing the Internet!