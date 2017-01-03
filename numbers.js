// tribonacci sequence
// the "Tribonacci" sequence takes the sum of the previous 3 numbers to generate the next number. However unlike the Fibonacci sequence, Tribonacci takes a "signature" or starting array of numbers. Different signatures will generate different sequences.
// Write a function that takes as it's argument a signature and an "N" and return the first n elements (including the signature)
// input = seq, position; output = trib nums up to n

function tribonacci(seq, n) {

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