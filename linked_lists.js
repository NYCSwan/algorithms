function linkedList() {
	this.head = null;
	this.length = 0;
}

	linkedList.prototype.sayHi = function() {
		console.log('hi');
	}

	linkedList.prototype.isEmpty = function() {
		return this.head === null;
	}

	linkedList.prototype.size = function() {
		var size = 0;
		var current = this.head
			while (current !== null) {
				size ++;
				current = current.next;
			}
			return size; 
	}

	linkedList.prototype.prepend = function(item) {
		return this.head.unshift(item)
	}

	linkedList.prototype.delete = function(index) {
		while(this.legnth < index) {

		}

	}

	// ES 6 

	class Node {
		constructor(value) {
			this.value = value;
			this.next = null;
		}
	}

	class linkedList {
		constructor(props) {
		this.head = null;
		this.length = 0;
		this.tail = null;
		}

		push(value) {
			const node = new Node(value);
			this.legnth++;
			if (!this.head) { // is head null?
			  this.tail = node;
			} else {
			  this.tail.next = node;
			}
			this.tail = node;
		}
		pop() {
			this.delete(this.length-1);
		}
		get(index){
		 const node = this._find(index, this._testIndex); 
		 if (!node) return null;
		 return node.value;

		}
		delete(index){
			if (index===0) {  //special case if have to delete the heed
				const head = this.head;
				if(head) {
					this.head = head.next
				} else {
					this.head = null;
				}
				this.length--;
				return head.value;
			}
			const node = this._find(index-1, this._testIndex) //looking for the thing before the index to reassign the next.
			const excise = node.next; //what actually gets deleted
			if (!excise) return null;
			node.next = excise.next; //node's pointer before deleted thing becomes the deteled thing's pointer
			if (node.next && !node.next.next) {// if there is a node in the next position but nothing after the deleted thing
				this.tail = this.next;
			}
			this.length--;
			return excise.value;
		}
		_find(comparator, test=this._test) {
		  let current = this.head;
		  let i = 0;
		  while(current) {
		   	if (test(value, current.value, current)){ //looking for, val of node I'm looking at, node itself
		   	  return current;
		   } 
		   current = current.next;
		   i++;
		  }
		  return null;
		}
		_test(a,b){ // _ means internal method, convention
		  return a===b;
		}
		testIndex(search, __, i) { //__ mean I don't care what it is
			return search === i;
		}
	}