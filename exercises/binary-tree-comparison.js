/*
 * Binary tree
 *
 * In Order Traversal
 * Pre Order Traversal
 * Post Order Traversal
 * 
 * Consider reviewing common algorithms such as traversals, 
 * divide and conquer, breadth-first search vs. depth-first search and 
 * understand the tradeoffs for each. 
 * Knowing the run-times, theoretical limitations, 
 * and basic implementation strategies of different classes of algorithms 
 * is more important than memorizing the specific details of any given algorithm.
 */

// https://www.youtube.com/watch?v=7lbwfkCfNQ4


const a = [5, 1, 3, 6, 7]
const b = [3, 1, 5, 6, 7]


class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}


