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
  return results;
};


































