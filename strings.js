// Print only dublicate characters 
function duplicates(str) {
	var dupObj = {}
	for(var i=0; i < str.length; i++) {
		var character = str.charAt(i);
		var doubles = {};
		if (dupObj[character]) {
			dupObj[character]++;
		} else {
			dupObj[character] = 1;
		}
	}
	return dupObj;
}

duplicates('javascripts') 

// check if two Strings are anagrams
function anagrams(str1, str2) {
	var sortedStr1 = str1.toLowerCase().trim().split('').sort();
	var sortedStr2 = str2.toLowerCase().trim().split('').sort();
	return (sortedStr1 == sortedStr2);

}

anagrams('pot', 'top'); //true
anagrams('hotel', 'given'); //false
anagrams('Army', 'Mary'); //true
anagrams('Eleven plus two', 'Twelve plus one'); //true