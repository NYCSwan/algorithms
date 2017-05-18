// lgst prime factor of a num

function lgPrimeFactor(num){
	const factors = [];
	var i=2;
	while (i<=n){
	    if (n%i == 0){
	        n/=i;    
	    }else{
	        i++;
	    }
	}
console.log(i);
}



// tribonacci sequence
// the "Tribonacci" sequence takes the sum of the previous 3 numbers to generate the next number. However unlike the Fibonacci sequence, Tribonacci takes a "signature" or starting array of numbers. Different signatures will generate different sequences.
// Write a function that takes as it's argument a signature and an "N" and return the first n elements (including the signature)
// input = seq, position; output = trib nums up to n

// if the number is %2===0 add it to the sum else continue up to 4mill
function sumEvenFib(seq, n) {
	let last = 1;
	let curr = 2;
	let sum = 0;
	let fib = last + curr;

}

// fibonacci seq

function fibSeq(n) {
	var a = 0;
	var b = 1;
	var f = 1;

	for (var i = 2; i<=n; i++) {
		f = a + b;
		a = b;
		b = f;
	}
	return f;
};

fibSeq(4);

// fib seq recursive

function fibonacci(n) {
	if(n<=2) {
		return 1;
	} else {
		return fibonacci(n-1) + fibonacci(n-2);
	}
}

// recursive factorial
function factorial(n) {
	if(n<2) return 1;
	return n * factorial(n-1);
}

// sum 2 ints from array of integers to equal target num

function sumInts(nums, target) {
    let sumPairs= {};
    for (var i=0; i<nums.length; i++){
        let val = nums[i];
        let complement = target - nums[i];
        if(sumPairs[complement])
        	return [val, complement];
        else
        	sumPairs[val] = complement;
    }
}









