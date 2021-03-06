/* Binary Search Tree */
/**
 * 
 * Binary tree
 * 
 * In Order Traversal
 * Pre Order Traversal
 * Post Order Traversal
 */
class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor(initData) {
    this.root = null
    if (Array.isArray(initData)) {
      initData.forEach(this.add.bind(this))
    }
  }
  searchTree(node, data) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data)
        return
      } else if (node.left !== null) {
        return this.searchTree(node.left, data)
      }
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new Node(data)
        return
      } else if (node.right !== null) {
        return this.searchTree(node.right, data)
      }
    } else {
      return null
    }
  }
  add(data) {
    const node = this.root
    // No root?
    if (node === null) {
      // Set the data as root.
      this.root = new Node(data)
      return
    } else {
      //node : Node, data: Init
      return this.searchTree(node, data)
    }
  }
  findMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }
  findMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }
  find(data) {
    let current = this.root
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }
  isPresent(data) {
    let current = this.root
    while (current) {
      if (data === current.data) {
        return true
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null
        }
        // node has no left child
        if (node.left == null) {
          return node.right
        }
        // node has no right child
        if (node.right == null) {
          return node.left
        }
        // node has two children
        var tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      } else if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else {
        node.right = removeNode(node.right, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1
    }
    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)
    if (left < right) {
      return left + 1 //?
    } else {
      return right + 1 //?
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1
    }
    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)
    if (left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }
  levelOrder() {
    let result = []
    let Q = []
    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        let node = Q.shift()
        result.push(node.data)
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }
}

const findMin = t => {
  let current = t.root
  while (current.left !== null) {
    current = current.left
  }
  return current.data
}

const findMax = t => {
  let current = t.root
  while (current.right !== null) {
    current = current.right
  }
  return current.data
}

const inOrder = (n) => {
  if (n.root == null)
    return
  else {
    const traverseNode = (n, res = []) => {
      // Check Left
      if (n.left) {
        traverseNode(n.left, res)
      }
      // If node has no LEFT, we push it to the result
      res.push(n.data)

      // Since no LEFT was found we try continue with the RIGHT NODE
      if (n.right) {
        traverseNode(n.right, res)
      }
      // If no LEFT and NO RIGHT are found we are DONE
      return res //?
    }

    return traverseNode(n.root, [])
  }
}

const preOrder = n => {
  if (n.root === null) {
    return null
  } else {
    const traversePreOrder = (n, r = []) => {
      r.push(n.data)
      if (n.left) {
        traversePreOrder(n.left, r)
      }
      if (n.right) {
        traversePreOrder(n.right, r)
      }
      return r
    }
    return traversePreOrder(n.root)
  }
}


// Starts from the left most outer node
const postOrder = n => {
  if (n.root == null) {
    return null
  }
  const traversePostOrder = (n, r = []) => {
    if (n.left) {
      traversePostOrder(n.left, r)
    }
    if (n.right) {
      traversePostOrder(n.right, r)
    }
    r.push(n.data)
    return r
  }

  return traversePostOrder(n.root)
}

const find = (n, data) => {
  let current = n.root
  while (current.data !== data) {
    if (data < current.data) {
      current = current.left
    } else {
      current = current.right
    }
    if (current === null) {
      return null
    }
  }
  return current.data
}


const bst = new BST([9, 4, 17, 3, 6, 22, 5, 7, 20])

// ******** BINARY TREE **********
//                9
//            /        \
//        4               17
//      /   \           /    \
//   3        6        20    22
//    \         \
//      5        7

