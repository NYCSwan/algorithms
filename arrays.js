// flatten
function flatten(arrays){
		arrays.reduce(function(flattenedArr, current) {
	  return flattenedArr.concat(current);
	}, []));
}