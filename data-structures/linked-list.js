/**
 * Linked List
 *
 * List of elements called nodes
 *
 * Singly Linked List (Each node knows about the next node.)
 * Doubly Linked List (Each node knows about the previous node and next node.)
 */

// Each Node is stored somewhere else, not like array
// Not consecutive memory (Like Arrays)
const dll = [{ id: 1, name: 'Angelo', prev: null, next: 2 }, { id: 1, name: 'Evan', prev: 1, next: null }]

/**
 * With a linked List you cannot do dll[2]
 * The list is not a consecutive data structure. You need to traverse the list to find your Node
 *
 * The advantage is inserting data.
 * You need to only change the previous node, to point to your new Node.
 * And new node points to the previous Nodes Next Node.
 */

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class List {
  constructor() {
    this.head = new Node('head')
  }
  find(value) {
    let tmpNode = this.head
    while (tmpNode.value !== value) {
      tmpNode = tmpNode.next
    }

    return tmpNode
  }
  insert(where, value) {
    // Find the node
    let whereToInsert = this.find(where)
    // Create the new node. Setting its next to the Previous nodes next
    let newNode = new Node(value, whereToInsert.next)
    newNode //?
    whereToInsert.next = newNode
  }
  print() {
    let tmpNode = this.head
    while (tmpNode !== null) {
      console.log(tmpNode.value)
      tmpNode = tmpNode.next
    }
  }
}

let newList = new List()

newList.insert('head', 1)
newList.insert(1, 2)
newList.insert(2, 3)
newList.insert(1, 4)

newList.print() //?