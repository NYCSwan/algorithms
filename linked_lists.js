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
			this.length++;
			if (!this.head) { // is head null?
			 this.tail = node;
			} else {
				this.tail.next = node;
			}
			this.tail = node;
		}
		pop() {

		}
		_find(comparator, test=this._test) {

		}
		_test(a,b){ // _ means internal method, convention
		  return a===b;
		}
		get(index){

		}
		delete(index){

		}
		testIndex(search, __, i) { //__ mean I don't care what it is
			return search === i;
		}
	}