###### 3 of 5: `traverseBF()`
We've learned that DFS is a branch-depth approach to tree traversal. We'll now explore a depth-branch approach known as BDF. 

Look at the tree below to see how it would be traversed:

                 "one"               depth: 0
               /   |   \
          "two" "three" "four"       depth: 1
          /   \          /  \
      "five" "six"  "seven" "eight"  depth: 2

Here is the code to traverse a tree with BFS: 

```javascript
Tree.prototype.traverseBF = function(callback) {
  var queue = new Queue();
  queue.enqueue(this);
  
  currentTree = queue.dequeue();

  while(currentTree){
    for (var i = 0, length = currentTree.children.length; i < length; i++) {
     queue.enqueue(currentTree.children[i]);
    }

    callback(currentTree);
    currentTree = queue.dequeue();
  }
};
```

Our definition of `traverseBF` contains a lot of logic. For this reason, I'll explain the logic into managable steps: 

1. Create an instance of `Queue`.
2. Add the node that invoked `traverseBF` to the instance of `Queue`. 
3. Declare a variable named `currentNode` and initialize it to the `node` we just added to our queue. 
4. While `currentNode` points to a node, execute the code inside the `while` loop. 
5. Use a `for` loop to iterate on the children of `currentNode`.
6. Inside the body of the `for` loop, add every child to the queue. 
7. Take `currentNode` and pass it as an argument of `callback`. 
8. Re-assign `currentNode` to the node being removed from the queue. 
9. Until `currentNode` does not point to a node--every node in the tree has been visited--repeat steps from four to eight.

###### 4 of 5: `contains(traversal, data)`
We have created two methods to traverse a tree. To enable us to search a tree using either of these methods, we've designed `contains` to accept two arguments: the type of traversal and the data to search. 

```javascript
Tree.prototype.contains = function(traverse, callback) {
  traverse.call(this, callback);
};
```

In the body of `contains`, we use a method named `call` to pass `this` and `callback`. The first argument binds traverse to the node that invoked `contains`; the second argument represents code that will run against nodes in our tree. 

Imagine that we want to traverse every node in our tree with BFS and log to the console any nodes that contain data with an even number. This is the code we would write:

```javascript
// tree is an example of a root node
tree.contains(tree.traverseBF, function(node){
    if (node.data % 2) {
      console.log(node);
    }
});
```

###### 5 of 5: `remove(data)`
To complete our implementation of `Tree`, we will add a method named `remove`. Similar to removing a node from the DOM, this method will remove a tree and all of its children.

```javascript
Tree.prototype.remove = function(data) {
  var nodes        = null,
      nodeToRemove = null,
      index;

  this.traverseBF(function(node) {
    if (node.data === data) {
      if (!node.parent) {
        nodeToRemove = node;
        node         = null;
      } else {
        nodes        = node.parent.children;
        index        = findIndex(nodes, data);
        nodeToRemove = nodes.splice(index, 1);
      }
    }
  });

  return nodeToRemove;
};


function findIndex(arr, data) {
  var index;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].data === data) {
      index = i; 
    }
  }

  return index;
}
```

`remove` is very similar to `contains`. We pass as arguments the type of traversal and the data associated with the tree we want to find. If we find the tree, we remove it. 

#### Complete Implementation of a Tree
Our implementation of `Tree` is complete. Take a look, we've accomplished a lot: 

```javascript
var Tree = function(data) {
  this.data     = data;
  this.children = [];
};

Tree.prototype.add = function(data) {
  var child = new Tree(data);

  this.children.push(child);
};

Tree.prototype.traverseDF = function() {
  for (var i = 0, length = this.children.length; i < length; i++) {
    this.children[i].traverseDF();
  }

  console.log(this.data);
};

Tree.prototype.traverseBF = function(callback) {
  var queue = new Queue();
  queue.enqueue(this);
  
  currentTree = queue.dequeue();

  while(currentTree){
    for (var i = 0, length = currentTree.children.length; i < length; i++) {
     queue.enqueue(currentTree.children[i]);
    }

    callback(currentTree);
    currentTree = queue.dequeue();
  }
};

Tree.prototype.contains = function(traverse, callback) {
  traverse.call(this, callback);
};

Tree.prototype.remove = function(data) {
  var nodes        = null,
      nodeToRemove = null,
      index;

  this.traverseBF(function(node) {
    if (node.data === data) {
      if (!node.parent) {
        nodeToRemove = node;
        node         = null;
      } else {
        nodes        = node.parent.children;
        index        = findIndex(nodes, data);
        nodeToRemove = nodes.splice(index, 1);
      }
    }
  });

  return nodeToRemove;
};


function findIndex(arr, data) {
  var index;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].data === data) {
      index = i; 
    }
  }

  return index;
}; 
```

### Conclusion 
Trees simulate hierarchical data. Much of the world around us resembles this type of hiearchy, such as web pages and our families. Any time you find yourself in need of structuring data with hierarchy, consider using a tree. 
