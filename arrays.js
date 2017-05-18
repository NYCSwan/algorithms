// Find all even number in array

function evens(arr) {
  var evens = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      evens.push(arr[i]);
    }
  }
  return evens
}

// sum pair, unsorted arrg
// Find the minimum (Min) and maximum (Max) numbers from the array.
// In case the numbers are unique, we can allocate a boolean array of length (Max-Min).
// Iterate through the input array and for each number C encountered, mark that index C in the boolean array as true.
// Iterate through the boolean array and for each index i in the array if the index S-i and index i both contain true. Then we found our two numbers which can result in sum S.
// Break the loop and iterate through the input array to find the numbers and report their indices.
// In case the array contains duplicates, we can allocate an int array of length (Max-Min) and initialize it with zeroes.
// Iterate through the input array and for each number C encountered, increment the content of index C in the int array by 1.
// Iterate through the int array and for each index i in the array if the index S-i and index i both are greater than zero. Then we found our two numbers which can result in sum S.
// Break the loop and iterate through the input array to find the numbers and report their indices.

function sumPair(array, sumTarget) {
  if (array.length < 2) return;

  const sortedArr = array.sort(); //figure out later

  for(var i=0; i<array.length; i++){
    for(var j=array.length-1;j>=0; j--) {
      console.log(`i: ${array[i]}`);
      console.log(`j: ${array[j]}`);

    }
  }
}

// shuffle- Knuth Shuffle aka Fisher-Yates shuffle
// input: an ordered array of n numbers
// output: shuffled array

function shuffle(arr, n) {
  for (var i=0; i< n; i++) {
    var randomIndex = Math.floor((Math.random()*n) + 1)
    var temp = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = temp;
    
  }
  return arr
}



// Rotated Sorted Array Search 
// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2 ).

// You are given a target value to search. If found in the array, return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Input : [4 5 6 7 0 1 2] and target = 4
// Output : 0


// translate an array of nums into letters in the corresponding alphabet

// function numsToAlpha(array)
// var alphabet = {
//   1:'a',
// }

// 1 num is a dup, find the dup- array not ordered

function oneDup(array) {
  var checkedNums = {};
  if (array.length <= 1) {
    return array;

  for(var i=0; i<array.length; i++){
    var currentNum = array[i];
    }
    if (!checkedNums[currentNum]){
      checkedNums[currentNum] = 1;
    } else {
      return currentNum;
    }
  }
}

// flatten
function flatten(arrays){
		arrays.reduce(function(flattenedArr, current) {
	  return flattenedArr.concat(current);
	}, []));
}

// bubblesort
function bubbleSort(nums){
  do {
    var swapped = false;
    for(var i=0; i<nums.length; i++){
      if(nums[i] > nums[i+1]){
        var temp = nums[i]
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped)
}
// es6 bubbleSort refactor
const bubbleSort = (nums) {
	do {
		let swapped = false;
		for(let i=0; l=nums.length; i<l; i++){
			if (nums[i]>nums[i+1]) {
				const temp = nums[i];
				nums[i] = nums[i+1];
				nums[i+1] = temp;
				swapped = true;
			}
		}
	} while(swapped);
}

// es6 insertion sort
const insertionSort = (nums) {
	for(let = 1; i < nums.length; i++) {
		for (let j =0; j < nums.length; j++) {
			if(nums[i] < nums[j]) {
				const splice = nums.splice(i, 1);
				const splice(j, 0, splice[0]);
			}
		}
	}
}

function insertionSort(nums) {
  for(var i=1;i<nums.length;i++){
    for(var j=0;j<i;j++){
      if(nums[i]<nums[j]){
        var spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
}

// merge sort

function mergeSort(nums) {
 if (nums.length <2) {
   return nums;
 }
    var mid = Math.floor(length/2);
    var length = nums.length;
    var leftArr = nums.slice(0, mid);
    var rightArr = nums.slice(mid, -1);
    
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(arr1, arr2) {
  var results = [];
  while(arr1.length && arr2.length) { //while bth have length, 
    if (arr1[0] < arr2[0]){
      results.unshift(arr1[0]);
    } else {
      results.unshift(arr2[0]);
    }
  }
  while (arr1.length) {
  	results.push(arr1.shift());
  }
  while(arr2.length) {
  	results.push(arr2.shift());
  }
  return results;
};


// mergeSort with ES6
const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  
  const results = [];
  
  while (left.length && right.length) { 
    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }
  
  while(left.length) {
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  } 
  return results;
};

// 2 sorted arrays, find the median (middle num)
// stitch together with merge algo til middle point then find middle

function middleOfTwoArr(arr1, arr2){ 
	var target = Math.floor((arr1.length + arr2.length)/2);
	var sortedArr = [];
	while (sortedArr.length < target) {
		if(arr1[0] < arr2[0]) {
			sortedArr.push(arr1.shift());
		} else {
			sortedArr.push(arr2.shift());
		}
	}
	return sortedArr.pop();
}

// QUICK SORT 
function quickSort(unsortedArr){
  if (unsortedArr.length < 2) {
    return unsortedArr;
  }
  var len = unsortedArr.length;
  var pivot = unsortedArr[len-1];
  var left = [];
  var right = [];
  
  for(var i=0; i<len-1; i++) {
    if(unsortedArr[i]< pivot) {
      left.push(unsortedArr[i]);
    } else {
      right.push(unsortedArr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// ES6

const quickSort = nums => {
	if(nums.length <=1) return nums;

	const pivot = nums[nums.length-1];
	let left = [];
	let right = [];

	for(var i=0; i < nums.length-1; i++) {
		if(nums[i]< pivot) {
			left.push(nums[i]);
		} else {
			right.push(nums[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
}

// array Lists

clss ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length += 1;
  }
  pop(){
    // const poppedAns = this.data[this.length-1];
    // delete this.data[this.length-1];
    // this.length --;
    // return poppedAns;
    return delete(this.data[this.length-1]);
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }
  _collapseTo(index) {
    for (let i= index; i < this.length; i++) { //move the index to the left
      this.data[i] = this.data[i+1];
    }
    delete this.data(this.length-1);
    this.length--1;
  }
}

// unit tests

describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    insertionSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});

describe('bubble sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    bubbleSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});

describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});

describe('middleOfTwoArr', function() {
	it('should return the median number', () => {
		var arr1 = [1,2,5,7,9];
		var arr2 = [3,6,8, 10,11];
		var ans = middleOfTwoArr(arr1, arr2);
		expect(ans).toEqual(6)
	})
})

describe('quickSort', function() {
  it('quicksort an array', () => {
    const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
    const answer = quickSort(input);
    
    expect(answer).toEqual([1,2,3,4,5,6,7,8,9,10]);

  });
});



















