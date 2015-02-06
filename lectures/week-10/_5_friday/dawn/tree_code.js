// Code for Queue
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
      
  // if (oldestTicketNumber === newestTicketNumber) {
  //   return 'Queue is empty';
  // }
  
  var deletedNode = this.storage[oldestTicketNumber];

  delete this.storage[oldestTicketNumber];

  this.oldestTicketNumber++;

  return deletedNode;
}; 

var Tree = function(data) {
  this.data     = data;
  this.parent   = null; 
  this.children = [];
};

Tree.prototype.add = function(data) {
  var node = new Tree(data);
  node.parent = this;
  this.children.push(node);
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


var tree = new Tree(1);
tree.add(2);
tree.add(3);
tree.add(4);

// tree.traverseBF(function(node) {
//   console.log(node);
// });

// Code for remove
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