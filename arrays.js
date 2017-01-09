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

// unit tests
describe('bubble sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    bubbleSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});