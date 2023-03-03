/*
- trees have hierarchial 
- parent child relationship
- ex: html files are like trees, family trees etc
-
*/

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root; //need to traverse this node
      while (true) {
        if (value < current.value) {
          // go left
          if (!current.left) {
            //if a left node === null
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          //go right
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  //have a reference to the node to traverse through
  //if the value is less then current move current left
  //if the value is greater then current move current right
  //if current is = to value return current node
  //iterates through divide and conquer
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current) {
        current = current.right;
      } else {
        current.value === value;
        return current;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(15), "look up");
// console.table(JSON.stringify(traverse(tree.root)))

// /////////////////////////////////////////////////
/*
BINARY HEAP:
- every child belongs to a parent node that has greater priority or value
- every node @ top level has a greater value than nodes on next level down
- used in priority queues
- left & right can be any value as lng as lower than highest parent

- lookup O(n)
- insert O(log N)
- delete O(log N)

- great for comparative evaluation
note:
memory heap != heap data structure
- take up less space possible 
- left to right insertion
- 
 */

/*
PRIORITY QUEUES:
- 
*/
//test out if code is working

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
// @ here Try to traverse a node through recursion
