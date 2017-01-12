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



















