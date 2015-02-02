# Stack and Queue

Two of the most commonly used data structures in web development are stacks and queues. Many users of the Internet, as well as web developers, are unaware of this amazing fact. If you are one of these developers, then prepare yourself for two enlightening examples: the 'undo' operation of a text editor uses a stack to organize data; the event-loop of a web browser, which handles events (clicks, hoovers, etc.), uses a queue to process data.

Now pause for a moment and imagine how many times we, as both a user and developer, use stacks and queues. That is amazing, right?  Due to their ubiquity and similarity in design, I have decided to introduce you to data structures with them. 

## A Stack
In computer science, a stack is a linear data structure. If this statement holds marginal value to you, as it originally did with me, consider this alternative: A stack organizes data into sequential order. 

This sequential order is commonly described as a stack of dishes at a cafeteria. When a plate is added to a stack of dishes, the plate retains the order of when it was added; moreover, when a plate is added, it is pushed towards the bottom of a stack. Every time we add a new plate, the plate is pushed towards the bottom of the stack, but it also represents the top of the stack of plates. 

This process of adding plates will retain the sequential order of when each plate was added into the stack. Removing plates from a stack will also retain the sequential order of all plates. If a plate was removed from the top of a stack, every other plate in the stack would still retain the correct order in the stack. What I am describing, possibly with too many words, is how plates are added and removed at most cafeterias! 

To provide a more technical example of a stack, let us recall the 'undo' operation of a text editor. Every time text is added to a text editor, this text is pushed into a stack. The first addition to the text editor represents the bottom of the stack; the most recent change represents the top of the stack. If a user wanted to undo the most recent change, the top of the stack is removed. This process can be repeated until there are no more additions to the stack, which is a blank file!  

#### Operations of a Stack
Since we now have a conceptual model of a stack, let us define the two operations of a stack:

- `push`  
the ability to add data

- `pop`  
the ability to remove (the most recently added) data 

#### Implementation of a Stack
Now let us write the code for a stack! 

##### Properties of a Stack
For our implementation, we will create a constructor named `Stack`. Each instance of a `Stack` will have two properties: `size` and `storage`. 

```javascript
var Stack = function() {
  this.size = 0;
  this.storage = {};
};
```

`storage` enables each instance of a `Stack` to have its own container for storing data; `size` represents the number of times data was pushed to the current version of the stack. If a new instance of a `Stack` was created and data was pushed in its container, then the size of the stack would be one. If data was pushed, again, into the stack, the size would be two. If data was removed from the stack, then the size would decreased to one. 

##### Methods of a Stack
Next, we need the ability to `push` (add) data onto a stack and `pop` data from the top of a stack. 

###### `push` (1 of 2)
Let's start with `push`. Since the `push` method can be shared among all instances of `Stack`, we will add it to `Stack`'s prototype. 

```javascript
Stack.prototype.push = function(data) {
  // add data to a stack's storage
};
```

To complete our implementation of `push`, we need to complete three objectives: 

1. increase the size of our storage
2. maintain the order of added data
3. add the data to our storage

```javascript
Stack.prototype.push = function(data) {
  // increase the size of our storage
  var size = this.size++;
  
  // assign size as a key of storage
  // assign data as the value of this key
  this.storage[size] = data;
};
```

We have written our implementation of `push` with a clever design. The size of a stack provides us a way to add linear information to the data being added to our stack. If our stack had data pushed to it five times, then the size of the stack would be five. The first push to the stack would assign that data a key of one in `storage`. In turn, the fifth push to the stack would assign that data a key of five to `storage`. We have just assigned order to our data! 

###### `pop` (2 of 2)
The next step is to `pop` (remove) data. Let us recall that popping data is not simply removing data; it is removing only the most recently added data. 

For `pop`, here are our objectives:

1. get the most recently added data via `size`
2. delete the most recently added data
3. decrement `size` by one

```javascript
Stack.prototype.pop = function() {
  var size = this.size;

  delete this.storage[size];

  this.size--;
};
``` 

Our implementation of `Stack` currently works for the following use case. When we `push` data to a stack, it increases the size of the stack by one. If we `pop` data from our stack, we decrease `size` by one. 

A problem arises, however, when we attempt to `pop` data before we `push` data to our stack. In other words, if we `pop`, `push`, and `pop`, the size of our stack would incorrectly be zero! Instead, the size of our stack should be one. To handle this use case, we will add a conditional to `pop` that will return a message stating that the stack is empty when a stack's size is zero. 

```javascript
Stack.prototype.pop = function() {
  var size = this.size;

  if (size === 0) {
    return 'Stack is empty';
  }

  delete this.storage[size];

  this.size--;
}; 
```

#### Complete Implementation of a Stack
Our implementation of `Stack` is complete. If we invoke `pop` or `push`, our code still works!

Here is the final version of our code: 

```javascript
var Stack = function() {
  this.size = 0;
  this.storage = {};
};

Stack.prototype.push = function(data) {
  var order = this.size++;
 
  this.storage[order] = data;
};

Stack.prototype.pop = function() {
  var recent = this.size;

  if (recent === 0) {
    return 'Stack is empty';
  }

  delete this.storage[recent];

  this.size--;
}; 
```

## From Stack to Queue
A stack is useful when we want to add data in sequential order and remove data. Based on its definition, a stack can remove only the most recently added data. What happens if we want to remove the oldest data? We want to use a data structure named queue. 

## A Queue
Similar to a stack, a queue is a linear data structure. Unlike a stack, a queue deletes only the oldest added data.  

To help readers conceptualize how this would work, let's take a moment to use an analogy. Imagine a queue being very similar to the ticketing system of a deli. Each customer takes a ticket and is served when their number is called. The customer who takes the first ticket should be served first. Let us further imagine that this ticket has the number "one" displayed on it. The next ticket has the number "two" displayed on it. The customer whom takes the second ticket will be served second.  

(If our ticketing system operated like a stack, the customer who entered the stack first would be the last to be served!)

A more practical example of a queue is the event-loop of a web browser. As different events are being triggered, such as the click of a button, they are added to an event-loop's queue and handled in the order they entered the queue. 

#### Operations of a Queue 
Since we now have a conceptual model of a queue, let us define its operations. As you will notice, the operations of a queue are very similar to a stack. The difference lies where data is removed. 

#### Operations of a Queue 
- `enqueue`  
the ability to add data

- `dequeue`  
the ability to remove (the oldest added) data 


#### Implementation of a Queue
Now let us write the code for a queue! 

##### Properties of a Queue
For our implementation, we will create a constructor named `Queue`. We will then add three properties: `oldestTicketNumber`, `newestTicketNumber`, and `storage`. The need for both `oldestTicketNumber` and `newestTicketNumber` will become clearer during the next section.  

```javascript
var Queue = function() {
  this.oldestTicketNumber = 1;
  this.newestTicketNumber = 1;
  this.storage = {};
};
```

##### Methods of a Queue
We will now create the three methods shared amongst all instances of a queue: `size`, `enqueue` and `dequeue`. I will outline the objectives for each method, reveal the code for each method, and then explain the code for each method. 

###### `size` (1 of 3)
This method must met two requirements: 

1. return the current size of the queue
2. retain the correct keys of a queue (ticket numbers) 

```javascript
Queue.prototype.size = function() {
  
  return this.newestTicketNumber - this.oldestTicketNumber;
};
```

Implementing `size` may appear trivial, but you will quickly find that to be untrue. To understand why, we must quickly revisit how  `size` was implemented for a stack. 

Using our conceptual model of a stack, let's imagine that we push five plates onto a stack. The size of our stack is five and each plate has a number associated with it from one (first added plate) to five (last added plate). If we remove three plates, then we have two plates. We can simply subtract three from five to get the correct size, which is two. Here's the most important point about the size of a stack: The current size represents the correct number associated with the plate at top of the stack (two) and the other plate in the stack (one). 

Now, let's apply this implementation of stack's `size` to our queue. Let's imagine that five customers take a ticket from our ticketing system. The first customer has a ticket displaying the number one and the fifth customer has a ticket displaying the number five. With a queue, the customer with the first ticket is served first. 

Let's imagine that the first customer is served and that this ticket is removed from the queue. Like a stack, we can get the correct size of our queue from subtracting one from five. Our queue currently has  four tickets left unserved. Now, this is where a problem arises: the size no longer represents the correct ticket numbers. If we simply subtracted one from five, we would have a size of four. We cannot use four to determine the current range of remaining tickets in the queue. Do we have tickets in the queue with the numbers from one to four? Do the tickets have numbers two from five? The answer is unclear. 

This is why we need the following two properties in a queue: `oldestTicketNumber` and `newestTicketNumber`. All of this may seem confusing--I'm still occasionally confused. What helps me rationalize everything is the following example I developed.

Imagine that our deli has two ticketing systems: 

1. `newestTicketNumber` represents a ticket from a customers' ticketing system.
2. `oldestTicketNumber` represents a ticket from an employees' ticketing system.

Here's the hardest concept to grasp in regards to having two ticketing systems: When the numbers in both systems are identical, every customer in the queue has been addressed and the queue is empty. We will use the following scenario to reinforce this logic: 

1. A customer takes a ticket. The customer's ticket number, which is retrieved from `newestTicketNumber`, is one. The next ticket available in the customer ticket system is two. 
2. An employee does not take a ticket. The employee does not have a ticket, and the current ticket in the employee ticket system is one. 
3. We subtract the current ticket number in the customer's system (two) with the number from the employee's system (one) and get the number one. The number one represents the number of tickets still in the queue that have not been removed. 
4. The employee takes a ticket from their ticketing system. This ticket represents the customer ticket being served. The ticket that was served is retrieved from `oldestTicketNumber`, which displays the number one. 
5. We repeat step four, and now the difference is zero--there are no more tickets in the queue!

We now have a property (`oldestTicketNumber`) that can tell us the oldest number in the queue and a property (`newestTicketNumber`) that can tell us the largest number assigned in the queue.  

We have adequately explored `size`, so let's now move to `enqueue`. 

###### `enqueue` (2 of 3)
For `enqueue`, We have two objectives:

1. use `newestTicketNumber` as a key of `storage` and use any data being added as the value of that key.
2. increment the value of `newestTicketNumber` by one.

Based on these two objectives, we can will create the following implementation of `enqueue`: 

```javascript
Queue.prototype.enqueue = function(data) {
  var newestTicketNumber = this.newestTicketNumber;
  
  this.storage[newestTicketNumber] = data;

  this.newestTicketNumber++;
};
```

Our code starts with the declaration of a variable named `newestTicketNumber` and its initialization to `this.newestTicketNumber`. If we created a new instance of a `Queue` and invoked `enqueue` for the first time, the value of `this.newestTicketNumber` is one. We then use `newestTicketNumber` as a key of `storage` and assign to this key `data`. Finally, we increment the value of `newestTicketNumber` by one. 

Next, lets define the objectives of `dequeue`:

1. remove the oldest data 
2. increment by one `oldestTicketNumber`

```javascript
Queue.prototype.dequeue = function() {
  var oldestTicketNumber = this.oldestTicketNumber;
  
  delete this.storage[oldestTicketNumber];

  this.oldestTicketNumber++;
};
```

We declare a variable named `oldestTicketNumber` and initialize it to `this.oldestTicketNumber`. (Do not forget that the value of `this.oldestTicketNumber` always starts as one.) Next, we search for any data stored in `this.storage` at `oldestTicketNumber`. In other words, `this.storage[1]`; moreover, we `delete` the data associated with that key. Finally, we increment the value of `this.oldestTicketNumber` by one. 

Similar to the problem our first implementation of a stack's `pop` method, our implementation of `dequeue` does not handle situations were data is removed before any data is added to our data structure. In turn, we need to create a conditional to handle this use case: 

```javascript
Queue.prototype.dequeue = function() {
  var oldestTicketNumber = this.oldestTicketNumber, 
      newestTicketNumber = this.newestTicketNumber;
  		
  if (oldestTicketNumber === newestTicketNumber) {
    return 'Queue is empty';
  }

  delete this.storage[oldestTicketNumber];

  this.oldestTicketNumber++;
}; 
```

Our `if` statement has two components. The first component is the return value, which is invoked when both values (ticketing systems) contain the same number. The second component is our conditional, which is less straightforward. To us our running analogy of a deli with two ticketing systems, an employee cannot remove a ticket from the queue if the employee has not taken a ticket with that number. How does an employee handle a customer with ticket number one if no customer has taken a ticket with the number one? The employee can't do this. 

#### Complete Implementation of a Queue
Our implementation of a queue is complete. Let's view the entire code: 

```javascript
var Queue = function() {
  this.oldestTicketNumber = 0;
  this.newestTicketNumber = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  
  return this.newestTicketNumber - this.oldestTicketNumber;
};

Queue.prototype.enqueue = function(data) {
  var newestTicketNumber = this.newestTicketNumber;
  
  this.storage[newestTicketNumber] = data;

  this.newestTicketNumber++;
};

Queue.prototype.dequeue = function() {
  var oldestTicketNumber = this.oldestTicketNumber, 
      newestTicketNumber = this.newestTicketNumber;
      
  if (oldestTicketNumber === newestTicketNumber) {
    return 'Queue is empty';
  }

  delete this.storage[oldestTicketNumber];

  this.oldestTicketNumber++;
}; 
```

### Conclusion 
In this lecture, we've explored two linear data structures: stacks and queues. A stack stores data in sequential order and removes the most recently added data; a queue stores data in sequential order but removes the oldest added data. 

If the implementation of these data structures seem trivial, remind yourself of the purpose of data structures. They are designed to help organize data--not to be complex. In this context, if you find yourself with data that needs to be organized in sequential order, consider using a stack or queue. 