// binary search tree

const Node = require('./node');

class BST {
    constructor(){
        this.root = null;
    }

    add(data) {
        if(this.root === null) {
            this.root = new Node(data);
            return;
        } else {
            const search = (passedNode) => {
                if(data < passedNode.data) {
                    // go to left
                    if(passedNode.left === null) {
                        passedNode.left = new Node(data)
                    } else {
                        search(passedNode.left);
                    }
                } else if(data > passedNode.data) {
                    // go to the right
                    if(passedNode.right === null) {
                        passedNode.right = new Node(data)
                    } else {
                        search(passedNode.right);
                    }
                } else {
                    // data already in the tree
                    return null;
                }
            }
            return search(this.root);
        }
    };

    max() {
        let max = this.root;
        while(max.right !== null) {
            max = max.right
        };
        return max.data
    };

    min() {
        let min = this.root;
        while(min.left !== null) {
            min = min.left
        };
        return min.data
    }

    find(data) {
        let initial = this.root;
        while(initial.data !== null) {
            if(data < initial.data && initial.left !== null) {
                // go to the left
                initial = initial.left;
            } else if(data > initial.data && initial.right !== null) {
                initial = initial.right
            } else {
                break;
            }
        }
        return initial
    }

    isPresent(data) {
        let initial = this.root;
        while(initial.data !== null) {
            if(data === initial.data) {
                return true;
            } else if(data < initial.data) {
                initial = new Node(initial.left)
            } else {
                initial = new Node(initial.right);
            }
        }
        return false
    };

    remove(data) {

        const removeNode = (node, data) => {

            if(node === null){
                return null;
            }

            if(node.data === data) {
                // we have found the node
                if(node.left === null &&  node.right === null) {
                    // if the node has no children delete it
                    return null
                } 

                if (node.left === null){
                    return node.right
                }

                if (node.right === null) {
                    return node.left
                }

                let tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if(data < node.data) {
                node.left = removeNode(node.left, data)
                return node;
            } else {
                removeNode(node.right, data)
                return node;
            }
        }

        this.root = removeNode(this.root, data);

    }
}

module.exports = BST;

const t = new BST();

t.add(50);
t.add(17);
t.add(72);
t.add(15);
// t.add(18)
// t.add(70);
// t.add(80)
// t.remove(70)
// t.remove(50)
t.remove(17)
// console.log(t)
console.log(t);
