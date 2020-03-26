// Binary Search tree
// Can only have 2 branches for every node.
// Binary search trees are Ordered

// Left: Less than or equal to parent node. 
// Right: Greater than or equal too parent node



// Depth First Traversal

// Start at top, follow each branch to the bottom

// Breadth First Traversal
// Start at the top, go through each level, left to right


// Code:

// As we touch each node on the tree we can run some function

// Recursion:

class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

// Binary Search Tree
class BST {
  constructor(initData) {
    this.root = null;
    if (Array.isArray(initData)) {
      initData.forEach(this.add.bind(this));
    }
  }
  // RECURSIVE
  searchTree(node, data) {
    // This is our first node
    if (data < node.data) {
      // We check the left node, to try and insert it. 
      // If the left node is null
      if (node.left === null) {
        // We insert it
        node.left = new Node(data);
        return;
      } else if (node.left !== null) {
        // We continue searching down the tree to see where to put the node
        return this.searchTree(node.left, data);
      }
    } else if (data > node.data) {
      // We check the right node, to try and insert it. 
      // If the right node is null
      if (node.right === null) {
        // We insert it
        node.right = new Node(data);
        return;
      } else if (node.right !== null) {
        // We continue searching down the tree to see where to put the node
        return this.searchTree(node.right, data);
      }
    } else {
      return null;
    }
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      return this.searchTree(node, data);
    }
  }
  // All the way on the left side of the Tree
  findMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }

    return current.data
  }
  // All the way on the right side of the Tree
  findMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }

    return current.data
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }
  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        };
        if (node.right != null) {
          Q.push(node.right);
        };
      };
      return result;
    } else {
      return null;
    };
  }
}

const bst = new BST([9, 4, 17, 3, 6, 22, 17, 5, 7, 20]);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());