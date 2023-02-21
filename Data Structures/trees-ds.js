/*
- trees have hierarchial 
- parent child relationship
- ex: html files are like trees, family trees etc
-
*/

class Node {
    constructor(value){
        this.left = null
        this.right = null
        this.value = value 
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null 
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root == null){
             this.root = newNode
             return this
        } else{
            let current = this.root //need to traverse this node
            while(true){
                if(value < current.value){
                    // go left
                    if(!current.left){ //if a left node === null
                        current.left = newNode
                        return this
                    }
                    current = current.left
                } else {
                    //go right 
                    if(!current.right){
                        current.right = newNode
                        return this
                    }
                    current = current.right
                }
            }
        }
    }
    
    //have a reference to the node to traverse through
    //if the value is less then current move current left 
     //if the value is greater then current move current right
     //if current is = to value return current node 
    lookup(value){
        if(!this.root){
            return false
        }
        let current = this.root
        while(current !== null){ 
            if(value < current.value){
                current = current.left
            } else if(value > current){
                current = current.right 
            } else {
                (current.value === value)
                return current
            }
        }
            return false
     }

    // remove()
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(55), "look up")
// console.table(JSON.stringify(traverse(tree.root)))

//test out if code is working

function traverse(node){
    const tree = {value: node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}