// binary search tree

class Tree {
  constructor() {
    this.root = null;
  }
  toObject() {
    return this.root;
  }
  add(value) {
    if(this.root===null) { //if no head, create new head
      this.root = new Node(value);
      return;
    } 
    let current = this.root; //node currently looking at
    while(true) { //never not a place to put the new value so can use while true, without an inifinte loop
      if(value <= current.value) { //compare
        if(current.left) { //if there's a left child, child becomes current node to compare again until it's the last
          current = current.left;
        } else {  //if no child node, the new val becomes that child
          current.left = new Node(value);
          return;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }
}

class Node {
  constructor(value, left=null, right=null) {
  this.left = left;
  this.right = right;
  this.value = value;
  }
}



// unit tests
describe('Binary Search Tree', function() {
  it('creates a correct tree', () => {
    const nums = [3,7,4,6,5,1,10,2,9,8];
    const tree = new Tree();
    nums.map( num => tree.add(num));
    const objs = tree.toObject();
    render(objs, nums);

    expect(objs.value).toEqual(3);
    
    expect(objs.left.value).toEqual(1);
    expect(objs.left.left).toBeNull();
    
    expect(objs.left.right.value).toEqual(2);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();
    
    expect(objs.right.value).toEqual(7);
    
    expect(objs.right.left.value).toEqual(4);
    expect(objs.right.left.left).toBeNull();
    
    expect(objs.right.left.right.value).toEqual(6);
    expect(objs.right.left.right.left.value).toEqual(5);
    expect(objs.right.left.right.left.right).toBeNull();
    expect(objs.right.left.right.left.left).toBeNull();
    
    expect(objs.right.right.value).toEqual(10);
    expect(objs.right.right.right).toBeNull();
    
    expect(objs.right.right.left.value).toEqual(9);
    expect(objs.right.right.left.right).toBeNull();
    
    expect(objs.right.right.left.left.value).toEqual(8);
    expect(objs.right.right.left.left.right).toBeNull();
    expect(objs.right.right.left.left.left).toBeNull();
  });
});