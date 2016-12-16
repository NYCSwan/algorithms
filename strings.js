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
	if (str1.length != str2.length) {
			return false;
	}
	var sortedStr1 = str1.toLowerCase().split('').sort().join().trim();
	var sortedStr2 = str2.toLowerCase().split('').sort().join().trim();
	return (sortedStr1 == sortedStr2);
}

anagrams('pot', 'top'); 
anagrams('hotel', 'given'); 
anagrams('Army', 'Mary'); 
anagrams('Eleven plus two', 'Twelve plus one'); 

// print first non repeated character from String - AKA unique char
function firstNonRepeatChar(str) {
	var charCount ={};
	var atLeastOne = false;
	var size = str.length;

	for (var i=0; i<size; i++) {
		var character = str[i]
		if (charCount[character]) {
			charCount[character]++;
			atLeastOne = true;
		} else {
			charCount[character] = 0;
		}
	}
	if(atLeastOne) {
		for(var j in charCount) {
			if(charCount[j] == 0) {
				return j;
			}
		}
	}
	return 'no unique characters present'
}

firstNonRepeatChar('asdfkas')
firstNonRepeatChar('boot')
firstNonRepeatChar('boottb')

var firstUniqChar = function(s) {
   for(i=0;i<s.length;i++){
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return s[i];
      } 
   }
   return -1;
};
