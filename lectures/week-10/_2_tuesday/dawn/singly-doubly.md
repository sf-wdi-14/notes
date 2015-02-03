# Singly-Linked List and Doubly-Linked List

In computer science, a link-list is a data structure with a sequence of linked nodes. Each of these nodes, which can contain its own value with one or two pointers, occupy non-contiguous space in memory. Depending on the number of pointers, a link-list is considered a singly-linked list (one pointer) or a doubly-linked list (two pointers). In this lecture, we will implement both variants. 


#### Operations of a Singly-Linked List 
Our list will include two constructor: `Node` and `List`. Let us outline their operations. 

##### Node
  - `data`
  Stores a value

  - `next`
  Points to another node

##### List
  - `_length`
  Retrieves number of nodes in a list

  - `_head`
  Assign a node as the head of a list

  - `add`
  Add a node to a list

  - `remove`
  Remove a node from a list

  - `nodeAt`
  Search the value of a node in our list


#### Implementation of a Singly-Linked List 
We now have a conceptual model of a singly-linked list. For our implementation, we will create a `Node` first and then a `List`. 


`Node` is the simplier of the two constructors to implement. Each instance of a `Node` needs the ability to store data and the ability to point to the next node in the list. To add this functionality, we will create two properties: `value` and `next`, respectively. 

```javascript
var Node = function(value) {
  this.value = value; 
  this.next = null; 
} ;
``` 

Next, we need to implement a `List` and add two properties: `length` and `head`. The former is assigned the number of nodes in a list; the latter points to the `head` of the list--the node at the front of the list. Every instance of a `List` will be instantiated without any nodes in the list. For this reason, the initial value of `head` is `null`.  

```javascript 
var List = function() {
  this._length = 0; 
  this._head = null;     
};
```

#### `add`
Awesome, let us now implement the functionality to add nodes to a list. 

```javascript
List.prototype.add = function(value) {
  var node        = new Node(value), 
      currentNode = this._head;

  // empty list 
  if (!currentNode) {
    currentNode = node;
    this.length++;
    return node;    
  }

  while (currentNode.next) {
    currentNode = currentNode.next;  
  }

  currentNode.next = node;

  this._length++;
  return node;
};
```

Adding a node to our list involves many steps. Let us start from the beginning of our method. We use the argument of `add` to create a new instance of a `Node`, which is assigned to a variable named `node`. We also declare a variable named `currentNode` and initialize it to the `_head` of our list. If there are no nodes in the list, then the value of `head` is `null`.  

Next, we create an `if` statement. If our list is empty, then we assign `node` to `currentNode`, which is the `head` of our list. The length of our list is increased by one and we return `node`. If our list has a node assigned as `_head`, then the `if` statement is skipped. 

If we enter the `while` loop, the first iteration of the loop points to the value of `currentNode.next`. During every succeeding iteration of the `while` loop, we re-assign `currentNode` to the next node in the list. When we reached the end of the list--the value of ``currentNode.next` is `null`--we terminate the `while` loop. 

At this point, we have identified the last node of the list. We take this node, which is the current value of `currentNode`, and assign to its `next` property the node we created at the beginning of the method--`node`. 

The final steps of `add` is to update the value of `_length` by one and return `node`. 


#### `remove`
We can now add nodes to our list; the next logical step is to remove a node from a list. 

```javascript
List.prototype.remove = function(index) {
  var currentNode        = this._head, 
      count              = 0,
      message            = {failure: "Failure: non-existent node in this list.", 
                            success: "Success: removed node from list."},
      beforeNodeToDelete = null.
      nodeToDelete       = null;

  if (index === this._length || index < 0 || index >= this._length) {
    throw new Error(message.failure);  
  }

  if (index === 0) {
    this._head = currentNode.next;
    currentNode = null; 
  }

  while (count < index) {
    beforeNodeToDelete      = currentNode; 
    nodeToDelete            = currentNode.next;  
    
    currentNode = currentNode.next;
    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next; 
  nodeToDelete = null;

  return message.success;
};
```

Our implementation of `remove` involves three scenarios: 1) a non-existent index is passed as an argument; 2) an index of zero (`head` of a list) is passed as an argument; and 3) an existent index is passed as an argument. 

The first and second scenarios are the simpliest to handle. In regards to the first scenario, if a list is empty or a non-existent index is passed, an error will be thrown. The second scenario hanldes the case of an index referencing the head of a list: If this is the case, the value of `_head ` is re-assigned to `currentNode.next`. (At this point, the node that was the initial `_head` of our list has no reference to it. This means that this node will be garbage collected; in other words, the line `currentNode = null` is unnecessary but included to be explicit about what is occuring. )

The third scenario is the hardest to understand. The complexity stems from the neccesity of tracking two nodes during each iteration of a `while` loop. During each iteration of our loop, we track the node before the node to be deleted and the node to be deleted (determined via the index passed to `remove`). When our loop eventually reaches the node at the index we want to remove, the loop terminates. 


At this point, we hold references to two nodes: `beforeNodeToDelete` and `nodeToDelete`. Prior to deleting `nodeToDelete`, we must assign its value of `next` to the next value of `beforeNodeToDelete`. If the purpose of this step seems unclear, remind yourself that we have a list of linked nodes; just removing a node breaks the link from the first node of the list to the last node of the list. Finally, we can set the value of `nodeToDelete` to null--an unncessary step because there are no more references to it, but a step that is explicit--and return a message indicating success in removing a node.

#### `nodeAt(index)`
The final method we will create is named `nodeAt`. An argument named `index` is used to identify and return the node at that index in the list. 

```javascript
List.prototype.indexAt = function(index) {
  var currentNode = this.head,
      count       = 0,
      message     = {failure: "Failure: non-existent node in this list."};

  if (this._length = 0 || index < 0 || index >= this._length) {
    throw new Error(message.failure);  
  }


  while (count < index) {
    currentNode = currentNode.next;  
    count++;
  }

  return currentNode; 
};
```

`nodeAt` is similar yet easier to implement than `remove`. The first of two steps is to check our method against any cases of faiure: is the list empty, is `index` less than zero, or is the index greater than what is in the list? 

If the index passed to `indexAt` is existent in a list, then we reach the `while` loop. During each iteration, the loop re-assigns currentNode to the node at the corresponding index. after we identified the correct node, we break from the loop and use the `return` statement to return that node.   

#### Complete Implementation of a Singly-Linked List
The complete implementation of our list is here: 

```javascript
var Node = function(value) {
  this.value = value; 
  this.next = null; 
};

var List = function() {
  this._length = 0;     
  this._head = null;
};

List.prototype.add = function(value) {
  var node        = new Node(value), 
      currentNode = this._head;

  if (!currentNode) {
    currentNode = node;
    this.length++;
    return node;    
  }

  while (currentNode.next) {
    currentNode = currentNode.next;  
  }

  currentNode.next = node;

  this._length++;
  return node;
};

List.prototype.remove = function(index) {
  var currentNode        = this._head, 
      count              = 0,
      message            = {failure: "Failure: non-existent node in this list.", 
                            success: "Success: removed node from list."},
      beforeNodeToDelete = null.
      nodeToDelete       = null;

  if (this._length === 0 || index < 0 || index >= this._length) {
    throw new Error(message.failure);  
  }

  if (index === 0) {
    this._head = currentNode.next;
    currentNode = null; 
  }

  while (count < index) {
    beforeNodeToDelete      = currentNode; 
    nodeToDelete            = currentNode.next;  
    
    currentNode = currentNode.next;
    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next; 
  nodeToDelete = null;

  return message.success;
};

List.prototype.indexAt = function(index) {
  var currentNode = this.head,
      count       = 0,
      message     = {failure: "Failure: non-existent node in this list."};

  if (this._length === 0 || index < 0 || index >= this._length) {
    throw new Error(message.failure);  
  }


  while (count < index) {
    currentNode = currentNode.next;  
    count++;
  }

  return currentNode; 
};
```

## From Singly to Doubly
Awesome, our implementation of a singly-linked list is complete. We can now use a data structure that adds, removes, and searches nodes in a list that occupy non-contigous space in memory. At this moment, all of our operations begin from the beginning of a list to the end of a list. In other words, it is uni-directional. There may be instances where we want our operations to be bi-directional. If you considered this use case, then you have just described a doubly-linked list.

## A Doubly-Linked List
A doubly-linked list takes all the functionality of a singly-linked list and extends them for bi-directional movement in a list. In this section, we will maintain our focus primarily on the differences from a singly-linked list. 

[[use case: general]]
[[use case: web related]]

#### Operations of a Doubly-Linked List 
Our list will include two constructor: `Node` and `List`. Let us outline their operations. 

##### Node 
  - `data`
  Stores a value

  - `next`
  Points to another node

  - `previous`
  Points to another node

##### List
  - `_length`
  Retrieves number of nodes in a list

  - `_head`
  Assign a node as the head of a list

  - `_tail`
  Assign a node as the head of a list

  - `add`
  Add a node to a list

  - `remove`
  Remove a node from a list

  - `indexAt`
  Search the value of a node in our list

#### Implementation of a Doubly-Linked List 
Let write the code! 

For our implementation, we will create a constructor named `Node`:

```javascript
var Node = function(value) {
  this.value    = value;
  this.previous = null; 
  this.next     = null; 
};
``` 
To create the bi-directional movement of a doubly-linked list, we will need a property that points to a node in each of the directions: `previous` and `next`. 

Next, we need to implement a `List` and add three properties: `_length`, `_head`, and `_tail`. Unlike a singly-linked list, a doubly-linked list has a reference to both the begnning of a list and the end of a list. Since every instance of a `List` is instantiated without nodes, the default values of `_head` and `_tail` are set to `null`.

```javascript 
var List = function() {
  this._length = 0; 
  this._head   = null;     
  this_tail    = null;
};
``` 

Now it is time to explore the methods: `add`, `remove`, and `indexAt`. All of these methods were used for a singly-linked list; however, they must be rewritten for bi-directional movement. 

Let us start with `add`: 

#### `add`
```javascript
List.prototype.add = function(value) {
  var node = new Node(value), 
      head = this._head,
      tail = this._tail;

  if (this._lenght === 0) {
    head = node;
    tail = node; 
  } else {
    tail.next     = node; 
    node.previous = tail;
    tail          = node;  
  }

  this._length++;
  return node;
};
```

In this method, we have two scenarios. First, if a list is empty, then assign to its `head` and `tail` the node being added. Second, if the lis contains nodes, then find the tail of the list and assign to `tail.next` the node being added; likewise, we need to configure the new tail for bi-directional movement. In other words, we need to set `tail.previous` to the original tail. 

If `add` seems confusing, then prepare to be lost with `remove`! 

#### `remove`

```javascript
List.prototype.remove = function(index) {
  var currentNode        = this._head, 
      count              = 0,
      message            = {failure: "Failure: non-existent node in this list.", 
                            success: "Success: removed node from list."},
      beforeNodeToDelete = null.
      nodeToDelete       = null;

  if (this._length === 0 || index < 0 || index >= this._length) {
    throw new Error(message.failure);  
  }

  if (index === 0) {
    this._head = currentNode.next;

    if (!this._head) {
      this._tail = null; 
    } else {
      this._head.previous = null;  
    }
  } else if (index === this._length - 1) {
    this._tail      = this._tail.previous;
    this._tail.next = null;
  } else {
    while (count < index) {
      currentNode = currentNode.next;  
      count++;
    }

    beforeNodeToDelete = currentNode.previous;
    nodeToDelete       = currentNode;
    afterNodeToDelete  = currentNode.next;

    beforeNodeToDelete.next = afterNodeToDelete;
    afterNodeToDelete.previous = beforeNodeToDelete; 
    nodeToDelete = null;
  }

  return message.success;
};
```

`remove` handles four conditions: 

1. The index being passed to `remove` is non-existent. In this case, throw an error. 
2. The index being passed to `remove` is the head. If the new head is non-existent--our list had only one node--then we indirectly set our head to `null`; we need to also set our tail to `null` so that all pointers to the original head is removed. If the new head exists--there are more than one node in our list--then the value of the new head is correct. What remains is setting the value of `this._head.previous` to `null. This is important because it removes all pointers to the original head; moreover, the head of a list never has a value for previous--there are no nodes before the first node in a list. 
3. The index being passed to `remove` is the tail. The tail is re-assigned to the node prior to the tail; the new tail has no node after it and needs its value of `next` to be set to null. 
4. A lot is happening here, so I will focus on the logic more than the code. We break our while loop once `currentNode` is pointing to the node at the index bieng passed to `remove`. At this moment, we re-assign the value of `beforeNodeToDelete.next` to the node after `nodeToDelete` and, conversely, we re-assign the value of `afterNodeToDelete.previous` to the node before `nodeToDelete`. In other words, we remove pointers to the removed node and re-work the linking of the list.  


#### `indexAt`
The implementation for this method in a doubly-linked list is the same as a singly-linked list. If you forgot how to implement it, I included it below:  

```javascript
List.prototype.indexAt = function(index) {
  var currentNode = this.head,
      count       = 0,
      message     = {failure: "Failure: non-existent node in this list."};

  if (this._length === 0 || index < 0 || index >= this._length) {
    throw new Error(message.failure);  
  }


  while (count < index) {
    currentNode = currentNode.next;  
    count++;
  }

  return currentNode; 
};
```

### Conclusion
We have covered a lot of information in this lecture. If any of it appears confusing, read it again and experiment with the code. When it eventually makes sense to you, feel proud. You have just covered the mysteries of both a singly-linked list and a doubly-linked list. You can addd these data structures to your coding toolbelt! 
