# Tree (Depth-First Search)

Trees are one of the most commonly used data structures in web development. This statement holds true for both developers and users. Every web developer who has written HTML and loaded it into a web browser has created a tree--which is referred to as the Document Object Model (DOM). Every user of the Internet who has, in turn, consumed information on the Internet has received it in the form of a tree--the DOM. 

Now, here's the climax: The article that you are reading at this moment is rendered in your browser as a tree! The paragraph that you are reading is represented as text in a `<p>` element; the `<p>` element is nested inside of a `<body>` element; and the `<body>` element is nested inside of an `<html>` element. 

The nestng of data is simiar to a family tree. The `<html>` element is a parent, the `<body>` element is a child, and the `<p>` element is a child of the `<body>` element. If this analogy of a tree seems useful to you, then you will find comfort in knowing that more analogies will be used during our implementation of a tree. 

In this lecture, we will create a tree using one of two methods of tree traversal: Depth-First Search (DFS). (If the word traversal is unfamiliar to you, consider it to mean visiting every part of the tree.) This type of traversal incorporates the use of a data structure that we've covered on Monday: A stack! That's cool!

## A Tree
In computer science, a tree is a data structure with hierarchical data. Each unit of data, which we will call a node, points to other nodes in a way that resembles hierarchy.

The terminology of nodes and pointers may be new to some readers, so let's describe them further with an analogy. Let's compare a tree to an organizational chart. The chart has a top-level position, such as CEO. Directly underneath this position are other positions, such as vice president (VP). To represent this relationship, we use arrows that point from the CEO to a VP. A person, such as the CEO, is a node; the relationship we create from a CEO to a VP is a pointer. To create more relationships in our organizational chart, we just repeat this process: We have a node point to another node. 

On a conceptual level, I hope that nodes and pointers make sense. On a practical level, we can benefit from using a more technical example. Let's consider the DOM. A DOM has an `<html>` element as its top-level position (root node). This node points to a `<head>` element and a `<body>` element. This process is repeated for all noodes in the DOM. 

One of the beauties of this design is the ability to nest nodes: a `<ul>` element, for instance, can have many `<li>` elements nested inside of it; moreover, each `<li>` element can have sibling `<li>` nodes. That's weird, yet funny and true!

#### Operations of a Tree
Since we now have a conceptual model of a tree, let us define the six operations of our tree:

- `add(data`)`
the ability to add a node

- `traverseDF()`
the ability to traverse nodes of a tree with DFS

- `traverseBF()`
the ability to traverse nodes of a tree with BFS

- `contains(traversal, data)`
the ability to search for a node

- `remove(node)`
the ability to remove a node

- `size`
the ability to retrieve the number of nodes  

#### Implementation of a Tree
Now let us write the code for a tree! 

##### Properties of a Tree
For our implementation, we will create a constructor named `Tree`. Each instance of a `Tree` will have two properties: `data` and `children`. 

```javascript
var Tree = function(data) {
  this.data     = data;
  this.children = []; 
};
```

When an instance of `Tree` is instantiated, two things happen. First, the data being passed as an argument of `Tree` is assigend as the data for the instance of `Tree`. Second, the instance of `Tree` is provided a property named `children` and it points to an empty array literal. 

The properties of `Tree` may seem uninteresting, but they provide all the functionality we need to create hierarchical data. For this reason, I want to use example data to confirm that we all understand what happens when an instance of `Tree` is instantiated. 

Imagine that we create an instance of `Tree` and pass it an argument of "CEO." Our new instance of `Tree` will be an object with "CEO" for its `data` and an empty array for its `children`.

```javascript
var tree = new Tree("CEO");

// "CEO"
tree.data;

// []
tree.children;
```

##### Methods of a Tree
Next, we will create the following methods: 

1. `add(data)`
2. `traverseDF()`
3. `traverseBF()`
4. `contains(traversal, data)`
5. `remove()`

###### 1 of 5: `add(data)`
Let's implement `add` and then discuss its implementation. 

```javascript
Tree.prototype.add = function(data) {
  var child = new Tree(data);

  this.children.push(child);
};
```

In the body of `add`, we have two lines of code. On the first line of code, we declare a variable named `child` and we initalize it to an instance of `Tree`. On the second line of code, we add `child` to the `children` property of the current tree, which is determined via `this`. 

Let's use some example data to see how this would work:
```javascript 
// {data: "CEO", children: []}
var tree = new Tree("CEO"); 

tree.children.add("VP");
```

```javascript
var Tree = function(position) {
  this.data     = position;
  this.children = []; 
};

Tree.prototype.add = function(position) {
  var child = new Tree(position);
  this.children.push(child);
};


var tree = new Tree("CEO");
tree.add("VP of Happiness");
tree.add("VP of Finance");
tree.add("VP of Sadness");

var finance = tree.children[1];
finance.add("Director of Kittens");
tree.children[1].children[0].add("Manager of Kittens")

                      "CEO"
                     /  |   \
              "VPH"   "VPF"  "VPS"
                        |   
               "Director of Kittens" 
                        |   
               "Manager of Kittens"  
```

###### 2 of 5: `traverseDF()`
We can add nodes to our tree, but we are unable to search for the existence of a specific node. Let's now implement one of two search patterns (tree traversals) known as DFS. 

```javascript
Tree.prototype.traverseDF = function() {
  for (var i = 0, length = this.children.length; i < length; i++) {
    this.children[i].traverseDF();
  }

  console.log(this.data);
};
```

Focus your attention on the `for` loop. We are iterating on every child of a tree; moreover, during each iteration we are invoking `traverseDF`! We have, in other words, just met the definition of recursion--self-invocation and self-termination. 

(Recursion is a very hard concept to understand and reqiures a lot of time to understand. For this reason, I would suggest experimenting with our current implementation of `traverseDF` and trying to understand to a degree how it works.)

As always, let's use create an example input and output to reinforce what we are describing. 

```javascript
var tree = new Tree("one");
tree.add("two");
tree.add("three");
tree.add("four");
tree.children[0].add("five");
tree.children[0].add("six");

// creates the following tree
                 "one"
               /   |   \
          "two" "three" "four"
          /   \
      "five" "six"

tree.traverseDF();
// "five"
// "six"
// "two"
// "three"
// "four"
// "one"
```
